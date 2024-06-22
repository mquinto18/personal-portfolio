import React from "react";

function Contact() {
  return (
    <div className="section" id="contact">
      <div>
        <h1 className="font-bold text-center text-[20px] md:text-[30px] lg:text-[28px] font-Anton tracking-[2px] mb-14">
          MY CONTACT
        </h1>
        <div className="md:flex md:flex-row flex flex-col lg:flex-row justify-center items-center gap-20">
          <div className="shadow-lg rounded-[20px] p-10 w-[300px] md:w-[400px]">
            <div>
              <h1 className="font-medium font-Roboto text-[25px]">
                Get in touch
              </h1>
              <div className="mt-16">
                <form action="">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="font-medium w-full bg-transparent border-b border-slate-300 py-2 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="font-medium w-full bg-transparent border-b border-slate-300 py-2 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="font-medium w-full bg-transparent border-b border-slate-300 py-2 focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 px-4 py-3 bg-[#FF4747] rounded w-full text-white font-Roboto font-medium"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-[20px] w-[300px] md:w-[350px] py-10 bg-[#FF4747] text-white animate-float">
            <div className="border-b border-slate-200">
              <div className="px-10 py-5">
                <h1 className="font-Anton text-[40px] md:text-[65px]">
                  Thank You.
                </h1>
                <form action=""></form>
              </div>
            </div>
            <div className="px-10 py-5 w-full md:w-[200px]">
              <h1 className="font-Roboto text-[16px] md:text-[20px]">
                Always keep in touch
              </h1>
            </div>
            <div className="flex justify-end gap-2 px-5">
              <div className="h-[15px] w-[15px] rounded-full bg-white"></div>
              <div className="h-[15px] w-[15px] rounded-full bg-white"></div>
              <div className="h-[15px] w-[15px] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
