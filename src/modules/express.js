const express = require("express")
const app = express()
const router = require('../routes')

app.use(express.json())
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`)
  console.log(`Content Type: ${req.headers['content-type']}`)
  
  next()
})
app.use('/', router)
app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.listen(8080, () => console.log("Server is running on port 8080"))