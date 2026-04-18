import { useState } from "react";
import { templeConfig } from "../../data/config";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Darshan", path: "/darshan" },
    { name: "Deities", path: "/deities" },
    { name: "Sevas", path: "/sevas" },
    { name: "Donations", path: "/donations" },
    { name: "Trustees", path: "/trustees" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-black border-b-2 border-yellow-500 shadow-xl sticky top-0 z-50">

      {/* 🔥 BIG CONTAINER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 md:py-7">

        {/* 🪔 LOGO + NAME */}
        <div className="flex items-center gap-4">
          <Link  to="/">
          <img
            src={templeConfig.logo}
            alt="logo"
            className="w-14 h-14 md:w-16 md:h-16 object-contain 
                       drop-shadow-[0_0_12px_gold]"
          /></Link>
          

          <h1 className="text-yellow-400 text-xl md:text-3xl font-bold tracking-wide">
            {templeConfig.shortName}
          </h1>
        </div>

        {/* 💻 DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-yellow-400 text-xl font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-white transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 📱 MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-400 text-4xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-yellow-500 px-6 py-5 space-y-5 text-yellow-400 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;