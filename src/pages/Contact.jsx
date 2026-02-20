import { useState } from "react";

export default function Contact() {
    const [reserveTour, setReserveTour] = useState(false);

    return (
        <section id="contact" className="contact-page">
            <h2>Contact Us</h2>
            <p>Have questions or want to schedule a visit? We’re here to help.</p>

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


                {/* Optional redirect after submit */}
                <input
                    type="hidden"
                    name="_next"
                    value={`${window.location.origin}/thank-you`}
                />


                <input type="text" name="Name" placeholder="Full Name" required />
                <input type="email" name="Email" placeholder="Email Address" required />
                <input type="tel" name="Phone" placeholder="Phone Number" required />

                {/* OPTIONAL TOUR CHECKBOX */}
                <label className="checkbox-row">
                    <input
                        type="checkbox"
                        checked={reserveTour}
                        onChange={() => setReserveTour(!reserveTour)}
                    />
                    <span>Reserve a Tour</span>
                </label>


                {/* SHOW DATE & TIME ONLY IF CHECKED */}
                {reserveTour && (
                    <>
                        <label>Preferred Tour Date</label>
                        <input type="date" name="Tour Date" required />

                        <label>Preferred Tour Time</label>
                        <input type="time" name="Tour Time" required />
                    </>
                )}

                <textarea
                    name="Message"
                    placeholder="Your message or questions"
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}
