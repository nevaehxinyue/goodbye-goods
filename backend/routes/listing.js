const express = require("express");
const router = express.Router();
const listingsStore = require("../store/listings");
const listingMapper = require("../mappers/listings");
const auth = require("../middleware/auth");


router.get("/:id", auth, (req, res) => {
    const listing = listingsStore.getListing(parseInt(req.params.id));
    if(!listing) return res.status(404).send();

    const resource = listingMapper(listing);
    res.send(resource);
});

module.exports = router;