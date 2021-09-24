const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')

const rawBodySaver =  (req, res, buf, encoding) =>{
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8')
  }
}

const options = {
  verify: rawBodySaver
}

app.use(cors({
    origin: 'http://localhost'
}))
app.use(bodyParser.json(options))

app.post('/', (req, res) => {
  let raw = (req.rawBody!==undefined) ? JSON.parse(req.rawBody) : {}

  console.log('req.body:',req.body)

  console.log('req.rawBody',req.rawBody)

  res.set('Content-Type', 'application/json')
  
  let resObj = {
   "success": true,
   "data": {
    "message": "ok!",
    "items": [
      {"name": "get","total":"500"},
      {"name": "pop","total":"400"},
      {"name": "post","total":"800"},
      {"name": "delete","total":"100"},
      {"name": "some","total":"900"},
    ],
    "_post": raw
   }
  }
  
  res.status(200).json(resObj)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
