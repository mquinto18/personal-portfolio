import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const container = useRef();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(
    () => {
      gsap.to(".logo", { x: 100 });
    },
    { scope: container }
  );

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z-20 ${
        scrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div>
        <div className="container py-4 mx-auto flex items-center justify-between">
          <div className="flex justify-between items-center w-full px-5">
            <div className="text-[2rem] font-Mansalva">
              <a href="" className="logo">
                M
              </a>
            </div>
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
          </div>
          <div className="flex-1 flex justify-center">
            <ul className="list-none sm:flex hidden justify-center items-center gap-10">
              {navLinks.map((navlink) => (
                <Navlinks key={navlink.id} {...navlink} />
              ))}
            </ul>
          </div>
          {toggle && (
            <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-lg">
              <div className="absolute right-5 top-5 hover:bg-gray-200 p-2 cursor-pointer transition duration-300 ease-in-out">
                <HiX
                  className="text-[30px] text-slate-500"
                  onClick={() => setToggle(false)}
                />
              </div>
              <div className="absolute w-full text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-10 p-4 text-center">
                {navLinks.map((navLink) => (
                  <MobileNavLink key={navLink.id} {...navLink} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
