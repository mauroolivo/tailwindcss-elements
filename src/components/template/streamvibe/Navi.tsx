"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navi() {
  const [clicked, setClicked] = useState(false);
  const [lensClicked, setLensClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Movies & Shows", "Support", "Subscriptions"];

  const handleClick = () => setClicked(true);
  const handleLensClick = () => setLensClicked(true);
  return (
    <div className="absolute top-0 left-0 w-full px-6 md:px-20 py-6">
      <div className="flex items-center justify-between">
        <div className="relative h-12 w-40">
          <Image
            src="/template/streamvibe/logo.svg"
            alt="StreamVibe logo"
            width={160}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-start gap-3.5">
          <div className="hidden lg:flex items-center justify-start gap-3.5">
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

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            className="lg:hidden rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white outline outline-stone-900"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Centered nav for lg+ screens */}
      <div className="hidden lg:flex absolute left-1/2 top-6 transform -translate-x-1/2 items-center justify-center gap-4 overflow-hidden rounded-[10px] bg-stone-950 py-2 pr-7 pl-2 outline outline-stone-900">
        <div className="flex items-center justify-start gap-2.5 rounded-lg bg-zinc-900 px-5 py-3 outline -outline-offset-1 outline-zinc-900">
          <div className="font-['Manrope'] text-sm leading-5 font-medium text-white">
            {navLinks[0]}
          </div>
        </div>
        {navLinks.slice(1).map((link) => (
          <div
            key={link}
            className="font-['Manrope'] text-sm leading-5 font-normal text-stone-300"
          >
            {link}
          </div>
        ))}
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-out ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/60"
        />
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-stone-950 p-6 outline outline-stone-900 transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
              className="rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white"
            >
              Close
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <button
                key={link}
                type="button"
                className={`rounded-lg px-4 py-3 text-left text-sm font-['Manrope'] ${
                  index === 0
                    ? "bg-zinc-900 font-medium text-white outline -outline-offset-1 outline-zinc-900"
                    : "text-stone-300"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
