const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('Request: /')
  res.send('Hello World!')
})

app.get('/crash', (req, res) => {
  console.log('Request: /crash')
  process.exit()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
