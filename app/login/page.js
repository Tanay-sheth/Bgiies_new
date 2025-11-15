"use client";
import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Color gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-teal-400/50 z-10" />

      {/* Centered Login Form */}
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <LoginForm />
      </div>

      {/* BGIIES Logo Element Bottom Left */}
      <div className="absolute bottom-0 left-0 z-30">
        <img src="/bgiieselement.png" alt="BGIIES Element" className="w-xs" />
      </div>
    </div>
  );
}
