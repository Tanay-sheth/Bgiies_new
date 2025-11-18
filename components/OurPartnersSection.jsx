"use client";

import { Lexend } from "next/font/google";
import { useEffect, useRef } from "react";

const lexend = Lexend({ subsets: ["latin"] });

export default function InvestorsSection() {
  const scrollRef = useRef(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const loop = () => {
      if (!el) return;

      if (!isDraggingRef.current) {
        el.scrollLeft += 0.6; // speed

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function onPointerDown(e) {
      isDraggingRef.current = true;
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      const rectLeft = el.getBoundingClientRect().left + window.scrollX;

      startXRef.current = pageX - rectLeft;
      startScrollRef.current = el.scrollLeft;

      document.body.style.userSelect = "none";
      document.body.style.cursor = "grabbing";
    }

    function onPointerMove(e) {
      if (!isDraggingRef.current) return;
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      const rectLeft = el.getBoundingClientRect().left + window.scrollX;
      const x = pageX - rectLeft;

      const walk = (x - startXRef.current) * 1.5;
      el.scrollLeft = startScrollRef.current - walk;
    }

    function onPointerUp() {
      isDraggingRef.current = false;
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    }

    el.addEventListener("mousedown", onPointerDown, { passive: true });
    window.addEventListener("mousemove", onPointerMove, { passive: false });
    window.addEventListener("mouseup", onPointerUp, { passive: true });

    el.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerUp, { passive: true });

    return () => {
      el.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);

      el.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);

      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };
  }, []);

  const investors = [
    "partners/1.png",
    "partners/2.png",
    "partners/3.png",
    "partners/4.png",
    "partners/5.png",
    "partners/6.png",
    "partners/7.png",
    "partners/8.png",
    "partners/9.png",
    "partners/10.png",
    "partners/11.png",
    // "partners/12.png",
    "partners/13.png",
    "partners/14.png",
    "partners/15.png",
    // "partners/16.png",
  ];

  const loopItems = [...investors, ...investors];

  return (
    <div className="py-40">
      <section
        className="w-full relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/investors-bg.png')" }}
      >
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-semibold text-black"
            style={{ fontFamily: lexend.style.fontFamily }}
          >
            BGIIES Investors
          </h2>
          <div className="w-16 h-[3px] bg-[#1BA1E2] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="overflow-hidden w-full cursor-grab select-none"
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="flex gap-10 py-6 w-fit">
            {loopItems.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className="w-48 h-48 object-contain inline-block"
                alt={`Investor ${idx}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
