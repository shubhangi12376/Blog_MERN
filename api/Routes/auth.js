const router = require("express").Router();
const User = require('../models/User')


//REGISTER
router.post('/register' , async(req,res) => {
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }

})
//LOGIN

router.post('/login' , async(req , res) => {
    try{
        const user = await User.findOne({ username: req.body.username })
         !user && res.status(400).json("wrong credentials")

         const {password, ...others} = user
         if(user.password===req.body.password){
             res.status(200).json(others._doc);
         }else{
             res.status(400).json("Wrong credentials")
         }
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router

