var express = require('express')
var cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const fileRoute = require('./routes/file')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

app.use('/api/fileanalyse', upload.single('upfile'), fileRoute)

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})
