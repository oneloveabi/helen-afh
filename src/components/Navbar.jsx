import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

    // Auto-close after 5 seconds
    useEffect(() => {
        let timer;
        if (open) {
            timer = setTimeout(() => setOpen(false), 5000);
        }
        return () => clearTimeout(timer);
    }, [open]);

    // Close on scroll or click outside
    useEffect(() => {
        const handleOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        const handleScroll = () => open && setOpen(false);

        window.addEventListener("mousedown", handleOutside);
        window.addEventListener("touchstart", handleOutside);
        window.addEventListener("scroll", handleScroll, true);

        return () => {
            window.removeEventListener("mousedown", handleOutside);
            window.removeEventListener("touchstart", handleOutside);
            window.removeEventListener("scroll", handleScroll, true);
        };
    }, [open]);

    const handleLinkClick = () => setOpen(false);

    return (
        <nav className="nav" ref={navRef}>
            <h2>Helen AFH</h2>

            {/* Use conditional rendering to fully remove menu from DOM when closed */}
            {open && (
                <div className="nav-links open">
                    <Link to="/" onClick={handleLinkClick}>Home</Link>
                    <Link to="/services" onClick={handleLinkClick}>Services</Link>
                    <Link to="/rooms" onClick={handleLinkClick}>Rooms</Link>
                    <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
                    <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                </div>
            )}

            <div className="hamburger" onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}
