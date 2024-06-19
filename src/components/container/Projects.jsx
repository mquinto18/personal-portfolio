import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub, FaReact, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../../Data";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [filter]);

  return (
    <div
      className="section"
      id="project"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="text-center">
        <h1 className="font-bold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-Anton tracking-[2px]">
          Creative Work
          <span className="font-Roboto tracking-normal block text-[16px] sm:text-[18px] md:text-[20px] font-normal mt-2 sm:mt-1 md:mt-0">
            Showcase of Personal and Client Projects
          </span>
        </h1>
      </div>

      <div className="md:flex md:mt-16 mt-5 justify-between gap-5">
        <div className="md:flex flex-col md:gap-5 py-5 flex gap-1 font-Roboto">
          <button
            className={`w-[210px] flex items-center space-x-2 border-b rounded-full py-3 px-7 hover:arrow-move hover:bg-red-500 hover:text-white ${
              filter === "all" ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => setFilter("all")}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="text-[16px] font-bold">All Projects</span>
            <MdOutlineKeyboardArrowRight className="arrow-icon transition-transform duration-300 ease-in-out" />
          </button>
          <button
            className={`w-[210px] flex items-center space-x-2 border-b rounded-full py-3 px-7 hover:arrow-move hover:bg-red-500 hover:text-white ${
              filter === "personal" ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => setFilter("personal")}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="text-[16px] font-bold">Personal Projects</span>
            <MdOutlineKeyboardArrowRight className="arrow-icon transition-transform duration-300 ease-in-out" />
          </button>
          <button
            className={`w-[210px] flex items-center space-x-2 border-b rounded-full py-3 px-7 hover:arrow-move hover:bg-red-500 hover:text-white ${
              filter === "client" ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => setFilter("client")}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="text-[16px] font-bold">Client Projects</span>
            <MdOutlineKeyboardArrowRight className="arrow-icon transition-transform duration-300 ease-in-out" />
          </button>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-Roboto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border pb-5 rounded shadow-md hover:shadow-lg mb-5 md:mb-0 overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="overflow-hidden cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-tr-lg rounded-tl-lg w-full h-[220px] object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="px-5">
                <h1 className="font-bold mt-5 mb-3">{project.title}</h1>
                <p className="text-sm text-slate-500">{project.description}</p>
                <div className="flex justify-between text-[20px] pt-5">
                  <div className="flex justify-center items-center gap-2 text-[20px]">
                    <h1 className="text-[15px]">Tools:</h1>
                    {project.type === "personal" ? (
                      <>
                        <FaReact className="text-xl" />
                        <RiTailwindCssFill className="text-xl" />
                      </>
                    ) : project.type === "client" ? (
                      <>
                        <FaPhp className="text-xl" />
                      </>
                    ) : null}
                  </div>
                  <div className="flex gap-3">
                    {project.type === "personal" && (
                      <>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="text-xl" />
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GoLinkExternal className="text-xl" />
                        </a>
                      </>
                    )}
                    {project.type === "client" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
