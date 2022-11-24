const express = require('express')
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/auth.js')
const PORT = process.env.PORT || 5000
// const xhr = new XMLHttpRequest();

// const url = "/auth";
// xhr.open("GET", url);
// xhr.onreadystatechange = someHandler;
// xhr.send();



require('dotenv').config()
app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/auth', authRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`) )


