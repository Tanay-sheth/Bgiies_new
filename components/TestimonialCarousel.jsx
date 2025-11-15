'use client';

import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialCarousel({
  quicksand_bold,
  quicksand_medium,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define your testimonials here
  const testimonials = [
    {
      quote:
        "Being a Quark CA helped me grow. I became better at talking to people and organizing events. The other ambassadors were so helpful. I'll always remember this experience",
      author: 'Ajay Thakur',
      bgColor: 'bg-[#FFAF18]', // Yellow
      textColor: 'text-gray-800',
    },
    {
      quote:
        "Being a Quark CA helped me grow. I became better at talking to people and organizing events. The other ambassadors were so helpful. I'll always remember this experience",
      author: 'Ajay Thakur',
      bgColor: 'bg-[#6C6CE8]', // Purple
      textColor: 'text-white',
    },
    {
      quote:
        "Being a Quark CA helped me grow. I became better at talking to people and organizing events. The other ambassadors were so helpful. I'll always remember this experience",
      author: 'Ajay Thakur',
      bgColor: 'bg-[#76C2EA]', // Blue
      textColor: 'text-white',
    },
  ];

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  // --- THIS FUNCTION IS UPDATED ---
  const getCardStyle = (index) => {
    const total = testimonials.length;
    const offset = (index - currentIndex + total) % total;

    if (offset === 0) {
      // Current card (front)
      return {
        transform: 'translateX(0) translateZ(0) scale(1)',
        opacity: 1, // Stays 1
        zIndex: 10,
      };
    } else if (offset === 1) {
      // Next card (right)
      return {
        transform: 'translateX(140%) translateZ(-200px) scale(0.85)', // Changed from 60%
        opacity: 1, // Changed from 0.6
        zIndex: 5,
      };
    } else {
      // Previous card (left)
      return {
        transform: 'translateX(-140%) translateZ(-200px) scale(0.85)', // Changed from -60%
        opacity: 1, // Changed from 0.6
        zIndex: 5,
      };
    }
  };
  // --- END OF UPDATE ---

  return (
    // Container to set the 3D perspective
    <div
      className="relative w-full h-[550px] flex justify-center items-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* This div holds the cards and maintains the 3D space */}
      <div
        className="relative w-[350px] h-[420px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out"
            style={getCardStyle(index)}
          >
            <TestimonialCard
              {...testimonial}
              quicksand_bold={quicksand_bold}
              quicksand_medium={quicksand_medium}
            />
          </div>
        ))}
      </div>
    </div>
  );
}