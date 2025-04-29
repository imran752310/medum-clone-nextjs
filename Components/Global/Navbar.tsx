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
    <div className="w-full px-4 sm:px-6 lg:px-8 border-b">
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
            <Link className="cursor-pointer text-sm  hover:text-green-600" href={"/"}>
              Home
            </Link>
            <Link className="cursor-pointer text-sm  hover:text-green-600" href={"#"}>
              Our Story
            </Link>
            <Link className="cursor-pointer text-sm  hover:text-green-600" href={"Blog/"}>
             Blogs
            </Link>
            <Link className="cursor-pointer text-sm  hover:text-green-600" href={"#"}>
              Write
            </Link>
            <button className="text-white text-sm bg-green-600 px-3 py-1 rounded-full hover:bg-green-800">
              Follow
            </button>
          </div>
        </div>

        {/* Sign In / Get Started (Desktop) */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <button className="text-green-600 text-sm  hover:border-green-600 border px-3 py-1 rounded-full">
            Sign In
          </button>
          <button className="text-green-600 text-sm border border-green-600 px-3 py-1 rounded-full hover:bg-green-700 hover:text-white">
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