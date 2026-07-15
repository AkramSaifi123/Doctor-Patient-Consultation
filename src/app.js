import express from "express"
import { db } from "./config/db.js"
import { authRouter } from "./router/authRouter.js"
import dotenv from "dotenv"
import doctorRouter from "./router/doctorRouter.js"
import consultationRouter from "./router/consultationRouters.js"
import messageRouter from "./router/messageRouter.js"
import { createTables } from "./database/tableCreate.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use(authRouter)
app.use("/doctor", doctorRouter)
app.use("/consultations", consultationRouter)
app.use("/consultations", messageRouter)

const PORT = process.env.PORT || 3000


createTables()

app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})