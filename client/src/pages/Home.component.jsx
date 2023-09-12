import { useEffect } from "react";
import axios from "axios"

export const Home = () => {
    
    useEffect(() => {
        const fetch = async () => {
            await axios.get('http://localhost:3000/api/workouts')
                .then(res => { console.log(res) })
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
