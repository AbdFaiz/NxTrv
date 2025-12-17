"use client";

import Link from "next/link";
import { LuPlaneTakeoff, LuMail, LuInstagram, LuTwitter } from "react-icons/lu";

const Footer = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Top Place", href: "#top" },
    { name: "Article", href: "#article" },
    { name: "Review", href: "#review" },
    { name: "Subscribe", href: "#subscribe" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zinc-100 border-t border-zinc-200">
      <div className="max-w-screen-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <LuPlaneTakeoff className="size-6 text-orange-400" />
              <span className="font-bold text-lg text-slate-800">NxTrv</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-sm">
              Discover hidden wonders, breathtaking destinations, and unforgettable travel experiences around the world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-600 hover:text-orange-400 transition text-sm cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">
              Connect With Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <a href="#" target="_blank" className="hover:text-orange-400 flex items-center gap-2 transition">
                <LuMail />
                hello@nxtrv.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" target="_blank" className="hover:text-orange-400 transition">
                  <LuInstagram size={18} />
                </a>
                <a href="#" target="_blank" className="hover:text-orange-400 transition">
                  <LuTwitter size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-200 mt-12 pt-6 text-center text-sm text-slate-500">
          © 2025 NxTrv By <a target="_blank" className="text-orange-400 font-bold" href={"https://github.com/AbdFaiz"} >AbdFaiz</a>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
