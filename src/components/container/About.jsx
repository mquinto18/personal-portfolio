import React from "react";
import myImage from "../../assets/meimage.jpg";
import uiUx from "../../assets/vector.png";
import webDev from "../../assets/coding.png";
import Graphib from "../../assets/browser.png";
import AOS from "aos";

import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const About = () => {
  AOS.init();
  return (
    <div className="section" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full md:w-1/2 mb-12"
        >
          <h1 className="font-bold font-Anton tracking-[2px] text-[20px] md:text-[30px] lg:text-[28px]">
            About Me
          </h1>
          <div className="mt-4 space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl font-Roboto">
            <p>
              Hi there! I'm Matthew Quinto, a passionate student developer and
              designer. I specialize in web development and design, focusing on
              creating intuitive and visually appealing websites. My mission is
              to help fellow students with their web development projects by
              offering my expertise in both design and coding.
            </p>
            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://www.instagram.com/matchu_q/?hl=en"
              >
                <FaInstagramSquare className="cursor-pointer text-[25px]" />
              </a>
              <a target="_blank" href="https://x.com/tebulats_">
                <FaSquareXTwitter className="cursor-pointer text-[25px]" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/matthew.quinto.52"
              >
                <FaFacebook className="cursor-pointer text-[25px]" />
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full md:w-auto mt-6 md:mt-0 flex justify-center"
        >
          <img
            src={myImage}
            alt="Me"
            className="rounded-full w-[300px] h-[300px] object-cover"
          />
        </div>
      </div>
      <div className="mt-[6rem]">
        <h1 className="font-bold font-Anton tracking-[2px] text-center text-[20px] md:text-[30px] lg:text-[28px]">
          WHAT I DO
        </h1>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col md:flex-row justify-between items-center py-10 md:gap-5 font-Roboto"
        >
          <div className="text-center border rounded py-10 shadow-md hover:shadow-lg px-5 mb-5 md:mb-0 md:w-1/3">
            <img
              src={uiUx}
              alt="UI/UX Design"
              className="w-[70px] h-[70px] mx-auto"
            />
            <h1 className="font-bold mt-5 mb-3">UI/UX Design</h1>
            <p className="text-sm text-slate-500">
              I create visually appealing, user-friendly interfaces for websites
              and applications. My work enhances user experience through
              thoughtful and intuitive design elements.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center border rounded py-10 shadow-md hover:shadow-lg px-5 mb-5 md:mb-0 md:w-1/3"
          >
            <img
              src={webDev}
              alt="Web Development"
              className="w-[70px] h-[70px] mx-auto"
            />
            <h1 className="font-bold mt-5 mb-3">Web Development</h1>
            <p className="text-sm text-slate-500">
              I build and maintain websites to be functional, responsive, and
              visually appealing, optimizing for the best user experience
              through coding and design.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center border rounded py-10 shadow-md hover:shadow-lg px-5 md:w-1/3"
          >
            <img
              src={Graphib}
              alt="Graphic Design"
              className="w-[70px] h-[70px] mx-auto"
            />
            <h1 className="font-bold mt-5 mb-3">Graphic Design</h1>
            <p className="text-sm text-slate-500">
              I create visually captivating designs for websites, print, and
              digital media. My work combines creativity and technical skill to
              communicate ideas effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
