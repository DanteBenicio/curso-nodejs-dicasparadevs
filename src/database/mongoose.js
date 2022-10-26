const mongoose = require("mongoose")

function connectToDatabase() {
  mongoose.connect(process.env.MONGODB_URI, (error) => {
    if (error) {
      return console.log(error)
    }

    console.log("Connection to database has been connected with success!")
  })
}

module.exports = connectToDatabase