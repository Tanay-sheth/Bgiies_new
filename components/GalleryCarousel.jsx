'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GalleryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Total number of images in the carousel
    const totalImages = 12; 
    const images = Array.from({ length: totalImages }).map((_, index) => ({
        src: `/gallery-${index + 1}.png`,
        alt: `Incubatee ${index + 1}`,
    }));

    // Auto-rotate effect
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Rotate every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    // Function to determine card styles
    const getCardStyle = (index) => {
        const total = images.length;
        const offset = (index - currentIndex + total) % total;

        if (offset === 0) {
        // Current image (center)
        return {
            transform: 'translateX(0) scale(1)',
            opacity: 1,
            zIndex: 10,
        };
        } else if (offset === 1) {
        // Next image (right) - 80% off-screen
        return {
            transform: 'translateX(80%) scale(0.8)',
            opacity: 1,
            zIndex: 5,
        };
        } else if (offset === total - 1) {
        // Previous image (left) - 80% off-screen
        return {
            transform: 'translateX(-80%) scale(0.8)',
            opacity: 1,
            zIndex: 5,
        };
        } else {
        // Other images (hidden)
        return {
            transform: 'translateX(0) scale(0.5)',
            opacity: 0,
            zIndex: 0,
        };
        }
    };

    return (
        // Main container to center the carousel
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
        <div className="relative w-[853px] h-[500px]">
            {images.map((image, index) => (
            <div
                key={index}
                className="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out"
                style={getCardStyle(index)}
            >
                <div className="bg-white pl-2 pr-2 w-full h-full">
                    <Image
                    src={image.src}
                    alt={image.alt}
                    width={228}
                    height={210}
                    className="object-cover w-full h-full rounded-lg shadow-md"
                    />
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    }