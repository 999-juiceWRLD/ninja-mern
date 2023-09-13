import formatDistanceToNow from "date-fns/formatDistanceToNow"
import axios from "axios";

export const WorkoutDetails = ({ workout }) => {

    const handleClick = async () => {
        await axios.delete(`http://localhost:3000/api/workouts/${workout._id}`)
            .then(res => { console.log(res.data) })
            .catch(err => { console.log(err) })
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    );
}
