import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <h2>Helen AFH</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Care</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}
