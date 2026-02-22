import { useState } from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCalendarAlt
} from "react-icons/fa";

export default function Contact() {
    const [reserveTour, setReserveTour] = useState(false);

    return (
        <section id="contact" className="section contact-page">
            <div className="container">

                <h2>Contact Us</h2>
                <p className="subtitle">
                    Have questions or want to schedule a visit? We’re here to help.
                </p>

                {/* CONTACT INFO CARDS */}
                <div className="contact-info">
                    <a href="tel:4255135855">
                        <FaPhoneAlt /> (425) 513-5855
                    </a>

                    <a href="mailto:helenayana@helenadultfamilyhome.com">
                        <FaEnvelope /> Email Us
                    </a>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=133+107th+St+SE,+Everett,+WA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaMapMarkerAlt /> Everett, WA
                    </a>
                </div>

                {/* FORM */}
                <form
                    action="https://formsubmit.co/helenayana@helenadultfamilyhome.com"
                    method="POST"
                    className="contact-form"
                >
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                        type="hidden"
                        name="_subject"
                        value="New Contact — Helen Adult Family Home"
                    />
                    <input
                        type="hidden"
                        name="_next"
                        value={`${window.location.origin}/thank-you`}
                    />

                    {/* User Info */}
                    <input type="text" name="Name" placeholder="Full Name" required />
                    <input type="email" name="Email" placeholder="Email Address" required />
                    <input type="tel" name="Phone" placeholder="Phone Number" required />

                    {/* Tour Checkbox */}
                    <label className="checkbox-row">
                        <input
                            type="checkbox"
                            checked={reserveTour}
                            onChange={() => setReserveTour(!reserveTour)}
                        />
                        <FaCalendarAlt />
                        <span> Reserve a Tour</span>
                    </label>

                    {/* Conditional Fields */}
                    {reserveTour && (
                        <div className="tour-fields">
                            <label>Preferred Tour Date</label>
                            <input type="date" name="Tour Date" required />

                            <label>Preferred Tour Time</label>
                            <input type="time" name="Tour Time" required />
                        </div>
                    )}

                    {/* Message */}
                    <textarea
                        name="Message"
                        placeholder="Your message or questions"
                        required
                    ></textarea>

                    <button type="submit" className="cta-button">
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
}