export default function Root() {
  return (
    <>
      <div className="space-y-4">
        <div className="container mx-auto">
          <div className="col-start-1 row-start-1 mx-4 h-24 rounded-lg border bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[size:8px_8px] bg-top-left text-black/10 dark:text-white/12.5"></div>
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
          <div className="col-start-1 row-start-1 rounded-lg border bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[size:8px_8px] bg-top-left text-black/10 dark:text-white/12.5"></div>
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
      </div>
    </>
  );
}
