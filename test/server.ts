import express from "express"
import { emitter } from "./src/events"

const app = express()
app.use(express.json())

app.post("/event", (req, res)=>{
    emitter.emit("handleAsync", req)
    res.send("Successful")
})

app.listen(3000)