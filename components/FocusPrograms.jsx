"use client";

export default function FocusPrograms() {
  return (
    <section className="w-full bg-white py-20 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2E1F47] mb-10 text-center">
        Our Focus Programs
        <div className="mt-1 w-16 h-[3px] bg-yellow-500"></div>
      </h2>
      

      {/* Image Container */}
      <div className="w-full max-w-6xl px-6">
        <img
          src="/focus-programs.png"   // <--- Put your full combined image here
          alt="Focus Programs"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
