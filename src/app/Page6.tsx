import { useState } from 'react';
import Image from 'next/image';

function Page6() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>

      <div id="modal" className='fixed inset-0 bg-black/50 flex items-center justify-center z-10 hidden'>
        <div className='bg-white rounded-lg shadow-xl max-w-md w-full p-6'>
          <h2 className='text-2xl font-bold mb-4'>Modal Title</h2>
          <p className='mb-6'>This is the content of the modal.</p>
          <div className='flex justify-end'>
            <button
              className='bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600'
              onClick={() => {/* Add save logic here */}}
            >
              Save Changes
            </button>
            <button
              className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400'
              onClick={() => {/* Add close logic here */}}
            >
              Close
            </button>
          </div>
        </div>
      </div>

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

      <div className="container mx-auto flex justify-between">
        <div className="bg-pink-500">01</div>
        <div className="bg-pink-500">01</div>
        <div className="bg-pink-500">01</div>
      </div>
      <div className="container mx-auto flex justify-between">
        <div className="bg-pink-500">01</div>

        <div className="bg-pink-500">01</div>
      </div>

      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="#" className="text-xl font-bold text-gray-800">
            MyBrand
          </a>

          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            id="menu-toggle"
            className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none lg:hidden"
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
          <nav
            id="nav-menu"
            className={`${showMenu ? '' : 'hidden'} space-x-8 lg:flex`}
          >
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className="group relative">
        <button className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none">
          Products
        </button>
        <div className="pointer-events-none invisible absolute top-full left-0 w-40 translate-y-2 rounded-md bg-white opacity-0 shadow-lg ring-1 ring-black/5 transition-all duration-150 ease-out group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Product A
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Product B
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Product C
          </a>
        </div>
      </div>

      <div className='max-w-9/12 shadow-md hover:shadow-lg transition-shadow'>00220022</div>
    </>
  );
}

export default Page6;
