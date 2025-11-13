'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#084F83] text-white flex flex-col items-center">
      <div className="w-full max-w-7xl p-16">
        <p className="text-center">For collaboration or to learn more about BGIIES please connect with us at:</p>

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-8">
          {/* Section 1: Legacy Info */}
          <div className="md:w-1/4">
            <p>
              With over 2 decades of a strong legacy behind us, we boast of
              global grade facilities for impeccable solutions
            </p>
            <p className="mt-4">
              Call Toll free no:
              <br />
              <a href="tel:+9122XXXXXXXX" className="underline">
                +91 22XXXXXXXX
              </a>
            </p>
          </div>

          {/* Section 2: Address */}
          <div className="md:w-1/4">
            <p>
              <strong>Address:</strong>
              <br />
              BITS PILANI K.K. BIRLA GOA CAMPUS,
              <br />
              ZUARINAGAR, GOA - 403712
            </p>
          </div>

          {/* Section 3: Links */}
          <div className="md:w-1/4">
            <p className="font-semibold mb-2">Important Links:</p>
            <ul className="space-y-2 list-none">
              <li>
                <Link href="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/experts" className="hover:underline">Our Experts</Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">Services</Link>
              </li>
              <li>
                <Link href="/investment" className="hover:underline">Investment</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact Us</Link>
              </li>
              <li>
                <Link href="/career" className="hover:underline">Career</Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Newsletter */}
          <div className="md:w-1/4">
            <p className="font-semibold">Newsletter</p>
            <p className="text-sm mb-2">Sign up for our newsletter & get latest updates.</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full sm:flex-1 px-3 py-2 rounded-none border-2 border-[#F17400] bg-white text-black placeholder-gray-500 focus:outline-none"
                aria-label="email"
              />
              <button className="px-6 py-2 rounded-full bg-[#F17400] text-white hover:bg-[#D96700]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#F17400] text-white py-4 text-center">
        Copyright @bgiies, All rights reserved
      </div>
    </footer>
  );
}
