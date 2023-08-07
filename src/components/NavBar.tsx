"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [mobileNav, setMobileNav] = React.useState(true);

  const handleHam = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <>
      {/* For bigger devices */}
      <nav className=" top-0 w-full flex justify-between h-[71px] mx-w-[1240px] mx-auto px-4 bg-white text-black py-3 text-lg z-10">
  <h1 className="text-3xl font-bold text-[0000] flex items-center">
    Blog
  </h1>
  <div className="nav-list flex justify-center items-center flex-grow">
    <ul className="hidden md:flex justify-center px-4 gap-[4vw] uppercase">
      <Link href="/">
        <li className="cursor-pointer text-[20px] ">
          Home
        </li>
      </Link>
      <Link href="/about">
        <li className="cursor-pointer text-[20px] ">
          About
        </li>
      </Link>
      <Link href="/blogs">
        <li className="cursor-pointer text-[20px] ">
          Blogs
        </li>
      </Link>
      <Link href="/contact">
        <li className="cursor-pointer text-[20px] ">
          Contact
        </li>
      </Link>
    </ul>
  </div>
        {/* for smaller devices */}
        <div onClick={handleHam} className="flex  items-center md:hidden">
          {!mobileNav ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}

          <div
            className={
              !mobileNav
                ? "nav-list fixed left-0 top-[60px] w-[60%] h-full z-0 border-r border-r-purple-900 bg-gray-800  ease-linear duration-300 md:hidden"
                : "fixed left-[-100%]"
            }
          >
            <ul className="  text-white uppercase text-center ">
              <Link href="/">
               
                <li className=" p-4">Home</li>
              </Link>
              <Link href="/about">
                <li className=" p-4">About</li>
              </Link>
              <Link href="/contact">
                <li className=" p-4">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
