"use client";
import SignupForm from "./SignupForm";

export default function Signup() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-teal-400/50 z-10" />

      {/* Signup Form Center */}
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <SignupForm />
      </div>
    </div>
  );
}
