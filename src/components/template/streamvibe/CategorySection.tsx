"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ExploreCard from "@/components/template/streamvibe/ExploreCard";

const CARD_MIN_WIDTH = 272; // px (adjusted so 5 cards fit within 1440px)
const GAP_PX = 10; // matches gap-4 (1rem = 16px)

export default function CategorySection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const items = [
    { title: "Action" },
    { title: "Adventure" },
    { title: "Comedy" },
    { title: "Drama" },
    { title: "Horror" },
  ];

  useEffect(() => {
    const el = trackRef.current || containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const w = (trackRef.current ?? containerRef.current)!.clientWidth;
      if (w >= 1440) {
        setVisibleCount(Math.min(5, items.length));
        return;
      }
      const count = Math.max(
        1,
        Math.floor((w + GAP_PX) / (CARD_MIN_WIDTH + GAP_PX)),
      );
      setVisibleCount(Math.min(5, count));
    });
    ro.observe(el);
    return () => ro.disconnect();
  } );

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = dir * (CARD_MIN_WIDTH + GAP_PX);
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  const showNav = visibleCount < 5 && items.length > visibleCount;

  return (
    <div
      className="w-full max-w-[1440px] mx-auto flex flex-col items-start justify-start gap-14"
      ref={containerRef}
    >
      <div className="flex items-end justify-between gap-4 self-stretch">
        <div className="flex-1 flex flex-col items-start gap-2.5">
          <div className="font-['Manrope'] text-3xl leading-10 font-bold text-white">
            Explore our wide variety of categories
          </div>
          <div className="font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
            Whether you&apos;re looking for a comedy to make you laugh, a drama
            to make you think, or a documentary to learn something new
          </div>
        </div>


      </div>

      <div className="relative w-full">
        {showNav && (
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="absolute left-2 top-1/2 z-50 -translate-y-1/2 "
          >
            <div className="rounded-md bg-zinc-900 p-2.5 border border-zinc-700">
              <div className="relative w-6 h-6 overflow-hidden">
                <Image
                  src="/template/streamvibe/icons/arrow_left.svg"
                  alt="arrow left"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </button>
        )}

        <div
          ref={trackRef}
          className="flex gap-4 overflow-hidden scroll-smooth"
        >
          {items.map((it) => (
            <div key={it.title} className="flex-none w-[280px]">
              <ExploreCard title={it.title} images={[]} />
            </div>
          ))}
        </div>

        {showNav && (
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="absolute right-2 top-1/2 z-50 -translate-y-1/2 "
          >
            <div className="rounded-md bg-zinc-900 p-2.5 border border-zinc-700">
              <div className="relative w-6 h-6 overflow-hidden">
                <Image
                  src="/template/streamvibe/icons/arrow_right.svg"
                  alt="arrow right"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
