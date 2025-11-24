function Page8() {
  return (
    <>
      <div className="container">
        <button className="rounded-md bg-green-600 px-4 py-2 text-white transition duration-900 ease-out hover:scale-105 hover:bg-green-700">
          Animated transition
        </button>
      </div>

      <h1 className="animate-fade-in-scale">Animated transition</h1>

      <div className="bg-bgmain mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="size-10 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-24 h-24 bg-indigo-800 rounded animate-wiggle"></div>
    </>
  );
}

export default Page8;
