const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Jwt = require("jsonwebtoken");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(5)
})

// For registering a json web token when the user is trying to log in
router.post('/', validateWith(schema), (req, res) => {
    const { email, password } = req.body;
    const user = usersStore.getUserByEmail(email);
    if(!user || user.password !== password)
        return res.status(400).send({ error: "Invalid email or password."});

    const token = Jwt.sign(
        { userId: user.id, name: user.name, email},
        "jwtPrivatekey"
    );
    console.log(`logInToken: ${token}`)
    res.send(token);
})

module.exports = router;

