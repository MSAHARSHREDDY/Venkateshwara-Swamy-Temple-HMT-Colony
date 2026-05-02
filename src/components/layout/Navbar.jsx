import { useState } from "react";
import { Link } from "react-router-dom";
import useTempleData from "../../hooks/useTempleData";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import venkateshwara from "../../assets/venkateswara.jpg";

export default function Navbar() {
  const data = useTempleData();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  if (!data) return null;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 md:px-10 py-3">

        {/* LOGO + TITLE */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={venkateshwara}
            alt="Temple Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-yellow-500 shadow-md"
          />

          <div className="leading-tight">
            <h1 className="text-sm md:text-lg font-bold text-red-900">
              Venkateswara Swamy Temple
            </h1>

            <p className="text-[10px] md:text-xs text-gray-600">
              HMT Colony, Miyapur, Hyderabad
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-semibold items-center">

          {data.navbar.menu.map((item, i) => (
            <li key={i} className="relative group">

              {!item.dropdown && (
                <Link
                  to={item.path}
                  className="hover:text-red-700 transition"
                >
                  {item.name}
                </Link>
              )}

              {item.dropdown && (
                <>
                  <span className="flex items-center gap-1 cursor-pointer hover:text-red-700">
                    {item.name}
                    <FaChevronDown className="text-xs group-hover:rotate-180 transition" />
                  </span>

                  <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.dropdown.map((sub, j) => (
                      <li key={j}>
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 hover:bg-yellow-100"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE ICON */}
        <div className="md:hidden text-xl text-red-900 cursor-pointer">
          {open ? (
            <FaTimes onClick={() => setOpen(false)} />
          ) : (
            <FaBars onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">

          {data.navbar.menu.map((item, i) => (
            <div key={i} className="mb-2">

              {!item.dropdown && (
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block py-2 border-b"
                >
                  {item.name}
                </Link>
              )}

              {item.dropdown && (
                <>
                  <div
                    className="flex justify-between items-center py-2 border-b cursor-pointer"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    {item.name}

                    <FaChevronDown
                      className={`transition ${
                        dropdown ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {dropdown && (
                    <div className="pl-4">
                      {item.dropdown.map((sub, j) => (
                        <Link
                          key={j}
                          to={sub.path}
                          onClick={() => setOpen(false)}
                          className="block py-2"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}