import React from "react";

import room1 from "../assets/IMG_2.jpeg";
import room2 from "../assets/IMG_5.jpeg";

export default function Rooms() {
    const rooms = [
        {
            name: "Private Room",
            description: "Spacious, comfortable private room with personal storage and natural light.",
            image: room1
        },
        {
            name: "Shared Room",
            description: "Cozy shared rooms designed for comfort and companionship.",
            image: room2
        }
        // {
        //     name: "Suite Room",
        //     description: "Luxury suite with extra amenities and personal bathroom.",
        //     image: room3
        // }
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