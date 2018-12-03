const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const queries = require('./queries')
const bodyparser = require('body-parser')
var data =  [
    {id: 1, word: "word9"},
    {id: 2, word: "word10"},
    {id: 3, word: "word11"}
]
app.use(cors())
app.use(bodyparser.json())

app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})
app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(students => res.send(students))
})
app.post('/', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students[0]))
})
app.delete('/:id', (req,res) => {
    queries.deleteStudent(req.params.id).then(res.sendStatus(204))
})
app.put('/:id', (req, res) => {
    queries.updateStudent(req.params.id, req.body).then(updatedStudent => res.json(updatedStudent[0]))
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))