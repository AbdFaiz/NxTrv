"use client";

import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX, LuPlaneTakeoff, LuSearch } from "react-icons/lu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Top Place", href: "#top" },
    { id: 3, name: "Article", href: "#article" },
    { id: 4, name: "Review", href: "#review" },
    { id: 5, name: "Subscribe", href: "#subscribe" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-7xl flex items-center justify-between mx-auto p-4 bg-zinc-100">
        <div className="">
          <Link href="/" className="group flex items-center gap-3">
            <LuPlaneTakeoff className="size-6 text-orange-400" />
            <span className="font-bold text-md tracking-wide text-slate-800">
              NxTrv
            </span>
          </Link>
        </div>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.href)}
                className="font-bold text-md text-slate-800 hover:text-orange-400 hover:underline transition-all duration-150 cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-4">
          <form action="#" className="flex">
            <input
              type="text"
              className="px-2 py-1 border border-slate-200 w-32 rounded-full rounded-r-none text-md focus:ring-1 focus:ring-orange-400 placeholder:text-sm"
              placeholder="Search.."
            />
            <button
              className="flex items-center justify-center bg-orange-400 px-2 py-1 rounded-full rounded-l-none hover:bg-orange-500 cursor-pointer transition-all duration-200"
              type="submit"
            >
              <LuSearch className="size-4 text-slate-100" />
            </button>
          </form>
          <button className="bg-slate-800 text-slate-100 px-8  py-2 rounded-full text-sm hover:bg-slate-900 cursor-pointer transition-all duration-200">
            Sign In
          </button>
        </div>
        {/* Mobile Search and Menu */}
        <div className="flex md:hidden items-center gap-2">
          <form action="#" className="flex">
            <input
              type="text"
              className="px-2 py-1 border border-slate-200 w-32 rounded-full rounded-r-none text-sm focus:ring-1 focus:ring-orange-400 placeholder:text-sm"
              placeholder="Search.."
            />
            <button
              className="flex items-center justify-center bg-orange-400 px-2 py-1 rounded-full rounded-l-none"
              type="submit"
            >
              <LuSearch className="size-4 text-slate-100" />
            </button>
          </form>
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-800 hover:text-orange-400"
          >
            {open ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="flex md:hidden flex-col gap-4 px-4 pb-6 pt-2 rounded-b-xl shadow-md bg-zinc-100">
          <ul className="flex md:hidden flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="font-bold text-sm text-slate-800 hover:text-orange-400 hover:underline transition-all duration-150 cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <button className="bg-slate-800 text-slate-100 px-8 mt-4 py-2 rounded-full text-sm hover:bg-slate-900 cursor-pointer transition-all duration-200">
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
