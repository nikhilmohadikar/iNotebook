const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { query, validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "Nikhilisagoodb&oy";

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required.
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password atleast must be a 5 character').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    // when we write async function it will execue when any promise is await else throwing error massage.
    // What do await - Wait / Stop the code whenever all the code running perfectly else it will trow the error. 
    // If there are error, return Bad request and error.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    // Check whether the user with this email exist already.
    try {
        let user = await User.findOne({ success, email: req.body.email })

        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)
        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)
        // console.log(authToken)
        success = true
        res.json({ success, authToken })
        // Catch the error
    } catch (error) {
        // console.error(error.massage)
        res.status(500).send("Interanl Server Error")
    }
})



// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // To get the data from the database Eg. email and password. Destructuring.
    const { email, password } = req.body;
    try {
        // Get the email from the database and check this email is present or not.
        let user = await User.findOne({ email });
        if (!user) {
            success = false;
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        // It is compare the password which is entered the user to the database
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        // I have used to check id is present or not in our database if yes return login otherwise Not.
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true
        res.json({ success, authtoken })

        // In case email or password incorrect then catch block will be executes. 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        // Except password all information save to the database. Password is save in the formate of Token.
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router