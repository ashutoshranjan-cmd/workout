const express = require('express')

const router = express.Router()
// const workout = require('../models/workoutModels')
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)
//Get all workouts
router.get('/',getWorkouts)

//Get a single workout
router.get('/:id',getWorkout)

//post a new workout

router.post('/', createWorkout)

//delete a workout
router.delete('/:id',deleteWorkout)



// update a workout
router.patch('/:id',updateWorkout)
module.exports  = router
