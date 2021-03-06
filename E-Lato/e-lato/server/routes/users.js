const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/* CREATE new user */
router.post("/register", (req, res) => {
    const { first_name, last_name, phone, address, email, password, type } = req.body;

    // If any fields are missing, return
    if (!first_name || !last_name || !phone || !address || !email || !password || !type) {
        return res.status(400).send("Please enter the required fields.");
    }

    bcrypt
        .hash(password, 8)
        .then((hashedPassword) => {
            return new User({
                ...req.body,
                password: hashedPassword,
            }).save();
        })
        .then(() => {
            res.status(201).send("Registered successfully");
        })
        .catch(() => {
            res.status(400).send("Failed registration");
        });
});

/* LOGIN user */
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    // If any fields are missing, return
    if (!email || !password) {
        return res.status(400).send("Please enter the required fields.");
    }

    User.where({ email: email })
        .fetch()
        .then((user) => {
            const isPasswordCorrect = bcrypt.compareSync(password, user.attributes.password);

            if (!isPasswordCorrect) return res.status(400).send("Invalid password");

            const token = jwt.sign(
                { id: user.id, email: user.attributes.email },
                process.env.JWT_SECRET,
                { expiresIn: "24h" }
            );

            res.json({ token });
        })
        .catch(() => res.status(400).send("Invalid credentials"));
});

/* GET current user */
router.get("/current", (req, res) => {
    // If there is no auth header provided
    if (!req.headers.authorization) return res.status(401).send("Please login");

    // Parse the Bearer token
    const authToken = req.headers.authorization.split(" ")[1];

    // Verify the token
    jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send("Invalid auth token");

        // Find the user
        User.where({ email: decoded.email })
            .fetch()
            .then((user) => {
                // Respond with the user data (except password)
                res.json({ ...user.attributes, password: null });
            });
    });
});


router.post("/current", (req, res) => {
    // If there is no auth header provided
    if (!req.headers.authorization) return res.status(401).send("Please login");

    // Parse the Bearer token 
    const authToken = req.headers.authorization.split(" ")[1];

    // Verify the token
    jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send("Invalid auth token");
        console.log(decoded)

        // Find the user
        User.where({ email: decoded.email })
            .fetch()
            .then((user) => {
                const { hobbies } = req.body;
                return user.set('hobbies', hobbies).save()
            });
    });
});

module.exports = router;
