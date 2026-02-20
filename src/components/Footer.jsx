export default function Footer() {
    return (
        <footer className="site-footer centered-footer">

            <h4>Contact Us</h4>

            <p>
                📞 <a href="tel:+12532707790">(253) 270-7790</a>
            </p>

            <p>
                📧{" "}
                <a href="mailto:helenayana@helenadultfamilyhome.com">
                    helenayana@helenadultfamilyhome.com
                </a>{" "}
                (or{" "}
                <a href="mailto:helenadultfamilyhome@gmail.com">
                    helenadultfamilyhome@gmail.com
                </a>
                )
            </p>

            <p>
                📍 1234 Care Lane<br />
                Lynnwood, WA
            </p>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Helen Adult Family Home — All Rights Reserved
            </div>

        </footer>
    );
}
