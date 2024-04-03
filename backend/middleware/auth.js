const Jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");
    // Check if the user has logged in or not 
    //Step 1: check if the 'Authorization' header that should be registered after the user logs in exists 
    console.log(`Authorization Token: ${token}`)
    
    if(!token)
        return res.status(401).send({error: "Access denied. No token provided."});

    try {
        const payload = Jwt.verify(token, 'jwtPrivatekey');
        console.log(`payload: ${payload}`)
        req.user = payload;
        next();

    }catch(error) {
        res.status(400).send({error: "Invalid token.",  message: error.message})

    }
}