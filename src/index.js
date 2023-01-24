import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import router from './routes/businessCardRoutes.js'

const app = express()

app.use(express.json())
app.use(router)

const PORT = process.env.PORT
app.listen(PORT, () => console.info(`server is running at port: ${PORT}`))
