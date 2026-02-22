import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

import img1 from "../assets/IMG_1.jpeg";
import img2 from "../assets/IMG_2.jpeg";
import img3 from "../assets/IMG_3.jpeg";
import img4 from "../assets/IMG_4.jpeg";
import img5 from "../assets/IMG_5.jpeg";
import img6 from "../assets/IMG_6.jpeg";
import img7 from "../assets/IMG_7.jpeg";

export default function Gallery() {
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    // Swipe only on touch devices
    const handlers = useSwipeable({
        onSwipedLeft: next,
        onSwipedRight: prev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: false
    });

    return (
        <section className="gallery" {...handlers}>
            <h2>Gallery</h2>

            <div className="gallery-container">
                {/* Arrow Left (desktop) */}
                <button className="arrow left" onClick={prev}>❮</button>

                <img
                    src={images[index]}
                    alt={`Gallery ${index + 1}`}
                    loading="lazy"
                />

                {/* Arrow Right (desktop) */}
                <button className="arrow right" onClick={next}>❯</button>
            </div>

            {/* Dots */}
            <div className="dots">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={i === index ? "dot active" : "dot"}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </section>
    );
}