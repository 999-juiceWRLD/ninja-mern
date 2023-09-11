const { default: mongoose } = require('mongoose');
const Workout = require('../models/Workout.model')

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({ });
    if (workouts.length !== 0) {
        res.status(200).json({ workouts });
    } else {
        res.status(404).json({ noContentErr: 'there\'s no element in the database.' })
    }
}

const deleteWorkouts = async (req, res) => {
        const workouts = await Workout.deleteMany({ });
        res.status(200).json({
            message: 'all workout data deleted successfully.',
        });
}

const getWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                invalidIdErr: 'no such workout data found.'
            });
        }
        const workout = await Workout.findById(id);
        if (workout) {
            res.status(200).json(workout);
        } else {
            res.status(404).json({ message: 'no such workout data found.' });
        }
    } catch (err) {
        res.status(404).json({
            errMessage: err.message
        })
    }
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
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                invalidIdErr: 'no such workout data found.'
            });
        }
        const workout = await Workout.findByIdAndDelete(id);
        res.status(200).json({
            message: 'data removed from database'
        })
    } catch (err) {
        res.status(404).json({
            errMessage: err.message
        })
    }

}

const patchWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                invalidIdErr: 'no such workout data found.'
            });
        }
        const workout = await Workout.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            message: 'data updated successfully.',
        })
    } catch (err) {
        res.status(404).json({
            errMessage: err.message
        })
    }
}

module.exports = {
    getWorkouts,
    deleteWorkouts,
    getWorkout,
    postWorkout,
    deleteWorkout,
    patchWorkout
}
