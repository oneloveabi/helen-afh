import {
    FaUserNurse,
    FaPills,
    FaBrain,
    FaUtensils,
    FaWalking,
    FaHandsHelping
} from "react-icons/fa";

export default function Services() {
    const services = [
        {
            icon: <FaUserNurse />,
            title: "24-Hour Personalized Care",
            description:
                "Compassionate assistance available day and night, tailored to each resident’s needs."
        },
        {
            icon: <FaPills />,
            title: "Medication Management",
            description:
                "Safe administration and monitoring of medications by trained caregivers."
        },
        {
            icon: <FaBrain />,
            title: "Memory Care Support",
            description:
                "Structured support for residents living with dementia or memory challenges."
        },
        {
            icon: <FaWalking />,
            title: "Mobility & Daily Assistance",
            description:
                "Help with walking, transfers, bathing, dressing, and other daily activities."
        },
        {
            icon: <FaUtensils />,
            title: "Nutritious Home-Cooked Meals",
            description:
                "Fresh, balanced meals prepared daily with residents’ preferences in mind."
        },
        {
            icon: <FaHandsHelping />,
            title: "Engaging Activities",
            description:
                "Social, recreational, and therapeutic activities that promote well-being."
        }
    ];

    return (
        <section className="services">
            <h2>Our Care Services</h2>

            <p className="services-intro">
                We provide compassionate, family-style care in a safe and
                comfortable home environment.
            </p>

            <div className="services-grid">
                {services.map((service, idx) => (
                    <div key={idx} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}