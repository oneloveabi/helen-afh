import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/Helen_Logo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

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

                {/* Logo */}
                <Link to="/" className="logo">
                    <img
                        src={logo}
                        alt="Helen AFH Logo"
                        style={{ height: "80px", objectFit: "contain" }}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/rooms">Rooms</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>

                    {/* Call Button */}
                    <a href="tel:2532707790" className="call-btn">
                        <FaPhoneAlt /> Call Now
                    </a>
                </div>

                {/* Hamburger Icon */}
                <button
                    className="hamburger"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    {open ? <FaTimes /> : <FaBars />}
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

                    <a href="tel:4255135855" className="call-btn mobile-call">
                        <FaPhoneAlt /> Call Now
                    </a>
                </div>
            )}
        </nav>
    );
}