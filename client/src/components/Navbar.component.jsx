import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="container">
            <Link to={'/'}>
                <h1>Workout Buddy</h1>
            </Link>
        </div>
    );
}