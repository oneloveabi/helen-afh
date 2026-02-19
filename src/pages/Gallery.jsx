// src/pages/Gallery.jsx
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Gallery() {
    const images = [
        "/images/room1.jpg",
        "/images/livingroom.jpg",
        "/images/kitchen.jpg",
        "/images/garden.jpg"
    ];

    const [index, setIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => setIndex((i) => (i + 1) % images.length),
        onSwipedRight: () => setIndex((i) => (i - 1 + images.length) % images.length),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <section className="gallery" {...handlers}>
            <h2>Gallery</h2>
            <img src={images[index]} alt={`Gallery ${index + 1}`} />
            <div className="dots">
                {images.map((_, i) => (
                    <span key={i} className={i === index ? "active" : ""} onClick={() => setIndex(i)}></span>
                ))}
            </div>
        </section>
    );
}
