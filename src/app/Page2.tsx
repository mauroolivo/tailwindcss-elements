import { useState } from 'react';
import Image from 'next/image';

function Page2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between bg-gray-800 p-4">
        <div className="mr-6 flex shrink-0 items-center text-white">
          <span className="text-xl font-semibold">MyBrand</span>
        </div>
        <div className="block lg:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } w-full grow overflow-hidden transition-all duration-500 ease-in-out lg:flex lg:max-h-none lg:w-auto lg:items-center lg:opacity-100`}
        >
          <div className="text-sm lg:grow">
            <a
              href="#"
              className="mt-4 mr-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
            >
              Home
            </a>
            <a
              href="#"
              className="mt-4 mr-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
            >
              About
            </a>
            <a
              href="#"
              className="mt-4 mr-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
            >
              Services
            </a>
            <a
              href="#"
              className="mt-4 mr-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href="#"
              className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-gray-800 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      <div className="flex min-h-screen items-center justify-center bg-amber-50 p-6">
        <div className="max-w-xl space-y-6 text-center">
          <h1 className="font-roboto text-4xl font-thin text-gray-900 sm:text-5xl">
            Elevate your web design
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            Build lightning-fast, responsive websites with ease using Tailwind
            CSS.
          </p>

          <div className="bg-amber-200 p-1">
            <div className="bg-amber-500 p-1">NO FLEX</div>
          </div>
          <div className="flex bg-amber-200 p-1">
            <div className="bg-amber-500 p-1">FLEX</div>
          </div>
          <p className="bg-my-pippo">My Pippo</p>
          <p className="text-my-pippo">My Pippo</p>

          <section className="rounded-lg bg-linear-to-r from-purple-500 via-pink-500 to-red-500 p-12 text-center">
            <h2 className="text-3xl font-bold text-white">Color transitions</h2>
            <p className="mt-4 text-white/80">Harness the gradient</p>
          </section>
          <p className="mx-auto max-w-prose text-left text-base leading-relaxed tracking-wide text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
            hendrerit enim. Phasellus pretium mauris leo, in fringilla nisl
            bibendum nec. Nam ut mi at lectus ornare cursus in pellentesque
            eros.
          </p>
          <div className="bg-black">
            <div className="text-super-green p-4">Custom Super Green</div>
          </div>

          <div className="flex gap-1 bg-black p-1">
            <div className="w-fit bg-red-700 p-1 text-white">Opacity</div>
            <div className="w-fit bg-red-700 p-1 text-white opacity-90">
              Opacity
            </div>
            <div className="w-fit bg-red-700 p-1 text-white opacity-80">
              Opacity
            </div>
            <div className="w-fit bg-red-700 p-1 text-white opacity-70">
              Opacity
            </div>
            <div className="w-fit bg-red-700 p-1 text-white opacity-60">
              Opacity
            </div>
          </div>

          <section className="bg-gray-100 p-6">
            <h2 className="mb-6 text-2xl font-bold">Product Gallery</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow">
                <Image
                  className="mb-4 h-40 w-full rounded-md object-cover"
                  src="https://fastly.picsum.photos/id/1054/200/200.jpg?hmac=7qtHUdgOyKxMVpcUELySqbknGm7xI76LbA9CE0uag_o"
                  alt="img"
                  width={200}
                  height={200}
                />
                <h3 className="mb-2 text-lg font-semibold">Product 1</h3>
                <p className="text-gray-600">$29.99</p>
              </div>

              <div className="rounded-lg bg-white p-4 shadow">
                <Image
                  className="mb-4 h-40 w-full rounded-md object-cover"
                  src="https://fastly.picsum.photos/id/1054/200/200.jpg?hmac=7qtHUdgOyKxMVpcUELySqbknGm7xI76LbA9CE0uag_o"
                  alt="img"
                  width={200}
                  height={200}
                />
                <h3 className="mb-2 text-lg font-semibold">Product 1</h3>
                <p className="text-gray-600">$29.99</p>
              </div>

              <div className="rounded-lg bg-white p-4 shadow">
                <Image
                  className="mb-4 h-40 w-full rounded-md object-cover"
                  src="https://fastly.picsum.photos/id/1054/200/200.jpg?hmac=7qtHUdgOyKxMVpcUELySqbknGm7xI76LbA9CE0uag_o"
                  alt="img"
                  width={200}
                  height={200}
                />
                <h3 className="mb-2 text-lg font-semibold">Product 1</h3>
                <p className="text-gray-600">$29.99</p>
              </div>

              <div className="rounded-lg bg-white p-4 shadow">
                <Image
                  className="mb-4 h-40 w-full rounded-md object-cover"
                  src="https://fastly.picsum.photos/id/1054/200/200.jpg?hmac=7qtHUdgOyKxMVpcUELySqbknGm7xI76LbA9CE0uag_o"
                  alt="img"
                  width={200}
                  height={200}
                />
                <h3 className="mb-2 text-lg font-semibold">Product 1</h3>
                <p className="text-gray-600">$29.99</p>
              </div>
            </div>
            
          </section>
        </div>
      </div>
    </>
  );
}

export default Page2;
