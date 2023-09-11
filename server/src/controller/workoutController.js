const Workout = require('../models/Workout.model')

const getWorkouts = async (req, res) => {
    await res.json({ message: "get all workouts"});
}

const deleteWorkouts = async (req, res) => {
    
}

const getWorkout = async (req, res) => {
    const { id } = req.body;
}

const postWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json({
            message: 'workout added to database.',
            data: workout
        })
    } catch (err) {
        res.status(404).json({
            errMessage: err.message
        })
    }
    
}

const deleteWorkout = async (req, res) => {
    const { id } = req.body;

}

const patchWorkout = async (req, res) => {
    const { id } = req.body;
}

module.exports = {
    getWorkouts,
    deleteWorkouts,
    getWorkout,
    postWorkout,
    deleteWorkout,
    patchWorkout
}
