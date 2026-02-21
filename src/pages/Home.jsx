import Services from "./Services";
import { Link } from "react-router-dom";
import About from "./About"

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="hero">
                <h1>Helen Adult Family Home</h1>
                <p>Compassionate 24/7 Care in a Safe, Comfortable Home</p>

                <Link to="/contact">
                    <button>Schedule a Tour</button>
                </Link>
            </section>

            {/* ABOUT SECTION */}
            <About />

            {/* TRUST / HIGHLIGHTS */}
            <section className="trust">
                <h2>Why Families Trust Us</h2>

                <ul>
                    <li>WA State Licensed</li>
                    <li>24/7 Professional Care</li>
                    <li>Private & Shared Rooms</li>
                    <li>Medication Management</li>
                    <li>Home-Cooked Nutritious Meals</li>
                </ul>
            </section>

            {/* SERVICES */}
            <Services />
        </>
    );
}