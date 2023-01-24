import express from 'express'

const app = express()

app.use(express.json())

const PORT = 7070
app.listen(PORT, () => console.info(`server is running at port: ${PORT}`))
