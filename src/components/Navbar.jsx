import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
        if (!open) setTimeout(() => setOpen(false), 5000);
    };

    const handleLinkClick = () => setOpen(false);

    return (
        <nav className="nav">
            <h2>Helen AFH</h2>

            <div className={`nav-links ${open ? "open" : ""}`}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/services" onClick={handleLinkClick}>Services</Link>
                <Link to="/rooms" onClick={handleLinkClick}>Rooms</Link>
                <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}
