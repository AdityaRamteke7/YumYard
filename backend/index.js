import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/FoodRoute.js"

//app config

const app = express()

const port = 5002

//middlerware
app.use(express.json())
app.use(cors())
//Db connetction
connectDB()
// Add food items
//  api end point
app.use("/api/food", foodRouter)
app.use("/image", express.static('uploads'))


app.get("/", (res, req) => {
    req.send("API is working")
})



app.listen(port, () => {
    console.log(`Server is up at ${port}`)
})