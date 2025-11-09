import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
      <footer className="footer flex flex-col pb-10 justify-center items-center bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 border-t border-blue-500/20">
        <div className="grid lg:grid-cols-3 lg:pl-40 pl-5 gap-10 justify-center container mx-auto grid-cols-2 p-10 w-full">
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title text-white">Projects</h6>
            <a className="link link-hover text-blue-200 hover:text-cyan-400">Web Application</a>
            <a className="link link-hover text-blue-200 hover:text-cyan-400">Mobile Application</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title text-white">Work & Education</h6>
            <Link to='/work' className="link link-hover text-blue-200 hover:text-cyan-400">Experience</Link>
            <Link to="/about" className="link link-hover text-blue-200 hover:text-cyan-400">
              Explore Me
            </Link>
            <Link to="/about" className="link link-hover text-blue-200 hover:text-cyan-400">
              Education
            </Link>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title text-white">Certificates</h6>
            <Link to='/certificates' className="link link-hover text-blue-200 hover:text-cyan-400">Professional</Link>
          </nav>
        </div>
        <div className="w-[800px] flex flex-col justify-center items-center border-dashed border-t-2 border-blue-500/30">
          <div className="pt-5 text-center flex lg:flex-row flex-col gap-2 flex-wrap">
            <p className="text-center text-blue-200">&copy;2024 - All rights reserved </p>
            <span className="font-bold text-white">Designed & Developed by Sayem </span>
          </div>
          <div className="flex lg:hidden pt-4 gap-4">
            <Link to="https://www.linkedin.com/in/sayem-ibne-taher/">
              <button className="btn btn-ghost btn-circle text-white hover:bg-blue-500/20">
                <BsLinkedin className="text-2xl"></BsLinkedin>
              </button>
            </Link>
            <Link to="https://github.com/SayemTaher">
              <button className="btn btn-ghost btn-circle text-white hover:bg-blue-500/20">
                <div className="indicator">
                  <FaGithub className="text-2xl"></FaGithub>
                  <span className="badge badge-xs bg-blue-500 indicator-item"></span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
