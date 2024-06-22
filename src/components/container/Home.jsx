import React, { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import gsap from "gsap";
import SplitType from "split-type";
const Home = () => {
  const homeRef = useRef(null);
  const textRef = useRef(null);
  AOS.init();

  useEffect(() => {
    const home = homeRef.current;
    const mytext = new SplitType(textRef.current); // Corrected line
    // Initial fade-in animation
    gsap.fromTo(
      home,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);
  return (
    <div className="py-[38px]" id="home">
      <div className="mt-10 text-center border-b border-dashed  border-gray-400 py-12">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:flex md:justify-center md:items-center md:gap-2 md:flex-row flex flex-col justify-center items-center gap-2"
        >
          <h1 className="font-Roboto">Kindly message me here</h1>
          <a href="">
            <button className="flex items-center space-x-2 border rounded-full py-1 px-4 hover:arrow-move">
              <span className="text-[12px] font-bold font-Roboto">
                My Contacts
              </span>
              <MdOutlineKeyboardArrowRight className="arrow-icon transition-transform duration-300 ease-in-out" />
            </button>
          </a>
        </div>
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-10">
            <h1
              ref={textRef}
              className="text-name text-[32px] tracking-[2px] font-Anton leading-[40px] sm:leading-[48px] md:text-[85px] md:leading-[88px] lg:text-[72px] lg:leading-[80px] xl:text-[80px] xl:leading-[80px] font-bold mt-5"
            >
              <span className="text-[#FF4747] ">Frontend developer</span> and
              web designer
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-base font-Roboto sm:text-lg md:text-xl lg:text-2xl max-w-[600px] w-full mx-auto">
              A student developer offering commissioned services and providing
              project assistance to students.
            </p>
            <div className="flex items-center justify-center pt-5 gap-2">
              <a href="">
                <button className="flex font-Roboto items-center bg-[#FF4747] text-white font-medium rounded-full py-2 px-4">
                  <span>Linkedin</span>
                  <GoArrowUpRight />
                </button>
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1ZFsUaQ0Fs6gvmxfpVy3rs7VQ_J34kIuF/view?usp=sharing"
              >
                <button className="flex font-Roboto items-center border rounded-full font-medium py-2 px-4">
                  <span>Resume</span>
                  <GoArrowUpRight />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
