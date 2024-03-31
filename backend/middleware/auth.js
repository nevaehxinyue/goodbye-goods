const Jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.header("Authorization");
    // Check if the user has logged in or not 
    //Step 1: check if the 'Authorization' header that should be registered after the user logs in exists 
    if(!authHeader) 
        return res.status(401).send({error: "Access denied. No token provided."});
    // Step 2: Split the header value by space and get the token part
    const token = authHeader.split(' ')[1];
    if(!token)
        return res.status(401).send({error: "Access denied. No token provided."});

    try {
        const payload = Jwt.verify(token, 'jwtPrivateKey');
        req.user = payload;
        next();

    }catch(error) {
        res.status(400).send({error: "Invalid token."})

    }
}