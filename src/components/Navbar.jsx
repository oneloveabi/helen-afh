import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Helen_Logo.png";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

    // Close menu on outside click or scroll
    useEffect(() => {
        const handleOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        const handleScroll = () => setOpen(false);

        window.addEventListener("mousedown", handleOutside);
        window.addEventListener("touchstart", handleOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("mousedown", handleOutside);
            window.removeEventListener("touchstart", handleOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = () => setOpen(false);

    return (
        <nav className="nav" ref={navRef}>
            <div className="container nav-inner">

                {/* Logo / Title */}

                <Link to="/" className="logo">
                    <img src={logo} alt="Helen AFH Logo" style={{ height: "100px", objectFit: "contain" }} />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/rooms">Rooms</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Hamburger */}
                <button
                    className="hamburger"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

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