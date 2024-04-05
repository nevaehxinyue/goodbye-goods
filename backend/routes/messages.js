const express = require("express");
const router = express.Router();

const Joi = require("joi");
const { Expo } = require("expo-server-sdk");
const auth = require("../middleware/auth");
const validateWith = require("../middleware/validation");

const usersStore = require("../store/users");
const listingsStore = require("../store/listings");
const messagesStore = require("../store/messages");
const sendPushNotification = require("../utilities/pushNotifications");


const schema = Joi.object({
    listingId: Joi.number().required(),
    message: Joi.string().required()
})

router.get('/', auth, (req,res) => {
    const messages = messagesStore.getMessagesForUser(req.user.userId);

    const mapUser = (userId) => {
        const user = usersStore.getUserById(userId);
        return { id: user.id, name: user.name};
    }

    const resources = messages.map((message) => ({
        id: message.id,
        listingId: message.listingId,
        dateTime: message.dateTime,
        content: message.content,
        fromUser: mapUser(message.fromUserId),
        toUser: mapUser(message.toUserId),
        userImage: message.userImage,      
    }));

    res.send(resources);
});

router.post("/:id", auth, (req, res) => {
    try {
        // console.log(req.params.id)
        messagesStore.deleteMessage(parseInt(req.params.id));
        res.status(201).send("Delete it successfully.");
    } catch (error) {
        res.send({error: "Failed to delete the message."})     
    }
    
});

router.post("/", [auth, validateWith(schema)], async(req, res) => {
    const { listingId, message } = req.body;

    const listing = listingsStore.getListing(listingId);
    if(!listing) return res.status(400).send({ error: "Invalid listing ID."});

    const fromUser = usersStore.getUserById(req.user.userId);

    const targetUser = usersStore.getUserById(parseInt(listing.userId));
    if(!targetUser) return res.status(400).send({ error: "Invalid user ID."});

    try {
        messagesStore.add({
            fromUserId: req.user.userId,
            toUserId: listing.userId,
            listingId,
            content: message,
            userImage: fromUser.profileImage

        });
        
    } catch (error) {
        return res.status(400).send({error: "Failed to add message", error})
        
    }

   
    // const { expoPushToken } = targetUser;

    // if (Expo.isExpoPushToken(expoPushToken)) {
    //     await sendPushNotification(expoPushToken, message);
    // };

    res.status(201).send();

});

module.exports = router;