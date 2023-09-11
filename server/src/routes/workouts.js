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
    .delete(deleteWorkouts)

router
    .route('/:id')
    .get(getWorkout)
    .post(postWorkout)
    .delete(deleteWorkout)
    .patch(patchWorkout)

module.exports = router;
