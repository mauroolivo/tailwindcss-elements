export default function Page() {
  return (
    <>
      <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
        <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>

        <div className="relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10">
          <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
            Chancellor on Brink of Second Bailout for Banks
          </h1>
          <h1 className="px-2 text-4xl text-blue-900 tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
            Chancellor on Brink of Second Bailout for Banks
          </h1>
          <h1 className="font-inter  text-text/30 px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
            Chancellor on Brink of Second Bailout for Banks
          </h1>
          {/* <div className="text-text m-72 space-y-4 text-5xl">
            <p className="font-sans">
              Chancellor on Brink of Second Bailout for Banks
            </p>

            <p className="font-mono">
              Chancellor on Brink of Second Bailout for Banks
            </p>

            <p className="font-lora">
              Chancellor on Brink of Second Bailout for Banks
            </p>

            <p className="font-roboto">
              Chancellor on Brink of Second Bailout for Banks
            </p>

            <p className="font-montserrat">
              Chancellor on Brink of Second Bailout for Banks
            </p>

            <p className="font-mulish">
              Chancellor on Brink of Second Bailout for Banks
            </p>

            <p className="font-inter">
              Chancellor on Brink of Second Bailout for Banks
            </p>
          </div> */}
          <div className="relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10">
            <div className="h-10"></div>
          </div>
        </div>

        <div className="col-start-3 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>
      </div>
    </>
  );
}
