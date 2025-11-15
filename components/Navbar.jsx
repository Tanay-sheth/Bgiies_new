'use client';

import React from 'react';
import Link from 'next/link';
import { Lexend } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { logout } from '../app/login/actions';

const lexend = Lexend({ subsets: ['latin'] });

function NavLinkItem({ href, text, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="text-black font-semibold text-md hover:underline underline-offset-4 cursor-pointer"
        style={{ fontFamily: lexend.style.fontFamily }}
      >
        {text}
      </button>
    );
  }

  // Otherwise render as Link
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`text-black font-semibold text-md hover:underline underline-offset-4 ${isActive ? 'underline' : ''}`}
        style={{ textDecorationColor: isActive ? 'black' : 'transparent', fontFamily: lexend.style.fontFamily }}
      >
        {text}
      </a>
    </Link>
  );
}

export default function Navbar() {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="w-full border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3 w-1/2 md:w-1/3">
          <img src="/BGIIES-SMALL.png" alt="BGIIES Logo" className="w-12 h-12 object-contain" />
          <div className="leading-tight">
            <p className="text-black font-bold text-sm" style={{ fontFamily: lexend.style.fontFamily }}>
              BITS Goa Innovation, Incubation & Entrepreneurship Society
            </p>
          </div>
        </div>

        {/* Links Section - hidden on small screens */}
        <div className="hidden lg:flex flex-1 justify-between px-6" style={{ fontFamily: lexend.style.fontFamily }}>
          <NavLinkItem href="/" text="Home" />
          <NavLinkItem href="/facilities" text="Facilities" />
          <NavLinkItem href="/incubation" text="Incubation" />
          <NavLinkItem href="/events" text="Events" />
          <NavLinkItem href="/gallery" text="Gallery" />
          <NavLinkItem href="/bgiies" text="BGIIES Till Now" />
          <NavLinkItem href="/sisfs" text="SISFS" />
          <NavLinkItem text="Log Out" onClick={handleLogout} />
        </div>
      </div>
    </nav>
  );
}