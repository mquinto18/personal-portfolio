import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { navLinks } from "../../Data";
import NavFooterLink from "../Navbar/NavFooterLink";

function Footer() {
  return (
    <div className="border-t border-gray shadow-sm py-5 font-Roboto">
      <div className="section flex flex-col-reverse md:flex-row justify-between items-center md:items-start">
        <div className="mb-5 md:mb-0 md:mt-0 mt-6">
          <div className="md:text-[50px] text-[30px] font-Mansalva">M</div>
          <h1 className="font-medium text-center md:text-left text-[15px]">
            @2024 Matthew Quinto. All Rights Reserved
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className=" md:text-left">
            <h1 className="font-medium text-[20px] pb-3">Navigation</h1>
            <div className="flex flex-col gap-2">
              {navLinks
                .filter((navlink) => navlink.link !== "Contact")
                .map((navlink) => (
                  <NavFooterLink key={navlink.id} {...navlink} />
                ))}
            </div>
          </div>
          <div className=" md:text-left">
            <h1 className="font-medium text-[20px] pb-3">Visit</h1>
            <div className="flex flex-col gap-2">
              <a href="" className="flex md:justify-start">
                <span>Linkedin</span>
                <GoArrowUpRight className="ml-2" />
              </a>
              <a
                href="https://drive.google.com/file/d/1ZFsUaQ0Fs6gvmxfpVy3rs7VQ_J34kIuF/view?usp=sharing"
                className="flex md:justify-start"
                target="_blank"
              >
                <span>Resume</span>
                <GoArrowUpRight className="ml-2" />
              </a>
              <a href="https://www.instagram.com/matchu_q/?hl=en">Instagram</a>
              <a href="https://x.com/tebulats_">Twitter</a>
              <a href="https://www.facebook.com/matthew.quinto.52">Facebook</a>
              <a href="https://github.com/mquinto18">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
