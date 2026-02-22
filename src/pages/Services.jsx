export default function Services() {
    const services = [
        {
            title: "Personalized Care Plans",
            description: "We create a customized care plan for every resident based on their unique needs."
        },
        {
            title: "Memory Support",
            description: "Specialized programs for residents with dementia or memory-related challenges."
        },
        {
            title: "Mobility Assistance",
            description: "24/7 support for walking, transfers, and safe movement around the home."
        },
        {
            title: "Medication Management",
            description: "Professional oversight to ensure medications are taken safely and on time."
        },
        {
            title: "Home-Cooked Meals",
            description: "Nutritious, delicious meals prepared fresh daily."
        },
        // {
        //     title: "Hospice & Palliative Care",
        //     description: "Compassionate support for residents and families in end-of-life care."
        // }
    ];

    return (
        <section className="services">
            <h2>Our Care Services</h2>
            <p>We provide compassionate, professional care tailored to each resident’s needs. Our services are designed to promote comfort, safety, and independence.</p>
            <div className="services-list">
                {services.map((service, idx) => (
                    <div key={idx} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
