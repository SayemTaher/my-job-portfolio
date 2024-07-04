import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
      <footer className="footer flex flex-col pb-10  justify-center items-center ">
        <div className="grid  lg:grid-cols-3 lg:pl-40 pl-5 gap-10 justify-center  container mx-auto  grid-cols-2   p-10  w-full">
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Projects</h6>
            <a className="link link-hover">Web Application</a>
            <a className="link link-hover">Mobile Application</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Work & Experience</h6>
            <a className="link link-hover">Hospitality</a>
            <Link to='/about' className="link link-hover">Explore Me</Link>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Certificates</h6>
            <a className="link link-hover">Professional</a>
          </nav>
        </div>
        <div className="w-[800px] flex flex-col justify-center items-center border-dashed   border-t-2 border-gray-300 ">
          <div className="pt-5 text-center flex lg:flexrow flex-col gap-2 flex-wrap">
            <p className="text-center">&copy;2024 - All rights reserved </p>
            <span className="font-bold">Designed & Developed by Sayem </span>
          </div>
          <div className="flex lg:hidden pt-4 gap-4">
            <Link to="https://www.linkedin.com/in/sayem-ibne-taher/">
              <button className="btn btn-ghost btn-circle">
                <BsLinkedin className="text-2xl"></BsLinkedin>
              </button>
            </Link>
            <Link to="https://github.com/SayemTaher">
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FaGithub className="text-2xl"></FaGithub>
                  <span className="badge badge-xs bg-green-400 indicator-item"></span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </footer>
    );
};

export default Footer;