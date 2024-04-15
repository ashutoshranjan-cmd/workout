require('dotenv').config()
const express = require('express')


const cors = require('cors')


//express app
const app = express()
const workoutRoutes = require('./routes/workouts.js')
const userRoutes = require('./routes/user.js')
//middle ware
app.use(express.json())
app.use(cors())
const mongoose = require('mongoose')
app.use((req,res,next)=>{
    // console.log(req.path,req.method)
    next()
})

//routes
app.get('/',(req,res)=>{
    res.json({mssg:"welcome to the app"})
}
)

// routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/users',userRoutes)

// connect to the database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//listen for request
    app.listen(process.env.PORT,()=>{
    console.log("The database is connected and listening on port ",process.env.PORT)
}) 
})
.catch((error)=>{
    console.log(error)
})
