import { useEffect } from "react";
import axios from "axios"

export const Home = () => {
    
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
                    } else {
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
        </div>
    );
}
