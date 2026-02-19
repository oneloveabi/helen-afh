import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav">
            <h2>Helen AFH</h2>
            <div className={`nav-links ${open ? "open" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Care</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="hamburger" onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}
