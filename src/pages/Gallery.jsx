import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

import img1 from "../assets/IMG_1.jpeg";
import img2 from "../assets/IMG_2.jpeg";
import img3 from "../assets/IMG_3.jpeg";
import img4 from "../assets/IMG_4.jpeg";
import img5 from "../assets/IMG_5.jpeg";
import img6 from "../assets/IMG_6.jpeg";
import img7 from "../assets/IMG_7.jpeg";
import img8 from "../assets/IMG_8.jpeg";
import img9 from "../assets/IMG_9.jpeg";
import img10 from "../assets/IMG_10.jpeg";


import img11 from "../assets/IMG_11.jpeg";
import img12 from "../assets/IMG_12.jpeg";
import img13 from "../assets/IMG_13.jpeg";
import img14 from "../assets/IMG_14.jpeg";
import img15 from "../assets/IMG_15.jpeg";
import img16 from "../assets/IMG_16.jpeg";
import img17 from "../assets/IMG_17.jpeg";


export default function Gallery() {
    const images = [img8, img9, img10, img11, img12, img13, img14, img15, img16, img1, img2, img3, img4, img5, img6, img7, img17];
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