// components/Header/Header.tsx
//import Link from 'next/link';

// old code
// const Header = () => {

//   return (
//         <div className="flex flex-col mb-0 min-h-screen">
//         <title>Barbie</title>
//         <link rel="icon" href="/favicon.ico" />

//       <header className="bg-pink-500 text-white p-4 flex justify-between items-center">
//         <img src="images/logo.webp" alt="Barbie Logo" className="h-12 items-start" />
//         <h1 className="text-2xl mr-auto ml-5 font-bold">Barbie <span className ='text-black'>Website</span></h1>

//         <nav className=" text-white">
//         <ul className="flex space-x-3 mr-5  p-4">
//           <li><a href="#" className="hover:underline font-semibold">Home</a></li>
//           <li><a href="#about" className="hover:underline font-semibold">About</a></li>
//           <li><a href="#hero" className="hover:underline font-semibold">Videos</a></li>
//           <li><a href="#contact" className="hover:underline font-semibold">Contact</a></li>
//         </ul>
//       </nav>
//       </header>
//       </div>
 
//   );
// };

// export default Header;

// components/Header/Header.tsx
"use client"; // Add this line to indicate this is a client component
import { useState } from 'react';
 import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-pink-500 text-white p-4 flex justify-between items-center">
      <img src="images/logo.webp" alt="Barbie Logo" className="h-12" />
      <h1 className="text-2xl mr-auto ml-5 font-bold">
        Barbie <span className='text-black'>Website</span>
      </h1>
      
      {/* Hamburger icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Nav Links */}
      <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li><Link href="#" className="hover:underline font-semibold">Home</Link></li>
          <li><Link href="#about" className="hover:underline font-semibold">About</Link></li>
          <li><Link href="#hero" className="hover:underline font-semibold">Videos</Link></li>
          <li><Link href="#contact" className="hover:underline font-semibold">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
