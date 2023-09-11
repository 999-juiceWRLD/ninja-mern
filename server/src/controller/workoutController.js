const getWorkouts = async (req, res) => {
    await res.json({ message: "get all workouts"});
}

const getWorkout = async (req, res) => {
    const { id } = req.body;
}

const postWorkout = async (req, res) => {

}

const deleteWorkout = async (req, res) => {
    const { id } = req.body;

}

const patchWorkout = async (req, res) => {
    const { id } = req.body;
}

module.exports = {
    getWorkouts,
    getWorkout,
    postWorkout,
    deleteWorkout,
    patchWorkout
}
