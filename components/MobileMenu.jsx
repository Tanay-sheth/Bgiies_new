"use client";

import { useState } from "react";
import NavLinkItem from "./NavLinkItem";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export default function MobileMenu({ isLoggedIn }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (mobile only) */}
      <button
        className="lg:hidden flex flex-col gap-1"
        onClick={() => setOpen(true)}
      >
        <span className="w-6 h-[3px] bg-black"></span>
        <span className="w-6 h-[3px] bg-black"></span>
        <span className="w-6 h-[3px] bg-black"></span>
      </button>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)}></div>
      )}

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          ✕
        </button>

        <div
          className="mt-16 flex flex-col gap-6 px-6 text-lg"
          style={{ fontFamily: lexend.style.fontFamily }}
        >
          <NavLinkItem href="/" text="Home" onClick={() => setOpen(false)} />
          <NavLinkItem href="/facilities" text="Facilities" onClick={() => setOpen(false)} />
          <NavLinkItem href="/incubation" text="Incubation" onClick={() => setOpen(false)} />
          <NavLinkItem href="/events" text="Events" onClick={() => setOpen(false)} />
          <NavLinkItem href="/gallery" text="Gallery" onClick={() => setOpen(false)} />
          <NavLinkItem href="/bgiies" text="BGIIES Till Now" onClick={() => setOpen(false)} />
          <NavLinkItem href="/sisfs" text="SISFS" onClick={() => setOpen(false)} />

          {isLoggedIn ? (
            <NavLinkItem text="Log Out" isLogout onClick={() => setOpen(false)} />
          ) : (
            <NavLinkItem href="/login" text="Login" onClick={() => setOpen(false)} />
          )}
        </div>
      </div>
    </>
  );
}
