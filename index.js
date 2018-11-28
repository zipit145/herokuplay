const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
var data =  [
    {id: 1, word: "word9"},
    {id: 2, word: "word10"},
    {id: 3, word: "word11"}
]
app.use(cors())

app.get('/words', (req, res) => {
    res.send({data})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))