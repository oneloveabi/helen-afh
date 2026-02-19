import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

    // Close after 5 seconds
    useEffect(() => {
        let timer;
        if (open) {
            timer = setTimeout(() => setOpen(false), 5000);
        }
        return () => clearTimeout(timer);
    }, [open]);

    // Close if user scrolls or clicks outside menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        const handleScroll = () => {
            if (open) setOpen(false);
        };

        window.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("touchstart", handleClickOutside);
        window.addEventListener("scroll", handleScroll, true); // capture scroll on all elements

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("touchstart", handleClickOutside);
            window.removeEventListener("scroll", handleScroll, true);
        };
    }, [open]);

    const handleLinkClick = () => setOpen(false);

    return (
        <nav className="nav" ref={navRef}>
            <h2>Helen AFH</h2>

            <div className={`nav-links ${open ? "open" : ""}`}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/services" onClick={handleLinkClick}>Services</Link>
                <Link to="/rooms" onClick={handleLinkClick}>Rooms</Link>
                <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </div>

            <div className="hamburger" onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}
