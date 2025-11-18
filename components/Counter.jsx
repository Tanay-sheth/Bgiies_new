"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 } // Count starts when 40% of element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const increment = target / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animate();
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count}
    </span>
  );
}
