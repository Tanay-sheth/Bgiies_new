'use client'

import React, { useState, useEffect } from 'react'
import { Lexend } from 'next/font/google';
const lexend = Lexend({ subsets: ['latin'] });




const page = () => {

  const events = [
    {
      date: "Dec 21, 2018",
      title: "Hands-on Training:",
      subtitle: "Application of Spray Dryer",
    },
    {
      date: "July 9–13, 2019",
      title: "Workshop on Basic",
      subtitle: "Molecular Biology Tools and Techniques",
    },
    {
      date: "July 25–27, 2019",
      title: "Workshop on Industrial",
      subtitle: "Bioprocess and Bioreactor Operations",
    },
    {
      date: "Oct 11–13, 2019",
      title: "Workshop on DNA Binding",
      subtitle: "and Cleavage Studies",
    },
    {
      date: "Jan 31–Feb 1, 2020",
      title: "Workshop on Membrane",
      subtitle: "Processes for Food, Water, and Health",
    },
  ];

  const flows = [
    {
      src: '/flow1.png'
    },
    {
      src: '/flow2.png'
    },
    {
      src: '/flow3.png'
    },
    {
      src: '/flow4.png'
    }, {
      src: '/flow5.png'
    }
  ]

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

      <div className='flex flex-col items-center justify-center'>
        {flows.map((c, idx) => (<>
          <img src={c.src} className='p-15' />
        </>))}
        <div className='justify-center items-center'>
          <img src='/excel.png' className='mt-20 mb-10 w-4xl' />
        </div>
      </div>

    </>
  )
}

export default page
