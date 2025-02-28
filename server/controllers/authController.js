import User from '../model/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({
        message: "User is not Registered, Please register and try again"
      })
    }

    // Check if Password matched
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({
        message: "Password do not match"
      })
    }

    // JWT Token Generation -- Header-Payload-Secret String

    // sign()--> Takes 3 methods -- Payload, Secret String, Expiry
    const token = jwt.sign({ id: user._id, name: user.name }, 'hello_this_string', { expiresIn: '1d' })

    // setting Token on Cookie
    res.cookie('token', token, {
      httpOnly: true,
    })

    res.status(200).json({
      token,
      message: "Login Successful"
    })

  } catch (error) {

  }
}


export const verify = async (req, res) => {
  console.log('verify wali api', req.user);
  if (!req.user) {

  } else {
    return res.status(200).json({
      authenticated: true,
      id: req.user.id,
      name: req.user.name
    })
  }

}


export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Check if User already exist / registered
    const user = await User.findOne({ email })
    console.log(user);


    if (user) {
      return res.status(404).json({
        message: "User is already Registered, Please LogIn"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    // const newUser = await User.create({ name, email, password })
    const newUser = await User.create({ name, email, password: hashedPassword })


    res.status(201).json({
      data: newUser,
      message: "User Registered Successfully"
    })
  } catch (error) {

  }
}