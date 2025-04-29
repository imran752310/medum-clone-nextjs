// 'use client';
// import { useState } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdClose } from 'react-icons/io';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="w-full bg-white shadow">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Logo and Desktop Menu */}
//         <div className="flex items-center justify-between w-full">
//           <div className="flex items-center space-x-4">
//             <Link href="/">
//               <Image
//                 className="cursor-pointer"
//                 src="/image/logo.png"
//                 alt="Logo"
//                 width={150}
//                 height={30}
//               />
//             </Link>
//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-6 ml-6">
//               <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
//               <Link href="#" className="text-gray-700 hover:text-green-600">Our Story</Link>
//               <Link href="#" className="text-gray-700 hover:text-green-600">Membership</Link>
//               <Link href="#" className="text-gray-700 hover:text-green-600">Write</Link>
//               <span className="text-white text-sm bg-green-600 px-4 py-1 rounded-full hover:bg-green-800 cursor-pointer">
//                 Follow
//               </span>
//             </div>
//           </div>

//           {/* Desktop Right Side Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <span className="text-sm px-4 py-1 rounded-full border border-green-600 text-green-600 hover:bg-green-50 cursor-pointer">
//               Sign In
//             </span>
//             <span className="text-sm px-4 py-1 rounded-full border border-green-600 text-green-600 hover:bg-green-700 hover:text-white cursor-pointer">
//               Get Started
//             </span>
//           </div>

//           {/* Mobile Toggle Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-green-600"
//           >
//             {isOpen ? <IoMdClose  size={24} /> : <RxHamburgerMenu  size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden px-6 pb-4 space-y-4">
//           <Link href="/" className="block text-gray-700 hover:text-green-600">Home</Link>
//           <Link href="#" className="block text-gray-700 hover:text-green-600">Our Story</Link>
//           <Link href="#" className="block text-gray-700 hover:text-green-600">Membership</Link>
//           <Link href="#" className="block text-gray-700 hover:text-green-600">Write</Link>
//           <span className="block text-white bg-green-600 px-4 py-1 rounded-full w-fit">
//             Follow
//           </span>
//           <div className="flex flex-col gap-2 pt-2">
//             <span className="text-sm px-4 py-1 rounded-full border border-green-600 text-green-600 text-center cursor-pointer">
//               Sign In
//             </span>
//             <span className="text-sm px-4 py-1 rounded-full border border-green-600 text-green-600 hover:bg-green-700 hover:text-white text-center cursor-pointer">
//               Get Started
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto">
        {/* Logo and Links */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Image
            className="cursor-pointer"
            src="/image/logo.png"
            alt="Logo"
            width={150}
            height={24}
            sizes="(max-width: 640px) 120px, 150px"
          />
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
            <Link className="cursor-pointer text-sm lg:text-base hover:text-green-600" href={"/"}>
              Home
            </Link>
            <Link className="cursor-pointer text-sm lg:text-base hover:text-green-600" href={"#"}>
              Our Story
            </Link>
            <Link className="cursor-pointer text-sm lg:text-base hover:text-green-600" href={"#"}>
              MemberShip
            </Link>
            <Link className="cursor-pointer text-sm lg:text-base hover:text-green-600" href={"#"}>
              Write
            </Link>
            <button className="text-white text-sm bg-green-600 px-3 py-1 rounded-full hover:bg-green-800">
              Follow
            </button>
          </div>
        </div>

        {/* Sign In / Get Started (Desktop) */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <button className="text-green-600 text-sm lg:text-base hover:border-green-600 border px-3 py-1 rounded-full">
            Sign In
          </button>
          <button className="text-green-600 text-sm lg:text-base border border-green-600 px-3 py-1 rounded-full hover:bg-green-700 hover:text-white">
            Get Started
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile/Tablet) */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white border-t border-gray-200`}
      >
        <nav className="flex flex-col space-y-2 px-4 py-4">
          <Link
            className="text-sm hover:text-green-600"
            href={"/"}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            className="text-sm hover:text-green-600"
            href={"#"}
            onClick={toggleMenu}
          >
            Our Story
          </Link>
          <Link
            className="text-sm hover:text-green-600"
            href={"#"}
            onClick={toggleMenu}
          >
            MemberShip
          </Link>
          <Link
            className="text-sm hover:text-green-600"
            href={"#"}
            onClick={toggleMenu}
          >
            Write
          </Link>
          <button
            className="text-white text-sm bg-green-600 px-3 py-1 rounded-full hover:bg-green-800 text-left"
            onClick={toggleMenu}
          >
            Follow
          </button>
          <button
            className="text-green-600 text-sm hover:border-green-600 border px-3 py-1 rounded-full text-left"
            onClick={toggleMenu}
          >
            Sign In
          </button>
          <button
            className="text-green-600 text-sm border border-green-600 px-3 py-1 rounded-full hover:bg-green-700 hover:text-white text-left"
            onClick={toggleMenu}
          >
            Get Started
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;