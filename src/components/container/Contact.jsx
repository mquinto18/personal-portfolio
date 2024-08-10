import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { validateEmail } from "../utils/helper";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!name) {
      setNameError("Please enter your name");
      hasError = true;
    } else {
      setNameError(null);
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      hasError = true;
    } else {
      setEmailError(null);
    }

    if (!message) {
      setMessageError("Please enter a message");
      hasError = true;
    } else {
      setMessageError(null);
    }

    if (hasError) {
      return;
    }

    emailjs
      .sendForm("service_n3sy0iv", "template_kbvyofi", form.current, {
        publicKey: "N5FcEv54j0dPDjbrP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="section" id="contact">
      <ToastContainer />
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
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name" // This should match the variable in your template
                      value={name}
                      className={`font-medium w-full bg-transparent border-b py-2 focus:outline-none ${
                        nameError ? "border-red-500" : "border-slate-300"
                      }`}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && (
                      <p className="text-red-500 text-xs pb-1">{nameError}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email" // This should match the variable in your template
                      value={email}
                      className={`font-medium w-full bg-transparent border-b py-2 focus:outline-none ${
                        emailError ? "border-red-500" : "border-slate-300"
                      }`}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                      <p className="text-red-500 text-xs pb-1">{emailError}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message" // This should match the variable in your template
                      rows="4"
                      value={message}
                      className={`font-medium w-full bg-transparent border py-2 focus:outline-none ${
                        messageError ? "border-red-500" : "border-slate-300"
                      }`}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {messageError && (
                      <p className="text-red-500 text-xs pb-1">
                        {messageError}
                      </p>
                    )}
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
