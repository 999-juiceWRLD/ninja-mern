const express = require('express')
const { getWorkouts, getWorkout, postWorkout } = require('../controller/workoutController')
const router = express.Router();

router
    .get('/', getWorkouts);


module.exports = { router };
