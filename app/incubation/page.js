'use client';

import Image from 'next/image';
import { Quicksand } from 'next/font/google';

const quicksand_bold = Quicksand({
  weight: '700', // Bold weight
  subsets: ['latin'],
});

const quicksand_medium = Quicksand({
  weight: '500', 
  subsets: ['latin'],
});

export default function IncubationPage() {
    return (
    <div> {/* 80px = 20 in Tailwind (20 * 4px = 80px) */}
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[100vh] w-full">
        
        {/* Main Background Image */}
        <Image
          src="/incubation-bg.png"
          alt="Incubation background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/incubation-gradient.png"
            alt="Gradient overlay"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <h1 className={`${quicksand_bold.className} text-[40px] font-bold text-white whitespace-nowrap`}>
            Always make products that are the best in the world
            <br /> -Sridhar Vembu
          </h1>
          <h2 className={`${quicksand_medium.className} text-[32px] font-bold text-white whitespace-nowrap`}>
            Co-founder,Zoho
          </h2>
        </div>
        {/* Small Image in Bottom Left Corner */}
          <Image
            src="/incubation-bottomleft-element.png"
            alt="Bottom left overlay"
            width={356}
            height={150}
            className="absolute bottom-0 left-0 z-20 object-cover"
          />
        
      </div>

      {/* --- WHITE CONTENT SECTION --- */}
      <div className="bg-white w-full min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-28">
            <h2 className={`${quicksand_bold.className} text-3xl font-bold text-gray-800 mb-2`}>
              Our Incubatees
            </h2>
            <div className="w-16 h-1 bg-yellow-500 -ml-40"></div>
          </div>
          <div className="grid grid-cols-4 gap-x-3 gap-y-3 mb-48">
            {Array.from({ length: 19 }).map((_, index) => (
              <div
                key={index}
                className="w-[228px] h-[210px] overflow-hidden"
              >
                <Image
                  src={`/incubatee-${index + 1}.png`} // Replace with your actual image paths
                  alt={`Incubatee ${index + 1}`}
                  width={228}
                  height={210}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="flex flex-col items-center mb-48">
        <h2 className={`${quicksand_bold.className} text-3xl font-bold text-gray-800 mb-2`}>
          Testimonials
        </h2>
        <div className="w-16 h-1 bg-yellow-500 -ml-40"></div>
      </div>
      <div className='text-black text-center mb-40'> Testimonial Animation placeholder</div> 
      {/* TODO: Add testimonial cards+animation */}

    </div>
  );
}
