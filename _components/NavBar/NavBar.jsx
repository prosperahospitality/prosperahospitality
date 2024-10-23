"use client";
import IMAGES from "@/public";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook
import React, { useState } from "react";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname(); // Get the current path

  const handleMouseEnter = (index) => setActiveDropdown(index);
  const handleMouseLeave = () => setActiveDropdown(null);

  const isLinkActive = (link) => {
    if (link.sublinks) {
      return link.sublinks.some((sublink) => pathname === sublink.url);
    }
    return pathname === link.url;
  };

  return (
    <div className="bg-white">
      <div className="py-4 w-[90%] lg:w-[80%] mx-auto flex justify-between items-center">
        <Link href="/" className="flex justify-center items-center gap-5">
          <img
            src={IMAGES.mainLogo}
            alt="prospera-logo"
            fill
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-[#800000] font-semibold leading-tight">
              Prospera
            </span>
            <span className="font-semibold text-gray-400 leading-tight">
              Hospitality
            </span>
          </div>
        </Link>

        {/* links  */}
        <div className="space-x-4 hidden lg:flex">
          {links.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Regular Links */}
              <Link
                href={link.url || "#"}
                className={`p-2 ${isLinkActive(link) ? "text-black font-bold" : "text-gray-500 font-semibold hover:text-black"
                  }`}
              >
                {link.name}
              </Link>

              {/* Dropdown Logic */}
              {link.sublinks && activeDropdown === index && (
                <div className="absolute left-0 top-full mt-1 bg-white shadow-lg p-2">
                  {link.sublinks.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sublink.url}
                      className={`block p-2  ${pathname === sublink.url ? "text-black font-bold" : "text-gray-500 font-semibold hover:text-black"
                        }`}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>



        <Link href="/contactus" className="hidden lg:flex">
          <Button
            radius="full"
            className="bg-[#800000] text-white font-semibold px-4 tracking-wider "
          >
            Let’s Get Started!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

const links = [
  {
    name: "Our Services",
    sublinks: [
      { name: "Web Development", url: "/services/web-development" },
      { name: "Digital Marketing", url: "/services/digital-marketing" },
      { name: "Revenue Management", url: "/services/revenue-management  " },
    ],
  },
  { name: "Pricing", url: "/prices" },
  { name: "Testimonials", url: "/testimonials" },
  { name: "Blogs", url: "/blogs" },
];

