// src/pages/Rooms.jsx
import React from "react";

export default function Rooms() {
    const rooms = [
        {
            name: "Private Room",
            description: "Spacious, comfortable private room with personal storage and natural light.",
            image: "/images/room1.jpg"
        },
        {
            name: "Shared Room",
            description: "Cozy shared rooms designed for comfort and companionship.",
            image: "/images/room2.jpg"
        },
        {
            name: "Suite Room",
            description: "Luxury suite with extra amenities and personal bathroom.",
            image: "/images/room3.jpg"
        }
    ];

    return (
        <section className="rooms">
            <h2>Our Rooms</h2>
            <p>Comfortable, safe, and home-like rooms designed for every resident’s needs.</p>
            <div className="rooms-list">
                {rooms.map((room, idx) => (
                    <div key={idx} className="room-card">
                        <img src={room.image} alt={room.name} />
                        <h3>{room.name}</h3>
                        <p>{room.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
