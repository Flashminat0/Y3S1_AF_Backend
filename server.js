import express from 'express'
import {readdirSync} from 'fs'
import mongoose from 'mongoose'

const cors = require('cors')
const app = express()

require('dotenv').config()

mongoose
    .connect(process.env.DATABASE)
    .then((r) => {
        console.log('Connected to database')
    })
    .catch((e) => {
        console.log('Error connecting to database')
    })

app.use(express.json({limit: '5mb'}))

const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    withCredentials: true,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))
