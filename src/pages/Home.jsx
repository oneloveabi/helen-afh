import Services from "./Services";
export default function Home() {
    return (
        <>
            <section className="hero">
                <h1>Helen Adult Family Home</h1>
                <p>Compassionate 24/7 Care in a Safe, Comfortable Home</p>
                <button>Schedule a Tour</button>
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
