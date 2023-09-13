import { useState } from "react";
import axios from "axios";

export const WorkoutForm = () => {
    
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [notify, setNotifier] = useState(null);

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps };
        const values = [];
        [title, load, reps].map(e => { values.push(e) })
        const mappedObject = Object.keys(workout).reduce((acc, key, index) => {
            const value = values[index];
            // Check if the value is not an empty string before mapping
            if (value !== "") {
              acc[key] = value;
            }
            return acc;
          }, {});
        await axios.post('https://ninja-mern-backend.vercel.app/api/workouts', mappedObject, config)
            .then(res => {
                    const notify = res.data.message;
                    setNotifier(notify)
                }
            )
            .catch(err => { 
                const errMessage = err.response.data.errMessage; 
                setNotifier(errMessage);
            })
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title:</label>
            <input 
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
                value={title}/>
            
            <label>Load (Kg):</label>
            <input 
                onChange={(e) => setLoad(e.target.value)}
                type="number" 
                value={load}/>
            <label>Reps:</label>
            <input 
                onChange={(e) => setReps(e.target.value)}
                type="number" 
                value={reps}/>
            <button>Add Workout</button>
            {notify && <div className="error">{notify}</div>}
        </form>
    );
}
