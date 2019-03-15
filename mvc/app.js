const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => res.send('Hello there!'))

app.listen(port, () => console.log(`${__dirname}`));