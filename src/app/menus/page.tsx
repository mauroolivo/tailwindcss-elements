'use client';

import { useEffect, useRef, useState } from 'react';

export default function Page() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 120);
  };

  useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    },
    []
  );

  const items = [
    { key: 'products', label: 'Products' },
    { key: 'docs', label: 'Docs' },
    { key: 'blog', label: 'Blog' },
  ];

  return (
    <>
    <div className="min-h-[60vh]">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:border-white/12.5 dark:bg-black/40">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <div className="text-text font-mono text-sm font-bold">
              Demo Menu
            </div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-6 md:flex">
              {items.map((it) => (
                <div
                  key={it.key}
                  className="group relative"
                  onMouseEnter={() => {
                    if (closeTimer.current)
                      window.clearTimeout(closeTimer.current);
                    setOpen(it.key);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className="text-text relative text-sm transition-colors outline-none hover:text-blue-600 focus:text-blue-600"
                    onFocus={() => setOpen(it.key)}
                    onBlur={scheduleClose}
                  >
                    {it.label}
                    {/* underline */}
                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full group-focus:w-full" />
                  </button>

                  {/* Dropdown panel (expand from right → left) */}
                  <div
                    className={`pointer-events-${open === it.key ? 'auto' : 'none'} absolute top-full right-0 mt-2 w-[560px] max-w-[min(560px,calc(100vw-2rem))] origin-top-right rounded-lg border bg-white/90 p-4 shadow-xl backdrop-blur transition-all duration-200 dark:border-white/12.5 dark:bg-black/70 ${open === it.key ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-1 scale-95 opacity-0'}`}
                    onMouseEnter={() => {
                      if (closeTimer.current)
                        window.clearTimeout(closeTimer.current);
                      setOpen(it.key);
                    }}
                    onMouseLeave={scheduleClose}
                  > 
                    <span className="pointer-events-none absolute -top-2 right-4 h-0 w-0 border-r-8 border-b-8 border-l-8 border-r-transparent border-b-white border-l-transparent dark:border-b-black/70" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-text rounded-md border p-3 text-sm dark:border-white/12.5">
                        <div className="mb-1 font-mono font-bold">Overview</div>
                        <p className="text-text/70 text-xs">
                          High-level summary and quick links.
                        </p>
                      </div>
                      <div className="text-text rounded-md border p-3 text-sm dark:border-white/12.5">
                        <div className="mb-1 font-mono font-bold">Guides</div>
                        <p className="text-text/70 text-xs">
                          Step-by-step tutorials and docs.
                        </p>
                      </div>
                      <div className="text-text rounded-md border p-3 text-sm dark:border-white/12.5">
                        <div className="mb-1 font-mono font-bold">
                          Resources
                        </div>
                        <p className="text-text/70 text-xs">
                          APIs, changelogs, and references.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <a
                href="#"
                className="rounded-full bg-neutral-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700 dark:bg-white/10 dark:text-white"
              >
                Sign in
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="text-text inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden">
            <div className="border-t px-4 py-3 text-sm">
              {items.map((it) => (
                <details
                  key={it.key}
                  className="group border-b py-2 last:border-b-0"
                >
                  <summary className="text-text cursor-pointer list-none py-2">
                    <span className="relative inline-block">
                      {it.label}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-open:w-full" />
                    </span>
                  </summary>
                  <div className="text-text/80 space-y-2 py-2">
                    <div className="rounded-md border p-3 dark:border-white/12.5">
                      Overview
                    </div>
                    <div className="rounded-md border p-3 dark:border-white/12.5">
                      Guides
                    </div>
                    <div className="rounded-md border p-3 dark:border-white/12.5">
                      Resources
                    </div>
                  </div>
                </details>
              ))}
              <a
                href="#"
                className="mt-2 inline-block rounded-full bg-neutral-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700 dark:bg-white/10 dark:text-white"
              >
                Sign in
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Demo filler content to show sticky behavior */}
      <main className="container mx-auto px-4">
        <div className="py-8">
          <div className="striped-bg rounded-lg border p-6 text-black/10 dark:text-white/12.5">
            <p className="font-mono text-sm">Page content…</p>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
