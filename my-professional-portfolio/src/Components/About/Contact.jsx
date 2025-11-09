import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ld9nbgn",
        "template_yqjnt9l",
        e.target,
        "UTgkc--sYdgfMZfVw"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <section>
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-blue-400">Stay in touch</p>

            <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Let's discuss possibilities
            </h1>

            <p className="mt-3 text-blue-200/80">
              I'd love to hear from you. Please fill out this form or shoot me
              an email.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-5 lg:gap-0 md:grid-cols-2">
              <div>
                <div className="bg-blue-500/20 p-5 w-[65px] rounded-full text-center border border-blue-400/30">
                  <MdEmail className="text-blue-300 text-2xl"></MdEmail>
                </div>
                <h2 className="mt-4 text-base font-medium text-white">
                  Email
                </h2>
                <a href="mailto:sayemtaher788@gmail.com" className="mt-2 text-sm text-blue-400 hover:text-cyan-400">
                  sayemtaher788@gmail.com
                </a>
              </div>

              <div>
                <div className="bg-blue-500/20 p-5 w-[65px] rounded-full text-center border border-blue-400/30">
                  <FaLinkedinIn className="text-blue-300 text-2xl"></FaLinkedinIn>
                </div>
                <h2 className="mt-4 text-base font-medium text-white">
                  LinkedIn
                </h2>

                <Link to="https://www.linkedin.com/in/sayem-ibne-taher/">
                  <p className="mt-2 text-sm text-blue-400 hover:text-cyan-400 underline">
                    Click to connect
                  </p>
                </Link>
              </div>

              <div>
                <div className="bg-blue-500/20 p-5 w-[65px] rounded-full text-center border border-blue-400/30">
                  <FaGithub className="text-blue-300 text-2xl"></FaGithub>
                </div>
                <h2 className="mt-4 text-base font-medium text-white">
                  Github
                </h2>

                <Link to="https://github.com/SayemTaher">
                  <p className="mt-2 text-sm text-blue-400 hover:text-cyan-400 underline">
                    Click to view
                  </p>
                </Link>
              </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm md:p-8 border border-blue-500/20">
              <form onSubmit={sendEmail}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-blue-200">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="block w-full px-5 py-2.5 mt-2 text-white placeholder-blue-300/50 bg-slate-800/60 border border-blue-500/30 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-blue-200">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="block w-full px-5 py-2.5 mt-2 text-white placeholder-blue-300/50 bg-slate-800/60 border border-blue-500/30 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-blue-200">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-white placeholder-blue-300/50 bg-slate-800/60 border border-blue-500/30 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-blue-200">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-white placeholder-blue-300/50 bg-slate-800/60 border border-blue-500/30 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 border border-blue-400/30"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Toaster></Toaster>
    </div>
  );
};

export default Contact;
