const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const listingsStore = require("../store/listings");
const listingMapper = require("../mappers/listings");

router.get('/', auth, (req, res) => {

    const listings = listingsStore.getListingsByUserId(req.user.userId);
  
    const resources = listings.map(listingMapper);
    // console.log(`myListings: ${resources}`)
    res.send(resources);
    
});

module.exports = router;