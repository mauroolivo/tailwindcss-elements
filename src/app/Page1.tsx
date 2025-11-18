import Image from 'next/image';
function Page1() {
  const cards = [1, 2, 3, 4, 5].map((num) => (
    <div key={num} className="max-w-xs rounded bg-amber-500 p-4">
      <h3 className="text-xl font-bold text-white">Card {num}</h3>
      <p className="mt-2 text-white">
        This is a description for card {num}. It looks great on any screen size.
      </p>
    </div>
  ));
  return (
    <>
      <h2 className="text-7xl text-green-700 font-stretch-condensed">
        Welcome aboard!
      </h2>
      <button className="m-2 rounded bg-green-500 p-3 hover:bg-green-600 focus:ring-2 focus:ring-green-300">
        Click me
      </button>

      <Image
        src="/forest.jpg"
        alt="Forest"
        className="w-full sm:w-1/2 lg:w-1/3"
        width={600}
        height={400}
      />

      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        Submit
      </button>

      <div className="block bg-blue-100 p-4">A block element</div>
      <div className="inline-block bg-blue-100 p-4">inline block element</div>
      <div className="block space-x-4 bg-blue-100 p-4 sm:flex">
        <div className="bg-white p-2">Flex item 1 which a little larger</div>
        <div className="bg-white p-2">Flex item 2 which a little larger</div>
        <div className="bg-white p-2">Flex item 3 which a little larger</div>
      </div>
      <div className="container mx-auto bg-yellow-100 p-4">
        <h1 className="text-center text-3xl font-bold underline">
          Container Example
        </h1>
        <p className="mt-2 bg-yellow-200 p-2">
          This container is centered and has responsive padding.
        </p>
      </div>

      <div className="box-border w-48 border-4 border-indigo-300 p-4">
        <p>This box stays exactly 12rem wide, border and padding</p>
      </div>
      <div className="mt-4 box-content w-48 border-4 border-pink-300 p-4">
        <p>
          Here the content area is 12rem wide, padding and border are added
          outside
        </p>
      </div>

      <div className="mx-auto my-8 max-w-sm rounded bg-white p-6 shadow-2xl">
        Centering this with fitted width
      </div>

      <img
        className="mx-auto h-32 w-32 transform rounded-lg object-cover transition-transform hover:scale-105"
        src="https://fastly.picsum.photos/id/616/300/300.jpg?hmac=eQKtU2fvqBbWzcZLd1QWT51Nm-Mro6VnR7UkUvM3LZQ"
        alt="img"
      />

      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards}
      </div>
    </>
  );
}

export default Page1;
