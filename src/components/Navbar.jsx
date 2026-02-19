import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

    // Auto-close mobile menu
    useEffect(() => {
        if (!open) return;
        const timer = setTimeout(() => setOpen(false), 5000);
        return () => clearTimeout(timer);
    }, [open]);

    // Close mobile menu on scroll or outside click
    useEffect(() => {
        const handleOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
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
            {/* Make title clickable */}
            <Link to="/" style={{ textDecoration: "none" }}>
                <h2>Helen AFH</h2>
            </Link>

            {/* Desktop Menu */}
            <div className="nav-links desktop">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="hamburger" onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="nav-links mobile open">
                    <Link to="/" onClick={handleLinkClick}>Home</Link>
                    <Link to="/services" onClick={handleLinkClick}>Services</Link>
                    <Link to="/rooms" onClick={handleLinkClick}>Rooms</Link>
                    <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
                    <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
