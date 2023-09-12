import { useState, useEffect } from "react";
import { WorkoutDetails } from "../components/WorkoutDetails.component"
import axios from "axios"

export const Home = () => {
    
    const [workouts, setWorkouts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const traverseArrIfEmpty = (array) => {
        if (workouts.length === 0) {
            return (<NoElement />) 
        } else if (workouts.length > 0) {
            return array.map((e, idx) => (
                <WorkoutDetails 
                    key={idx}
                    workout={e}
                />
            ));
        }
    }

    const NoElement = () => {
        return (
            <p>{errorMessage}</p>
        );
    }

    useEffect(() => {
        const fetch = async () => {
            await axios.get('http://localhost:3000/api/workouts')
                .then(res => { 
                    if (res.status === 200) {
                        return res.data;
                    }
                })
                .then(data => {
                    if (data.workouts) {
                        console.log(data.workouts);
                        setWorkouts(data.workouts)
                    } else {
                        setErrorMessage(data['noContentErr']);
                        console.log(data);
                    }
                })
                .catch(err => { console.log(err)})
        }
        fetch();
        }, [])

    return (
        <div className="home">
            <h1>Home</h1>
            {traverseArrIfEmpty(workouts)}
        </div>
    );
}
