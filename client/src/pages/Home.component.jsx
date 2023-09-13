import { useState, useEffect } from "react";
import { WorkoutDetails } from "../components/WorkoutDetails.component"
import { WorkoutForm } from "../components/WorkoutForm.component";
import axios from "axios"

export const Home = () => {
    
    const [workouts, setWorkouts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const traverseArrIfEmpty = (array) => {
        if (workouts.length === 0) {
            return (<NoElement />) 
        } else if (workouts.length > 0) {
            return (
                <div className="workouts">
                    {array.map((e, idx) => (
                        <WorkoutDetails 
                            key={idx}
                            workout={e}
                        />
                    ))}
                </div>
            )
        }
    }

    const NoElement = () => {
        return (
            <p>{errorMessage}</p>
        );
    }

    useEffect(() => {
        const fetch = async () => {
            await axios.get('https://ninja-mern-backend.vercel.app/api/workouts')
                .then(res => { 
                    if (res.status === 200) {
                        return res.data;
                    }
                })
                .then(data => {
                    if (data.workouts) {
                        setWorkouts(data.workouts)
                    } else {
                        setErrorMessage(data['noContentErr']);
                    }
                })
                .catch(err => { console.log(err)})
        }
        fetch();
        }, [workouts])

    return (
        <div className="home">
            {traverseArrIfEmpty(workouts)}
            <WorkoutForm />
        </div>
    );
}
