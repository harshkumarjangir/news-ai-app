import User from '../model/User.js';
import bcrypt from 'bcrypt'

export const login = (req, res) => {

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