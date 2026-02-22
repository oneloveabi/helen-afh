export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-content">

                <h3 className="footer-title">
                    Helen Adult Family Home
                </h3>

                <p className="footer-tagline">
                    Compassionate 24/7 Care in a Safe, Comfortable Home
                </p>

                <div className="contact-row">

                    <a href="tel:+14255135855">
                        📞 (425) 513-5855
                    </a>

                    <a href="mailto:helenayana@helenadultfamilyhome.com">
                        📧 helenayana@helenadultfamilyhome.com
                    </a>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=133+107th+St+SE,+Everett,+WA+98208-7041"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📍 133 107th St SE, Everett, WA 98208
                    </a>

                </div>

                <div className="footer-bottom">
                    © {new Date().getFullYear()} Helen Adult Family Home — All Rights Reserved
                </div>

            </div>
        </footer>
    );
}