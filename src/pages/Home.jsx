import Services from "./Services";
import About from "./About";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main>

            {/* HERO */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>Helen Adult Family Home</h1>

                    <p className="subtitle">
                        Compassionate 24/7 Care in a Safe, Comfortable Home
                    </p>

                    <Link to="/contact" className="cta-link">
                        <button className="cta-button">
                            Schedule a Tour
                        </button>
                    </Link>
                </div>
            </section>

            {/* ABOUT */}
            <section className="section about-section">
                <div className="container">
                    <About />
                </div>
            </section>

            {/* TRUST / HIGHLIGHTS */}
            <section className="section trust">
                <div className="container">
                    <h2>Why Families Trust Us</h2>

                    <ul className="trust-list">
                        <li>✔ WA State Licensed</li>
                        <li>✔ 24/7 Professional Care</li>
                        <li>✔ Private & Shared Rooms</li>
                        <li>✔ Medication Management</li>
                        <li>✔ Home-Cooked Nutritious Meals</li>
                    </ul>
                </div>
            </section>

            {/* SERVICES */}
            <section className="section services-section">
                <div className="container">
                    <Services />
                </div>
            </section>

        </main>
    );
}