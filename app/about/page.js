'use client'

import React, { useState, useEffect } from 'react'
import { Lexend } from 'next/font/google';
const lexend = Lexend({ subsets: ['latin'] });

const profiles = [
  { name: "Prof. Anirban Roy", role: "Joint Secretary" , source: '/Prof_Anirban_Roy_Jt. Secretary.jpg'},
  { name: "Sachin Arya", role: "Vice President" , source: '/Sachin_Arya_Vice President.jpg'},
  { name: "Prof. Suman Kundu", role: "BGIIES President", source:'/Prof_Suman_Kundu_President.jpg' },
  { name: "Ian Sardinha", role: "Treasurer",source:'/Ian_Sardinha_Treasurer.jpg' },
  { name: "Prof. D. M. Kulkarni", role: "Secretary", source:'/Prof_DM_Kulkarni_Secretary.jpg' },
];

const logoImages = ['/hdfc.jpg', '/birac.jpg', '/sfc.png'];

const slideAnimation = `
  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .slideshow-image {
    animation: slideLeft 0.5s ease-in-out;
  }
`;



const page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logoImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

   const containerStyle = {
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 16,
    flexWrap: "wrap",
  };

  const cardStyle = {
    width: 180,
    textAlign: "center",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  };

  const imgWrapperStyle = {
    width: 160,
    height: 160,
    margin: "0 auto 8px",
    border: "3px solid #b58fff", // purple outline similar to screenshot
    borderRadius: 4,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    background: "#fff",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const nameStyle = {
    fontSize: 18,
    fontWeight: 700,
    margin: "6px 0 2px",
    color:'black'
  };

  const roleStyle = {
    fontSize: 10,
    color: "#8a8a8a",
    letterSpacing: 0.3,
  };
  
  return (
    <>
    <style>{slideAnimation}</style>
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
    <div className='justify-center items-center flex flex-col mt-25'>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 text-center font-bold text-black">
          <span className="border-b-4 border-amber-300 pb-1">Ab</span>
          out BGIIES
        </h1>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <div className='flex gap-8'>
        <div className='flex-shrink-0 w-140 h-140 flex items-center justify-center'>
          <img src={logoImages[currentImageIndex]} key={currentImageIndex} className='slideshow-image max-w-full max-h-full object-contain' alt='Partner logo'/>
        </div>
        <div className='text-black items-center justify-center flex flex-col' style={{ fontFamily: lexend.style.fontFamily }}> 
          <p>
            The BITS Goa Innovation, Incubation & Entrepreneurship Society (BGIIES)
          </p>
          <p>
             is a registered Society under the Societies Registration Act, 1860, in February 2020,
          </p>
          <p>
            having its first office in BITS Pilani, K. K. Birla Goa Campus, Zuarinagar, Goa, India.
          </p>
          <p>
            BGIIES is a sector agnostic Technology Business Incubator, which acts as a 
          </p>
          <p>
            wormhole to startups, connecting them with technology and business resources, vendors
          </p>
          <p>
            and  channels to help first time entrepreneurs lean and get the best mentorship from the ecosystem.
          </p>
          <button className='hover:m'>
          <div className='mt-10 bg-[#322B4C] p-3 rounded-4xl text-white'>Read More</div>
          </button>
        </div>
      </div>

    </div>

    <div className='flex flex-col items-center justify-center mt-20 mb-10'>
        <h1 className='text-black text-xl font-bold'>
          Meet Our
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 text-center font-bold text-black">
          <span className="border-b-4 border-amber-300 pb-1">Soc</span>
          iety Members
        </h1>
    </div>
    <div className='flex flex-col items-center justify-center mt-20 mb-50'>
      <div style={containerStyle} className='mt-10'>
      {profiles.map((p, i) => (
        <div key={i} style={cardStyle}>
          <div style={imgWrapperStyle}>
            {/* intentionally left src blank as requested */}
            <img src={p.source} alt={`${p.name} portrait`} style={imgStyle} />
          </div>
          <div style={nameStyle}>{p.name}</div>
          <div style={roleStyle}>{p.role}</div>
        </div>
      ))}
    </div>
    </div>
    
    </>
  )
}

export default page
