"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="w-full  items-center flex justify-between px-10 py-5">
      <div className="w-14 h-14 ring-2 ring-offset-2 ring-pink-300 rounded-full">
        <img
          src="man.png"
          className="w-full h-full object-cover object-top rounded-full"
          alt=""
        />
      </div>
      <ul className="hidden md:flex items-center font-semibold  text-slate-500 px-8 py-2 rounded-full shadow-lg space-x-5 border border-slate-100 text-sm">
        <li>
          <Link href={"/"}>All Blog</Link>
        </li>
        <li>
          <Link href={"/copyright"}>Copyright</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>

      <div className="flex space-x-4 md:space-x-0">
        <MobileMenu />
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="transition duration-200 border p-3 rounded-full shadow border-slate-100"
        >
          {darkMode ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
