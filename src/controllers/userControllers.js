const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');

const createNewUser = async (req, res) => {
  let user = new User(req.body);
  const password = user.password;
  bcrypt.hash(password, 10, async (err, hash) => {
    user.password = hash;
    const newUser = await user.save();
    res.json({message: `the user ${newUser.name} was created, now you can logging`} )
  })
}

const logginUser = async (req, res) => {
  const user = await User.findOne({email: req.body.email});
  if(user) {
    const password = user.password;
    bcrypt.compare(req.body.password, password, (err, data) => {
      if(data === true) {
        res.json({
          isLogged: true,
          name: user.name,
          email: user.email,
          userId: user._id,
          avatar: user.avatar
        })
      } else {
        res.json({
            isLogged: false,
            message: `password to user: ${user.name}, is incorrect`
        })  
      } 
    })
  } else {
    res.json({
      isLogged: false,
      message: "The email is incorrect"
    })
    }
}

const getAllUsers = async (req, res) => {
  const allUser = await User.find();
  res.json(allUser)
}

module.exports = {
  createNewUser,
  logginUser,
  getAllUsers
}