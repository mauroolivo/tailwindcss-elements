import Image from 'next/image';
import ScreenSize from '../components/ScreenSize';
import ExpandableTrio from '../components/ExpandableTrio';
import IconExchange from '../components/IconExchange';
export default function Root() {
  return (
    <>
      <div className="space-y-4">
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-center rounded-lg border striped-bg text-black/10 dark:text-white/12.5">
            <ScreenSize />
          </div>
        </div>

        {/* <div className="mx-auto grid max-w-3xl grid-cols-1">
          <div className="col-start-1 row-start-1 rounded-lg border striped-bg text-black/10 dark:text-white/12.5"></div>
          <div className="col-start-1 row-start-1 flex justify-between space-x-4 rounded-lg font-mono text-sm leading-6 font-bold text-white">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-cyan-500">
              01
            </div>
            <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-cyan-500">
              02
            </div>
            <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-cyan-500">
              03
            </div>
          </div>
        </div> */}

        <div className="relative space-y-2">
          <div className="mx-auto grid max-w-3xl grid-cols-1 grid-rows-1">
            <div className="col-start-1 row-start-1 rounded-lg border border-gray-500 text-black/10 dark:text-white/12.5"></div>

            <div className="col-start-1 row-start-1 flex justify-between space-x-4 rounded-lg p-4 font-mono text-sm leading-6 font-bold text-white">
              <div className="items-center justify-center px-4">
                <div className="text-text mb-4 text-sm">You pay</div>
                <div className="text-text text-lg font-bold">0.16</div>
              </div>
              {/* <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-cyan-500">
              ..
            </div> */}
              <div className="items-center justify-center px-4">
                <div className="mb-4 text-sm text-blue-500">Max 99</div>
                <div className="text-text inline-flex items-center justify-center gap-2 text-lg">
                  <Image
                    src="/BTC.svg"
                    alt=""
                    className="h-6 w-6"
                    width={256}
                    height={256}
                  />
                  BTC
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-1 grid-rows-1">
            <div className="col-start-1 row-start-1 rounded-lg border border-gray-500 text-black/10 dark:text-white/12.5"></div>

            <div className="col-start-1 row-start-1 flex justify-between space-x-4 rounded-lg p-4 font-mono text-sm leading-6 font-bold text-white">
              <div className="items-center justify-center px-4">
                <div className="text-text mb-4 text-sm">You receive</div>
                <div className="text-text text-lg font-bold">2,350</div>
              </div>
              {/* <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-cyan-500">
              ..
            </div> */}
              <div className="items-center justify-center px-4">
                <div className="mb-4 text-sm text-blue-500">Max 99</div>
                <div className="text-text inline-flex items-center justify-center gap-2 text-lg">
                  <Image
                    src="/ETH.svg"
                    alt=""
                    className="h-6 w-6"
                    width={256}
                    height={256}
                  />
                  ETH
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="bg-bgmain h-16 w-16 rounded-full border border-gray-500"></div>
            <div className="bg-bgmain absolute h-2 w-24"></div>
            <div className="absolute h-12 w-12 rounded-full border border-gray-500"></div>
            <div className="absolute h-10 w-10">
              <IconExchange />
            </div>
          </div>
          {/* <div className="pointer-events-none absolute inset-0 grid place-items-center">
            
          </div> */}

          {/* <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="h-12 w-24 rounded-tl-full rounded-tr-full border border-gray-500 bg-black"></div>
          </div> */}
        </div>

        <div className="mx-auto max-w-3xl space-y-2">
          <div className="items-top flex rounded-lg border striped-bg text-black/10 dark:text-white/12.5">
            <div className="text-text shrink-0 rounded-lg bg-amber-400/10 px-4 py-2 text-center text-sm italic">
              <Image
                src="/BTC.svg"
                alt=""
                className="inline-block h-16 w-16 opacity-50"
                width={256}
                height={256}
              />
            </div>
            <div className="text-text bg-text/10 mx-auto flex-1 rounded-lg px-4 py-2 text-left">
              <p className="text-text text-lg font-bold">Text LEFT</p>
              <p>Loremo ipsum</p>
            </div>
            <div className="text-text shrink-0 rounded-lg bg-emerald-400/10 px-4 py-2 text-center text-sm italic">
              1.00 €
            </div>
          </div>
          <div className="items-top flex rounded-lg border striped-bg text-black/10 dark:text-white/12.5">
            <div className="text-text shrink-0 rounded-lg bg-amber-400/10 px-4 py-2 text-center text-sm italic">
              <Image
                src="/ETH.svg"
                alt=""
                className="inline-block h-16 w-16 opacity-50"
                width={256}
                height={256}
              />
            </div>
            <div className="text-text bg-text/10 mx-auto flex-1 rounded-lg px-4 py-2 text-left">
              <p className="text-text text-lg font-bold">Text LEFT</p>
              <p>Loremo ipsum</p>
            </div>
            <div className="text-text shrink-0 rounded-lg bg-emerald-400/10 px-4 py-2 text-center text-sm italic">
              3,000,000.00 €
            </div>
          </div>
        </div>

        <ExpandableTrio />

      </div>
    </>
  );
}
