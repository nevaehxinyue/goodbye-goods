const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const listingsStore = require("../store/listings");
const listingMapper = require("../mappers/listings");

router.get('listings', auth, (req, res) => {
    const listings = listingsStore.filterListings(
        listing => listing.userId === req.user.userId
    );
    const resources = listings.map(listingMapper);
    res.send(resources);
    
});

module.exports = router;