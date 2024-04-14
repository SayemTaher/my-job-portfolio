import { NavLink, Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./header.css"


const Header = () => {




    const links =

        <div className='flex flex-col gap-3 p-3  ' id='navigation'>


            <NavLink to='/' className=" p-1 w-[50px]"><li >Home</li></NavLink>
            <NavLink to='/projects' className="p-1 w-[50px]"><li>Projects</li></NavLink>
            <NavLink to='/education' className=" p-1 w-[50px]"><li>Education</li></NavLink>
            <NavLink to='/certificates' className=" p-1 w-[50px]"><li>Certificates</li></NavLink>


        </div>

    return (
        <div className=" z-50  fixed w-[300px]   lg:w-[1280px] p-2 bg-white font-mulish  bg-opacity-90">
            <div className="navbar  flex items-center  ">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-4xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primaryBlue text-white rounded-box w-52">
                            {links}

                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <Link to='/'><a className="btn btn-ghost text-sm lg:text-xl">Sayem I Taher</a></Link>
                </div>
                <div className="navbar-end flex gap-3 items-center">
                    <div className="mr-5 hidden  lg:flex gap-5 text-xl items-center">


                        <div className="tooltip tooltip-bottom " data-tip="GitHub">
                            <a href="https://github.com/SayemTaher"><FaGithub ></FaGithub></a>
                        </div>
                        <div className="tooltip tooltip-bottom" data-tip="LinkedIn">
                            <a href="https://www.linkedin.com/in/sayem-ibne-taher-66b1271a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><BsLinkedin></BsLinkedin></a>
                        </div>




                    </div>

                    <div className="flex gap-1 cursor-pointer hover:bg-primaryGreen justify-center text-center lg:w-[150px] w-[180px]  items-center bg-primaryBlue text-white  p-2 rounded-full ">
                        <MdOutlineFileDownload className="lg:text-2xl   text-center"></MdOutlineFileDownload>
                        <a href="https://drive.google.com/file/d/1DrXQvwhqnSTdvYvzmelxlBMvZOqDn82o/view?usp=sharing" download="document.pdf">

                            <button  className=" text-sm">Download CV </button></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;