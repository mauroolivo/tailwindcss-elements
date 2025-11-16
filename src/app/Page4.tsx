function Page4() {
  return (
    <>
      <div className="flex flex-col rounded-lg bg-gray-100 p-6 md:flex-row">
        <aside className="order-3 rounded bg-white p-4 md:order-1 md:w-1/4">
          Sidebar
        </aside>

        <main className="order-1 mb-4 rounded bg-cyan-100 p-4 md:order-2 md:mb-0 md:flex-1">
          Content
        </main>

        <div className="order-2 rounded bg-white p-4 md:order-3 md:w-1/4">
          Ads
        </div>
      </div>

      <section className="flex flex-col rounded bg-indigo-50 p-8 md:flex-row">
        <div className="order-1 mb-6 flex-1 text-center md:order-2 md:mb-0 md:pl-8 md:text-left">
          <h1 className="mb-3 text-4xl font-bold">Build Anything Faster</h1>
          <p className="text-gray-700">
            Leverage pre-built components and templates to accelerate your
            development process.
          </p>
        </div>
        <img
          src="/forest.jpg"
          className="order-2 w-full rounded object-cover md:order-1 md:w-1/3"
          alt="Illustration"
        ></img>
      </section>

      <div className="flex">
        <div className="w-24 shrink-0">
          <div className="bg-purple-500 p-2">
            <p className="bg-amber-200">1</p>
          </div>
        </div>
        <div className="grow">
          <div className="bg-purple-500 p-2">
            <p className="bg-amber-200">1</p>
          </div>
        </div>
        <div className="w-24 shrink-0">
          <div className="bg-purple-500 p-2">
            <p className="bg-amber-200">1</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page4;
