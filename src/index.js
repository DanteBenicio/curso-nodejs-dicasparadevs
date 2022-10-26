require("dotenv").config()
const connectToDatabase = require('./database/mongoose')

// require('./modules/path')
// require('./modules/fs')
// require("./modules/http")

connectToDatabase()

require("./modules/express")
