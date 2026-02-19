'use client';

import React, { useEffect, useRef } from 'react';

const COLOR_CLASSES = [
  'bg-blue-500',
  'bg-violet-500',
  'bg-indigo-300',
  'bg-cyan-500',
];

// Predefine varying heights to create a masonry look
const HEIGHTS = [
  120, 160, 200, 140, 180, 220, 130, 170, 210, 150, 190, 230, 125, 165, 205,
  145, 185, 215, 135, 175,
];

export default function MasonryGrid() {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Reveal-on-enter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            // Reveal with fade+slide
            el.style.transition = 'opacity 500ms ease, transform 500ms ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            // Once revealed, stop observing to avoid replays
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((el) => {
      if (!el) return;
      // Initial hidden state
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Masonry row span calculation based on actual element height to avoid big gaps
  useEffect(() => {
    const rowSize = 8; // px, must match [grid-auto-rows:8px]
    const recalc = () => {
      itemRefs.current.forEach((el) => {
        if (!el) return;
        // Temporarily clear gridRowEnd to measure natural height
        el.style.gridRowEnd = '';
        const height = el.offsetHeight; // includes padding/content
        const span = Math.ceil(height / rowSize);
        el.style.gridRowEnd = `span ${span}`;
      });
    };
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, []);

  return (
    <div className="w-full">
      {/* Masonry via CSS Grid with row-based ordering */}
      <div
        ref={containerRef}
        className="grid auto-rows-[8px] grid-cols-1 gap-4 transition-all duration-300 ease-out sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={`rounded-lg shadow-sm transition-transform duration-300 ease-out hover:scale-[1.01] ${COLOR_CLASSES[i % COLOR_CLASSES.length]}`}
            style={{
              minHeight: HEIGHTS[i % HEIGHTS.length],
            }}
          >
            <div className="p-4 text-white">
              <div className="text-sm font-medium">Box {i + 1}</div>
              <div className="text-xs opacity-80">Responsive masonry item</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
