// 📁 src/components/Footer.jsx

import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1a2f] text-white py-10 px-6 mt-10 border-t-4 border-yellow-500">
      
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* ABOUT */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-yellow-400">
            🙏 About Temple
          </h3>

          <p className="text-sm text-gray-300 leading-7">
            Sri Devi Bhudevi Sametha Sri Kalyana Venkateswara Swamy VariDevasthanam is a sacred temple
            dedicated to Ganesha, Sita Devi and Lord Shiva, bringing peace,
            devotion and blessings to devotees.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-yellow-400">
            🔗 Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                🏠 Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition duration-300"
              >
                📖 About
              </Link>
            </li>

            <li>
              <Link
                to="/sevas"
                className="hover:text-yellow-400 transition duration-300"
              >
                🪔 Sevas
              </Link>
            </li>

            <li>
              <Link
                to="/gallery"
                className="hover:text-yellow-400 transition duration-300"
              >
                🖼️ Gallery
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition duration-300"
              >
                📞 Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-yellow-400">
            📍 Contact Info
          </h3>

          <div className="space-y-3 text-sm text-gray-300">

            <p className="flex gap-2 items-start">
              <FaMapMarkerAlt className="mt-1 text-yellow-400" />
              Street No. 20, HMT Swarnapuri Colony, Ameenpur, Miyapur, Hyderabad, Telangana 502032
            </p>

            <p className="flex gap-2 items-center">
              <FaPhoneAlt className="text-yellow-400" />
              +91 9876543210
            </p>

            <p className="flex gap-2 items-center">
              <FaEnvelope className="text-yellow-400" />
              temple@email.com
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-5 text-lg">
            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2026 Sri SeetaRamanjaneya Swamy Devastanamu | All Rights Reserved
      </div>
    </footer>
  );
}