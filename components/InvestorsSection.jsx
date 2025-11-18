"use client";

import { Lexend } from "next/font/google";
import { useEffect, useRef } from "react";

const lexend = Lexend({ subsets: ["latin"] });

export default function InvestorsSection() {
  const scrollRef = useRef(null);

  // refs for drag / auto-scroll state (refs are synchronous & cheap)
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // auto-scroll loop
    const loop = () => {
      if (!el) return;

      // only auto-scroll when not dragging
      if (!isDraggingRef.current) {
        // increment scrollLeft by 0.6 - tweak this number for speed
        el.scrollLeft += 0.6;

        // reset when we've scrolled half the scrollWidth (we duplicated items)
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

  // pointer/touch handlers using window listeners for robustness
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function onPointerDown(e) {
      isDraggingRef.current = true;
      // support touch and mouse
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      const rectLeft = el.getBoundingClientRect().left + window.scrollX;
      startXRef.current = pageX - rectLeft;
      startScrollRef.current = el.scrollLeft;

      // prevent image/text selection while dragging
      document.body.style.userSelect = "none";
      document.body.style.cursor = "grabbing";
    }

    function onPointerMove(e) {
      if (!isDraggingRef.current) return;
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      const rectLeft = el.getBoundingClientRect().left + window.scrollX;
      const x = pageX - rectLeft;
      const walk = (x - startXRef.current) * 1.5; // multiplier for speed
      el.scrollLeft = startScrollRef.current - walk;
    }

    function onPointerUp() {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    }

    // Add both mouse and touch listeners on window (so we don't lose them)
    el.addEventListener("mousedown", onPointerDown, { passive: true });
    window.addEventListener("mousemove", onPointerMove, { passive: false });
    window.addEventListener("mouseup", onPointerUp, { passive: true });

    // touch
    el.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerUp, { passive: true });

    // cleanup
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
    "/investor1.png",
    "/investor2.png",
    "/investor3.png",
    "/investor4.png",
    "/investor5.png",
  ];

  // duplicate to create seamless loop
  const loopItems = [...investors, ...investors];

  return (
    <section
      className="w-full relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/investors-bg.png')" }}
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl font-semibold text-black"
          style={{ fontFamily: lexend.style.fontFamily }}
        >
          BGIIES Investors
        </h2>
        <div className="w-16 h-[3px] bg-[#1BA1E2] mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Scroll area: note no onMouse handlers here — we use window listeners instead */}
      <div className="overflow-hidden w-full cursor-grab">
        <div
          ref={scrollRef}
          className="flex gap-10 py-6 select-none"
          style={{ width: "max-content", whiteSpace: "nowrap" }}
        >
          {loopItems.map((img, idx) => (
            <div
              key={idx}
              className="w-56 h-40 flex items-center justify-center bg-white rounded-xl shadow-md min-w-[14rem]"
            >
              <img src={img} className="w-32 h-16 object-contain" alt={`Investor ${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
