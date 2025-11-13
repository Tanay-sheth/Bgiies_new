import React from 'react'

const page = () => {
  return (
    <>
    <div className="relative w-screen h-screen overflow-hidden">
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
      </div>
    </div>
    <div className='p-6'>
      <h1 className='text-5xl'>About BGIIES</h1>
      
    </div>
    </>
  )
}

export default page
