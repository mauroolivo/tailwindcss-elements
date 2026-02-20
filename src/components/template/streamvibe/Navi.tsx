"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navi() {
  const [clicked, setClicked] = useState(false);
  const [lensClicked, setLensClicked] = useState(false);

  const handleClick = () => setClicked(true);
  const handleLensClick = () => setLensClicked(true);
  return (
    <div className="absolute top-0 left-px inline-flex w-[1439px] items-center justify-between px-20 py-6">
      <div className="relative h-12 w-40">
        <Image
          src="/template/streamvibe/logo.svg"
          alt="StreamVibe logo"
          width={160}
          height={48}
          className="object-contain"
        />
      </div>
      <div className="size- flex items-center justify-start gap-3.5">
        <div className="relative size-6 overflow-hidden">
          <button
            type="button"
            onClick={handleLensClick}
            aria-label="search"
            className="relative w-8 h-8 p-0 m-0 border-0 bg-transparent"
          >
            <Image
              src="/template/streamvibe/icons/lens.svg"
              alt="search"
              width={24}
              height={24}
              onAnimationEnd={() => setLensClicked(false)}
              className={`transition-opacity duration-300 ease-in-out ${
                lensClicked ? "sv-fade-click" : ""
              } absolute top-[3px] left-[3px]`}
            />
          </button>
        </div>
        <div className="relative size-6 overflow-hidden">
          <button
            type="button"
            onClick={handleClick}
            aria-label="notifications"
            className="relative w-8 h-8 p-0 m-0 border-0 bg-transparent"
          >
            <Image
              src="/template/streamvibe/icons/bell.svg"
              alt="notifications"
              width={24}
              height={24}
              onAnimationEnd={() => setClicked(false)}
              className={`transition-opacity duration-300 ease-in-out ${
                clicked ? "sv-fade-click" : ""
              } absolute top-[3px] left-[3px]`}
            />
          </button>
        </div>
      </div>
      <div className="size- absolute top-[18px] left-[514px] flex items-center justify-start gap-4 overflow-hidden rounded-[10px] bg-stone-950 py-2 pr-7 pl-2 outline outline-stone-900">
        <div className="size- flex items-center justify-start gap-2.5 rounded-lg bg-zinc-900 px-5 py-3 outline -outline-offset-1 outline-zinc-900">
          <div className="justify-start font-['Manrope'] text-sm leading-5 font-medium text-white">
            Home
          </div>
        </div>
        <div className="justify-start font-['Manrope'] text-sm leading-5 font-normal text-stone-300">
          Movies &amp; Shows
        </div>
        <div className="justify-start font-['Manrope'] text-sm leading-5 font-normal text-stone-300">
          Support
        </div>
        <div className="justify-start font-['Manrope'] text-sm leading-5 font-normal text-stone-300">
          Subscriptions
        </div>
      </div>
    </div>
  );
}
