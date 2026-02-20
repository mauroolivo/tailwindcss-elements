"use client";
import Image from "next/image";
import { useState } from "react";

export default function BtnWatch() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(true);

  return (
    <button
      type="button"
      onClick={handleClick}
      onAnimationEnd={() => setClicked(false)}
      style={{
        transition:
          "background-color 300ms ease-in-out, opacity 300ms ease-in-out",
      }}
      className={`group inline-flex items-center justify-start gap-2 rounded-lg px-6 py-3.5 transition-all duration-300 ease-in-out focus:outline-none ${
        clicked
          ? "bg-red-700 opacity-80"
          : "bg-red-600 hover:bg-red-500 hover:opacity-95 active:bg-red-700 active:opacity-80"
      }`}
    >
      <span className="relative flex items-center justify-center w-7 h-7">
        <Image
          src="/template/streamvibe/icons/triangle_right.svg"
          alt="triangle right"
          width={28}
          height={28}
          onAnimationEnd={() => setClicked(false)}
          className={`transition-opacity duration-300 ease-in-out group-hover:opacity-90 group-active:opacity-80 ${
            clicked ? "sv-fade-click" : ""
          }`}
        />
      </span>
      <span
        className={`select-none font-['Manrope'] text-sm leading-5 font-semibold text-white ${clicked ? "sv-fade-click" : ""}`}
      >
        Start Watching Now
      </span>
    </button>
  );
}
