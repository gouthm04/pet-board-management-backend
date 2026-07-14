const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://goutham:goutham123@cluster0.umdwywd.mongodb.net/petboardingdb")
    .then(
        () => {
            console.log("MongoDB Connected")
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )

const Pet = mongoose.model("Pets", new mongoose.Schema(
    {
        bookingId: String,
        petName: String,
        petType: String,
        breed: String,
        age: String,
        weight: String,
        vaccinationStatus: String,
        ownerName: String,
        ownerPhone: String,
        ownerEmail: String,
        checkInDate: String,
        checkOutDate: String,
        kennelNumber: String
    }
))

app.get("/test", (req, res) => {
    res.send("Hi")
})


app.listen(3000, () => {
    console.log("Server Started")
})
