const User = require("../models/User.model")

class UsersController {
  async index(req, res) {
    try {
      const users = await User.find()
    
      res.json(users)
    } catch (error) {
      console.error(error)
    }
  }

  async getUser(req, res) {
    const { id } = req.params

    try {
      const user = await User.findById(id)

      res.json(user)
    } catch (error) {
      console.error(error)
    }
  }

  async store(req, res) {
    const { firstName, lastName, email, password } = req.body

    try {
      const userAlreadyExists = await User.findOne({ email, password })

      if (userAlreadyExists) {
        return res.status(400).json({
          message: "User already exists"
        })
      }

      const user = await User.create({
        firstName,
        lastName,
        email,
        password
      })
    
      res.status(201).json(user)
    } catch (error) {
      console.error(error)
    }
  }

  async update(req, res) {
    const { id } = req.params
    const { password } = req.body
  
    try {
      const user = await User.findByIdAndUpdate(id, { password }, { new: true }) // a prop new serve para retornar os dados já atualizados
  
      if (!user) {
        return res.status(404).json({
          message: "User not found"
        })
      }
  
      res.status(200).json(user)
    } catch (error) {
      console.error(error)
    }
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      await User.findByIdAndDelete(id)
  
      res.status(204)
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new UsersController()