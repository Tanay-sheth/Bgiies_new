'use client'

import { Lexend } from 'next/font/google';
const lexend = Lexend({ subsets: ['latin'] });
import { useRouter } from 'next/navigation';

import Image from 'next/image';


const page = () => {

  const router = useRouter();
  const handleClick = () => {
    router.push('/contact');
  };
  const cards = [
    {
      img: '/titrator.jpg',
      title: 'Autotitrator',
      desc: 'Ideal for precise and automated titration needs in research, quality control, or production settings.',
      price: '₹9.51L'
    },
    {
      img: '/biosafety.png',
      title: 'Biosafety cabinet BSL||B2',
      desc: 'Ensure lab safety with our BSL-II B2 Biosafety Cabinet. 100% exhaust air, no recirculation, ideal for contamination prevention.',
      price: '₹8.53L'
    },
    {
      img: '/co2.png',
      title: 'CO2 Incubator',
      desc: 'Achieve optimal cell growth with our CO2 Incubator. Precise temperature control and humidity regulation ensure consistent, reliable results.',
      price: '₹3.92L'
    },
    {
      img: '/conference.png',
      title: 'Conference room',
      desc: 'Modern conference room with a smart board, offering seamless presentations and interactive collaboration for effective meetings.',
      price: ''
    },
    {
      img: '/fermenter.png',
      title: 'Fermenter',
      desc: 'Optimize fermentation with ur advanced Fermenter. Features precise control of temperature, pH, and agitation for consistent, high-qquality results.',
      price: '₹15.78L'
    },
    {
      img: '/fluorescence.png',
      title: 'Fluorescence Microscope Inverted',
      desc: 'Discover intricate details with our inverted Fluorescence Microscope. Superior imaging, easy sample access, and exceptional resolution for advanced research.',
      price: '₹14.90L'
    },
    {
      img: '/gel.png',
      title: 'Gel Documentation System',
      desc: 'Efficiently capture and analyze gel images with our Gel Documentation System—fast, precise, and essential for accurate results.',
      price: '₹13.04L'
    },
    {
      img: '/lyophilizer.png',
      title: 'Lyophilizer',
      desc: 'Boost efficiency with our Lyophilizer—compact, reliable, and ideal for preserving samples in small-scale operations.',
      price: '₹13.64L'
    },
    {
      img: '/rt-pcr.png',
      title: 'RT-PCR',
      desc: 'Ideal for precise and automated titration needs in research, quality control, or production settings.',
      price: '₹9.60L'
    },
    {
      img: '/spray.png',
      title: 'Spray Dryer',
      desc: 'Enhance production with our Spray Dryer. Efficiently transforms liquids into powders with precise control, perfect for a variety of industries.',
      price: '₹22.25L'
    },
    {
      img: '/toc.png',
      title: 'TOC Analyzer',
      desc: 'Optimize quality control with our TOC Analyzer. Provides accurate, rapid measurement of total organic carbon, ensuring precise analysis for various applications.',
      price: '₹11.96L'
    },
    {
      img: '/spectrophotometer.png',
      title: 'UV UIS Spectrophotometer',
      desc: 'Achieve precise measurements with our UV UIS Spectrophotometer. Delivers accurate analysis of absorbance and transmission across UV and visible spectra.',
      price: '₹6.05L'
    },
    {
      img: '/deepfreezer.png',
      title: 'Deep Freezer (-80C)',
      desc: 'Preserve samples long-term with our -80°C Deep Freezer. Superior insulation and temperature stability ensure reliable, ultra-low storage conditions.',
      price: '₹7.52L'
    },
    

  ];

  return (
    <>
      <div className="relative w-full h-screen overflow-x-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-screen h-screen object-cover z-0"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/40 to-blue-600/60 z-10" />

        {/* BGIIES Element Bottom Left */}
        <div className="absolute bottom-0 left-0 z-15">
          <img src="/bgiieselement.png" alt="BGIIES Element" className="w-xs" />
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-8">
          {/* Logo */}
          <img
            src="/bgiies_logo.png"
            alt="BGIIES Logo"
            className='w-56'
          />

          {/* Text */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 text-center font-bold text-white">
            <span className="border-b-4 border-lime-400 pb-1">Bui</span>
            lding the next generation of startups
          </h1>
          <div className='items-center justify-center flex flex-col'>
            <p className=''>
              The BITS Goa Innovation Incubation Entrepreneurship Society (BIIES) fosters
            </p>
            <p className=''>
              innovation and entrepreneurship by providing mentorship, funding, and resources
            </p>
            <p className=''>
              to help turn ideas into successful ventures.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full px-6 sm:px-10 lg:px-16 py-12 bg-transparent">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Our Equipment & Spaces</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c, idx) => (
              <article
                key={idx}
                className="relative bg-white/90 rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                {/* Image — next/image with aspect ratio and overflow hidden */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', transformOrigin: 'center' }}
                    className="transition-transform duration-500 ease-in-out hover:scale-105"
                    priority={false}
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 flex flex-col justify-between h-[180px] sm:h-[170px]">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">{c.title}</h3>
                    <p className="text-sm text-gray-600 leading-snug">{c.desc}</p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm font-bold text-gray-900">{c.price}</div>
                    <button
                      className="text-sm px-3 py-1.5 bg-indigo-700 text-white rounded-full shadow-sm hover:bg-indigo-800 focus:outline-none"
                      aria-label={`Book ${c.title}`}
                      onClick={handleClick}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="px-4 py-2 text-sm rounded-md bg-white/10 text-white border border-white/20">View more</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
