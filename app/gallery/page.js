'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Lexend } from 'next/font/google';
const lexend = Lexend({ subsets: ['latin'] });

const page = () => {
    return (
        <>
            <div className="relative w-full h-screen overflow-x-hidden">

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
                        <p>The BITS Goa Innovation Incubation Entrepreneurship Society (BIIES) fosters</p>
                        <p>innovation and entrepreneurship by providing mentorship, funding, and resources</p>
                        <p>to help turn ideas into successful ventures.</p>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default page
