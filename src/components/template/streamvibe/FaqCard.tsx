"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  order: string;
  title: string;
  hint: string;
};

export default function FaqCard({ order, title, hint }: Props) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  
  useLayoutEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    const newMax = open ? `${el.scrollHeight}px` : "0px";
    el.style.maxHeight = newMax;
    // ensure transition is applied
    el.style.transition = "max-height 300ms ease";
  }, [open]);

  return (
    <div className="inline-flex items-start justify-start gap-4 self-stretch p-6">
      <div className="size- inline-flex flex-col items-start justify-start gap-2.5 rounded-lg bg-stone-900 p-4 outline -outline-offset-1 outline-neutral-800">
        <div className="justify-start font-['Manrope'] text-base font-semibold text-white">
          {order}
        </div>
      </div>

      <div className="inline-flex flex-1 flex-col items-start justify-start gap-3.5 self-stretch">
        <div className="flex items-center justify-between w-full">
          <div className="justify-start self-stretch font-['Manrope'] text-xl leading-8 font-medium text-white">
            {title}
          </div>
          <button
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2"
            type="button"
          >
            <Image
              src="/template/streamvibe/icons/plus.svg"
              alt="toggle"
              width={20}
              height={20}
              className={`transform transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            />
          </button>
        </div>

        <div ref={contentRef} className="overflow-hidden w-full" style={{ maxHeight: "0px" }}>
          <div
            className={`pt-4 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          >
            <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
              {hint}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
