const { Router } = require("express")
const UsersController = require("./controllers/UsersController")
const User = require("./models/User.model")

const router = Router()

router.get("/users", UsersController.index)
router.post("/users", UsersController.store)
router.get("/users/:id", UsersController.getUser)
router.patch("/users/:id", UsersController.update)
router.delete("/users/:id", UsersController.delete)

router.get('/views/users', async (req, res) => {
  const users = await User.find()

  res.render('index', { users })
})

router.get('/views/users/register', async (req, res) => {
  res.render('register')
})

module.exports = router