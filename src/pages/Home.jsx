import { useNavigate } from "react-router-dom";
import Services from "./Services";

export default function Home() {
    const navigate = useNavigate();

    const handleSchedule = () => {
        navigate("/contact"); // navigate to contact page
        // Optional: scroll to form if there’s an element with id="contact"
        setTimeout(() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    return (
        <>
            <section className="hero">
                <h1>Helen Adult Family Home</h1>
                <p>Compassionate 24/7 Care in a Safe, Comfortable Home</p>
                <button onClick={handleSchedule}>Schedule a Tour</button>
            </section>

            <section className="trust">
                <h2>Why Families Trust Us</h2>
                <ul>
                    <li>WA State Licensed</li>
                    <li>24/7 Professional Care</li>
                    <li>Private & Shared Rooms</li>
                    <li>Medication Management</li>
                    <li>Home-Cooked Meals</li>
                </ul>
            </section>

            <Services />
        </>
    );
}
