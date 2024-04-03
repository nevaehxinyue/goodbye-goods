const express = require("express");
const router = express.Router();
const usersStore = require("../store/users");
const auth = require("../middleware/auth");
const listingsStore = require("../store/listings")

//Get the user info and the number of his/her listings
router.get('/:id', auth, (req, res) => {
    const userId = parseInt(req.params.id);
    const user = usersStore.getUserById(userId);
    if(!user) 
        return res.status(404).send();

    const listings = listingsStore.filterListings(
        listing => listing.userId === userId   
    );

    res.send({
        id: user.id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        listings: listings.length
    })
}) ;

module.exports = router;