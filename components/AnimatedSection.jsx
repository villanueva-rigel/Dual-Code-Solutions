"use client";

import { useEffect, useRef } from "react";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.15,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const dirClass =
      direction === "left"
        ? "reveal-left"
        : direction === "right"
        ? "reveal-right"
        : "reveal";

    element.classList.add(dirClass);
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, direction, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
