export default function Footer() {
    return (
        <footer className="site-footer centered-footer">

            <h4>Contact Us</h4>

            <div className="contact-row">
                <p>
                    📞 <a href="tel:+12532707790">(253) 270-7790</a>
                </p>

                <p>
                    📧{" "}
                    <a href="mailto:helenayana@helenadultfamilyhome.com">
                        helenayana@helenadultfamilyhome.com
                    </a>{" "}
                </p>

                <p>
                    📍{" "}
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=133+107th+St+SE,+Everett,+WA+98208-7041"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        133 107th St SE,
                        Everett, WA 98208-7041
                    </a>
                </p>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Helen Adult Family Home — All Rights Reserved
            </div>

        </footer>
    );
}
