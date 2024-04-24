import { NavLink, Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./header.css"


const Header = () => {




    const links =

        <div className='flex flex-col gap-3 p-3 w-[600px] font-bold   ' id='navigation'>


            <NavLink to='/' className=" p-1 "><li >Home</li></NavLink>
            <NavLink to='/projects' className="p-1 "><li>Front-End</li></NavLink>
            <NavLink to='/mobile' className="p-1 "><li>App Development</li></NavLink>
            <NavLink to='/education' className=" p-1 "><li>Education</li></NavLink>
            <NavLink to='/work' className="p-1 "><li>Work</li></NavLink>
            <NavLink to='/certificates' className=" p-1 "><li>Certificates</li></NavLink>


        </div>

    return (

        <div className="navbar container mx-auto bg-base-100 fixed  z-10 font-mulish">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">Sayem Ibne Taher</a>
            </div>
            <div className="navbar-end">
                <Link to='https://www.linkedin.com/in/sayem-ibne-taher/' className="lg:flex hidden">
                <button className="btn btn-ghost btn-circle">
                    <BsLinkedin className="text-2xl"></BsLinkedin>
                </button>
                </Link>
                <Link to='https://github.com/SayemTaher' className="lg:flex hidden">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FaGithub className="text-2xl"></FaGithub>
                        <span className="badge badge-xs bg-green-400 indicator-item"></span>
                    </div>
                </button>
                </Link>
                <Link to='https://drive.google.com/file/d/1DrXQvwhqnSTdvYvzmelxlBMvZOqDn82o/view?usp=share_link' className="bg-darknavy hover:bg-primaryGreen flex gap-2 items-center text-white p-2 rounded-full w-[150px] text-center">
                <MdOutlineFileDownload className="text-lg"></MdOutlineFileDownload> 
                    <button >
                        Download CV
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;