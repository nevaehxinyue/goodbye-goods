const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = require("config");
const Joi = require("joi");

const listingsStore = require("../store/listings");
const listingMapper = require("../mappers/listings");
const auth = require("../middleware/auth");
const categoriesStore = require("../store/categories");
const validateWith = require("../middleware/validation");
const imageResize = require("../middleware/imageResize");

const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

const schema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow(""),
  price: Joi.number().required().min(1),
  categoryId: Joi.number().required().min(1),
  location: Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
  }).optional(),
});

const validateCategoryId = (req, res, next) => {
  if (!categoriesStore.getCategory(parseInt(req.body.categoryId)))
    return res.status(400).send({ error: "Invalid Category ID." });
};

router.get("/", (req, res) => {
  const listings = listingsStore.getListings();
  const resources = listings.map(listingMapper);
  res.send(resources);
});

//upload.array allows the server to handle multiple file uploads in a single request.
// And it adds a 'file' property to the 'req' object, where we can access the files
// in subsequent middleware or route handlers. Each file object in 'req.file' will
//contain info about the file, like its original name, the path to the temporary file
//on the server, the MIME type, and the size of the file.
// Also, it specifies this middleware should expect an array of files with the field
//name 'images'. (e.g. <input type="file" name="images" multiple> )
router.post(
  "/",
  [
    auth,
    upload.array("images", config.get("maxImageCount")),
    validateWith(schema),
    validateCategoryId,
    imageResize,
  ],
  (req, res) => {
    const listing = {
        title: req.body.title,
        price: parseFloat(req.body.price),
        userId: req.user.userId, 
        categoryId: parseInt(req.body.categoryId),
        description: req.body.description,
    };

    listing.images = req.images.map((fileName) => ({ fileName: fileName}));
    if( req.body.location ) listing.location = JSON.parse(req.body.location);

    listingsStore.addListing(listing);

    res.status(201).send(listing);
    
  }
);

module.exports = router;
