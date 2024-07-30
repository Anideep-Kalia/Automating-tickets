const express = require('express')
var cors = require('cors')

const app = express()
const port = 5000

dbConnection()
app.get('/', (req, res) => {
  res.send('Hello')
})

app.use(express.json())
app.use(cors())

app.use('/api',require('./routes/jira_issue'))      



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})