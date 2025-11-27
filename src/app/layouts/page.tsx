import Image from 'next/image';
import ScreenSize from '../components/ScreenSize';
export default function Root() {
  return (
    <>
      <div className="space-y-4">
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-center rounded-lg border bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[8px_8px] bg-left-top text-black/10 dark:text-white/[0.125]">
            <ScreenSize />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="col-start-1 row-start-1 rounded-lg border bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[8px_8px] bg-top-left text-black/10 dark:text-white/12.5"></div>
          <div className="col-start-1 row-start-1 flex gap-4 rounded-lg font-mono text-sm leading-6 font-bold text-white">
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-blue-500 p-4">
              01
            </div>
            <div className="flex w-24 flex-initial items-center justify-center rounded-lg bg-blue-500 p-4 sm:w-64">
              02
            </div>
            <div className="flex w-14 flex-initial items-center justify-center rounded-lg bg-blue-500 p-4 sm:w-32">
              03
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 rounded-lg border bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[8px_8px] bg-top-left px-4 font-mono text-sm leading-6 font-bold text-black/10 md:flex-row md:gap-6 dark:text-white/12.5">
          <aside className="order-3 flex items-center justify-center rounded-lg bg-blue-500 p-4 text-white md:order-1 md:w-1/4">
            01
          </aside>

          <main className="order-1 flex items-center justify-center rounded-lg bg-blue-500 p-4 text-white md:order-2 md:w-2/4">
            02
          </main>

          <div className="order-2 flex items-center justify-center rounded-lg bg-blue-500 p-4 text-white md:order-3 md:w-1/4">
            03
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="col-start-1 row-start-1 rounded-lg border bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[8px_8px] bg-top-left text-black/10 dark:text-white/12.5"></div>
          <div className="col-start-1 row-start-1 flex gap-4 rounded-lg font-mono text-sm leading-6 font-bold text-white">
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-blue-300 p-4 dark:bg-blue-800 dark:text-blue-500">
              01
            </div>
            <div className="flex w-24 flex-initial items-center justify-center rounded-lg bg-blue-500 p-4 sm:w-64">
              02
            </div>
            <div className="flex w-14 flex-initial items-center justify-center rounded-lg bg-blue-500 p-4 sm:w-32">
              03
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="col-start-1 row-start-1 rounded-lg border bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[8px_8px] bg-top-left text-black/10 dark:text-white/12.5"></div>
          <div className="col-start-1 row-start-1 flex gap-4 rounded-lg font-mono text-sm leading-6 font-bold text-white">
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-violet-300 p-4 dark:bg-violet-800 dark:text-violet-400">
              01
            </div>
            <div className="flex w-64 flex-auto items-center justify-center rounded-lg bg-violet-500 p-4">
              02
            </div>
            <div className="flex w-32 flex-auto items-center justify-center rounded-lg bg-violet-500 p-4">
              03
            </div>
          </div>
        </div>

        <div className="m-4">
          <div className="overflow-hidden rounded-3xl">
            <div className="flex h-[280px] justify-center bg-[url('/forest.jpg')] bg-cover bg-center p-4 lg:h-[220px] lg:items-center lg:justify-between lg:p-6">
              <div className="flex w-full max-w-[788px] flex-col items-center justify-center gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur-xl lg:h-full lg:flex-row lg:justify-between lg:gap-6">
                <div className="text-center lg:text-left">
                  <Image
                    src="/blackfriday.svg"
                    alt="BLACK FRIDAY 50% OFF"
                    className="mb-3 h-auto w-full max-w-[400px] lg:max-w-[659px]"
                    width={650}
                    height={100}
                  />
                  <p className="max-w-lg text-sm text-white lg:text-base">
                    Use code BLACKFRIDAY at checkout to get 50% off your
                  </p>
                </div>
                <button className="ml-4 rounded-full bg-neutral-800 px-6 py-3 font-semibold whitespace-nowrap text-white transition-colors hover:bg-neutral-700">
                  claim offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
        <div className="grid grid-cols-4 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white">
          <div className="rounded-lg bg-indigo-300 p-4 dark:bg-indigo-900">01</div>
          <div className="rounded-lg bg-indigo-300 p-4 dark:bg-indigo-900">02</div>
          <div className="rounded-lg bg-indigo-300 p-4 dark:bg-indigo-900">03</div>
          <div className="rounded-lg bg-indigo-300 p-4 dark:bg-indigo-900">04</div>
          <div className="rounded-lg bg-indigo-300 p-4 dark:bg-indigo-900">05</div>
          <div className="col-span-3 grid grid-cols-subgrid gap-4">
            <div className="rounded-lg border bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[size:8px_8px] bg-top-left p-4 text-black/10 dark:text-white/12.5"></div>
            <div className="rounded-lg bg-pink-500 p-4">06</div>
            <div className="rounded-lg border bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[size:8px_8px] bg-top-left p-4 text-black/10 dark:text-white/12.5"></div>
          </div>
        </div>
      
    </>
  );
}
