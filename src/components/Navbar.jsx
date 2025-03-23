"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaSun,
  FaMoon,
  FaChevronDown,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownMenus = {
    home: [
      { title: "Home Digital Studio", path: "/digital-studio" },
      { title: "Home IT Solutions", path: "/it-solutions" },
      { title: "Home Startup Agency", path: "/startup-agency" },
      { title: "Home Creative Team", path: "/creative-team" },
      { title: "Home Horizontal Scroll", path: "/horizontal-scroll" },
      { title: "RTL Version", path: "/rtl" },
    ],
    project: [
      { title: "Projects Listing", path: "/projects" },
      { title: "Project Detail", path: "/project-detail" },
    ],
    services: [
      { title: "Services Listing", path: "/services" },
      { title: "Services Detail", path: "/service-detail" },
    ],
    pages: [
      { title: "News & Blogs", path: "/news" },
      { title: "Careers", path: "/careers" },
      { title: "Faq", path: "/faq" },
      { title: "Pricing Plan", path: "/pricing" },
      { title: "Team Members", path: "/team" },
      { title: "404 Page", path: "/404" },
    ],
  };

  return (
    <nav
      className={`fixed w-full z-50 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="background-overlay bg-gradient-to-r from-pink-600 to-blue-600 text-white py-2 text-center">
        <p className="text-sm">
          Lead Generation And Nurture Initiatives 🔥 Save Upto 80% Off On
          Technology Upgrades
          <button className="ml-4 bg-white/20 px-4 py-1 rounded-full text-xs">
            Learn More
          </button>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.png" alt="ConCho" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {Object.entries(dropdownMenus).map(([key, items]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 px-3 py-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  } hover:text-pink-600`}
                >
                  <span className="capitalize">{key}</span>
                  <FaChevronDown className="h-3 w-3" />
                </button>

                {activeDropdown === key && (
                  <div className="absolute left-0 mt-2 w-56 bg-black rounded-lg shadow-lg py-2">
                    {items.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2 text-sm text-white hover:text-pink-600 hover:bg-gray-900"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className={`${
                darkMode ? "text-white" : "text-gray-900"
              } hover:text-pink-600 px-3 py-2`}
            >
              Contact
            </Link>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>

            <button className=" px-6 py-3 relative overflow-hidden rounded-full bg-pink-500 font-semibold text-white hover:text-white group">
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 transition-transform duration-500 transform -translate-x-full text-white group-hover:translate-x-0"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-r-lg shadow-lg">
        <div className="flex flex-col space-y-4 p-4">
          <a
            href="mailto:info@example.com"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-600"
          >
            <MdEmail size={20} />
          </a>
          <a
            href="https://facebook.com"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-600"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-600"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-600"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://youtube.com"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-600"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
