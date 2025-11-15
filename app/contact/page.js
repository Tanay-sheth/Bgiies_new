'use client'

import React, { useState, useEffect } from 'react'

const page = () => {

  
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap');
        `}
      </style>

      {/* Hero Section */}
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
          <h1 className="font-['Quicksand'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 text-center font-bold text-white">
            <span className="border-b-4 border-lime-400 pb-1">Bui</span>
            lding the next generation of startups
          </h1>
           <div className="items-center justify-center flex flex-col text-white font-['Quicksand'] font-medium">
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
      
      {/* Get in touch */}
      <div className='bg-white w-full min-h-screen pt-40 flex flex-col md:flex-row md:items-start justify-between px-20 gap-8'>
        
        {/* Left Column (Text) */}
        <div className="flex flex-col">
          {/* Get in touch Title */}
          <div className="flex flex-col text-left">
              <h2 className="font-['Quicksand'] text-[40px] font-semibold text-gray-800 mb-2">
                Get in touch
              </h2>
              <div className="w-16 h-1 bg-yellow-500 ml-0"></div>
            </div>
          
          {/* Address */}
          <div className='flex flex-col text-left mt-4'>
            <h3 className="font-['Quicksand'] text-[24px] font-medium text-[rgb(129,129,129)]">
              <p>9VQG+392, BITS Pilani, Chicalim, Sancoale, </p>
              <p>Goa 403710</p>
            </h3>
          </div>
        </div>

        {/* Right Column (Map) */}
        <div className="overflow-hidden w-[663px] h-[369px] rounded-[10px] border-[3px] border-[rgba(241,116,0)] flex-shrink-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7940782410383!2d73.87331947485713!3d15.387634657324542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb83a6ad144d3%3A0xbd7ffbfa9b30908!2sBITS%20BIRAC%20BIONEST%20INCUBATOR!5e0!3m2!1sen!2sin!4v1763213552560!5m2!1sen!2sin"
            allowFullScreen="" 
            loading="lazy" 
            className='w-full h-full border-0'
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      
      {/* Orange contact/social section */}
      <div className="w-full bg-[rgb(241,116,0)] py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-stretch gap-12">
          
          {/* Card 1: Email */}
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center justify-center w-full md:w-80">
            <img src="/contactus-mail.png" alt="Email" className="w-16 h-16 mb-6" />

            <h3 className="font-['Quicksand'] text-2xl font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="font-['Quicksand'] text-lg text-gray-600">contact@bgiies.com</p>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center justify-center w-full md:w-80">
            <img src="/contactus-phone.png" alt="Phone" className="w-16 h-16 mb-6" />
            
            <h3 className="font-['Quicksand'] text-2xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="font-['Quicksand'] text-lg text-gray-600">+91 123 456 7890</p>
          </div>

          {/* Card 3: Follow Us */}
          <div className="bg-white rounded-2xl p-8 shadow-xl w-full md:w-80">
            <h3 className="font-['Quicksand'] text-3xl font-semibold text-gray-800 mb-6">Follow Us:</h3>
            <div className="flex flex-col space-y-4">
              
              {/* LinkedIn*/}
              <a href="#" className="flex items-center justify-center w-12 h-12 bg-[rgb(241,116,0)] rounded-full group transition-transform hover:scale-110">
                <img src="/contact-ld.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>

              {/* Instagram*/}
              <a href="#" className="flex items-center justify-center w-12 h-12 bg-[rgb(241,116,0)] rounded-full group transition-transform hover:scale-110">
                <img src="/contact-in.svg" alt="Instagram" className="w-6 h-6" />
              </a>

              {/* Facebook*/}
              <a href="#" className="flex items-center justify-center w-12 h-12 bg-[rgb(241,116,0)] rounded-full group transition-transform hover:scale-110">
                <img src="/contact-fb.svg" alt="Facebook" className="w-6 h-6" />
              </a>

              {/* YouTube */}
              <a href="#" className="flex items-center justify-center w-12 h-12 bg-[rgb(241,116,0)] rounded-full group transition-transform hover:scale-110">
                <img src="/contact-yt.svg" alt="YouTube" className="w-7 h-7" />
              </a>

            </div>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default page