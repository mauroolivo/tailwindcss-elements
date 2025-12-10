'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

type PanelProps = {
  title: string;
  text: string;
  imageSrc: string;
  isActive: boolean;
  onActivate: () => void;
};

function Panel({ title, text, imageSrc, isActive, onActivate }: PanelProps) {
  return (
    <div
      className={`${isActive ? 'basis-2/3' : 'basis-1/6'} min-w-0 cursor-pointer rounded-lg border border-gray-500/50 p-4 motion-safe:transition-[flex-basis] motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.2,0,0,1)] motion-safe:will-change-[flex-basis]`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
    >
      <h3 className="text-text mb-2 font-semibold">{title}</h3>
      <p className="text-text/70 text-sm">{text}</p>
      <div
        className={`${isActive ? 'opacity-100' : 'pointer-events-none opacity-0'} duration-300 motion-safe:transition-opacity`}
      >
        <div className="mt-3 flex items-center gap-3">
          <Image
            src={imageSrc}
            alt=""
            width={48}
            height={48}
            className="h-16 w-16"
          />
        </div>
      </div>
    </div>
  );
}

export default function ExpandableTrio() {
  const [selected, setSelected] = useState(0);
  const activate = useCallback((i: number) => () => setSelected(i), []);

  return (
    <div className="group mx-auto max-w-3xl">
      <div className="flex gap-3">
        <Panel
          title="Primary"
          text="This panel is wider by default."
          imageSrc="/BTC.svg"
          isActive={selected === 0}
          onActivate={activate(0)}
        />
        <Panel
          title="Second"
          text="Hover me to expand."
          imageSrc="/BTC.svg"
          isActive={selected === 1}
          onActivate={activate(1)}
        />
        <Panel
          title="Third"
          text="Hover me to expand."
          imageSrc="/BTC.svg"
          isActive={selected === 2}
          onActivate={activate(2)}
        />
      </div>
    </div>
  );
}
