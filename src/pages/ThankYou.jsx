export default function ThankYou() {
    return (
        <main className="page-container">
            <section className="hero-small">
                <div className="container center">
                    <h1>Thank You</h1>
                    <p className="subtitle">
                        Your message has been received.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <div className="container center">
                    <div className="card">
                        <h2>We’ll Be in Touch Soon</h2>

                        <p>
                            Thank you for contacting Helen Adult Family Home.
                            Our team will review your message and respond as soon as possible.
                        </p>

                        <p>
                            If you requested a tour, we will confirm the date and time
                            by email or phone.
                        </p>

                        <div className="button-group">
                            <a href="/" className="btn-primary">
                                Back to Home
                            </a>

                            <a href="/contact" className="btn-secondary">
                                Send Another Message
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
