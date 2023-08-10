var jwt = require('jsonwebtoken');
const JWT_SECRET = "Nikhilisagoodb&oy";


const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object.
    const token = req.header('auth-token');
    // If Token is not present the if block will be execute and showing the error massage in the webpage.
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        // Verify is method is user to verify the String and Secrete key.
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        // What next() is doing ?
        //  next() is used to forward the request.
        next();
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}


module.exports = fetchuser;