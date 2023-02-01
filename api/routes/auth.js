//Add router (.Router)
//Add user from models
//Add bycrypt for hashing password

const router = require("express").Router();
const User = require ("../models/User");
const bcrypt = require("bcrypt");

// app.use(express.json());


//Register

//refer link https://www.npmjs.com/package/bcrypt for bycrypt code

//try catch method to read the error

router.post("/register", async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });
  
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//LOGIN
router.post("/login", async (req, res) => {
    try {

      //validating the username and password
      //200 for success and 500 for error
       
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(400).json("Wrong credentials!");
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials!");
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
