import React from "react";
import { toolIcons } from "../../Data";

const Expertise = () => {
  return (
    <div className="section" id="expertise">
      <div className="pt-[-20]">
        <h1 className="font-bold text-center text-[20px] md:text-[30px] lg:text-[28px] font-Anton tracking-[2px]">
          EXPERTISE
        </h1>
        <div className="mt-10 font-Roboto font-bold">
          <div className="py-2 xl:py-5 hover-text cursor-pointer px-2 xl:px-5 border-t border-b">
            <h1
              data-aos="zoom-in"
              className="font-bold text-[20px] xl:text-[50px] md:text-[50px]"
            >
              ENGAGING LANDING PAGE WEBSITES
            </h1>
          </div>
          <div className="py-2 xl:py-5 hover-text cursor-pointer px-2 xl:px-5 border-b">
            <h1
              data-aos="zoom-in"
              className="font-bold text-[20px] xl:text-[50px] md:text-[50px]"
            >
              EYE-CATCHING WEB DESIGN
            </h1>
          </div>
          <div className="py-2 xl:py-5 hover-text cursor-pointer px-2 xl:px-5 border-b">
            <h1
              data-aos="zoom-in"
              className="font-bold text-[20px] xl:text-[50px] md:text-[50px]"
            >
              INTUITIVE UI DESIGNS
            </h1>
          </div>
          <div className="py-2 xl:py-5 hover-text cursor-pointer px-2 xl:px-5 border-b">
            <h1
              data-aos="zoom-in"
              className="font-bold text-[20px] xl:text-[50px] md:text-[50px]"
            >
              RESPONSIVE WEBSITES
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="font-bold text-center text-[20px] md:text-[30px] lg:text-[28px] font-Anton tracking-[2px]">
          My Toolkit
        </h1>

        <div className="mt-10">
          <div className="xs:grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid grid-cols-3">
            {toolIcons.map((icon) => (
              <div
                key={icon.id}
                className="flex justify-center items-center py-10 border border-slate-300 hover:border-blue-600 hover:border-[2px]"
              >
                <img
                  src={icon.icon}
                  alt=""
                  className="md:w-24 md:h-24 w-16 h-16 object-contain "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
