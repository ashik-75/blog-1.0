import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="border-t border-zinc-100 py-6 px-10 flex flex-col md:flex-row justify-between items-center">
      <div className="space-x-4">
        <Link
          href={"/about"}
          className="hover:text-teal-600 font-semibold text-slate-600"
        >
          About
        </Link>
        <Link
          href={"/about"}
          className="hover:text-teal-600 font-semibold text-slate-600"
        >
          Contact
        </Link>
        <Link
          href={"/about"}
          className="hover:text-teal-600 font-semibold text-slate-600"
        >
          Uses
        </Link>
        <Link
          href={"/about"}
          className="hover:text-teal-600 font-semibold text-slate-600"
        >
          Showcase
        </Link>
      </div>
      <div className="text-slate-500 ">© Ashik rana. All rights reserved.</div>
    </div>
  );
}

export default Footer;
