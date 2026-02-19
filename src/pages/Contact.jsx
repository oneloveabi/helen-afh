import React from "react";

export default function Contact() {
    return (
        <section className="contact-page">
            <h2>Contact Us</h2>
            <p>Have questions or want to schedule a tour? Fill out the form below.</p>
            <form className="contact-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}