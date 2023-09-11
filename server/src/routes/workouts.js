const express = require('express')
const { getWorkouts,
        deleteWorkouts,
        getWorkout,
        postWorkout,
        deleteWorkout,
        patchWorkout } = require('../controller/workoutController')
const router = express.Router();

router
    .route('/')
    .get(getWorkouts)
    .post(postWorkout)
    .delete(deleteWorkouts)

router
    .route('/:id')
    .get(getWorkout)
    .delete(deleteWorkout)
    .patch(patchWorkout)

module.exports = router;
