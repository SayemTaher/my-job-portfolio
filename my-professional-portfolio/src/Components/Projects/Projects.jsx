
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import FrontEnd from "../Front-End/FrontEnd";



const Projects = () => {
    
    return (
        <Fade triggerOnce damping={0.3} cascade>
            <div className="mx-auto flex flex-col  container ">
            <Fade>
                <div className="flex items-center justify-between  mt-32">
                    <div data-aos="fade-up">
                        <img className="h-[700px] shadow-2xl object-cover w-[600px]" src="https://i.ibb.co/3p98zHY/kevin-canlas-ia7-T2bj-Db4-unsplash.jpg" alt="img" />
                    </div>
                    <Fade triggerOnce cascade damping={0.5}>
                        <div className="flex flex-col gap-2 justify-center items-center text-left" data-aos="fade-in">
                            <Fade>
                                <div className=" flex flex-col items-center justify-center gap-5 pb-5">
                                    <h1 className=" text-6xl max-w-[300px] font-bold">Front-End Development</h1>
                                    <div className="h-[4px] rounded-full w-[300px] bg-primaryBlue"></div>
                                </div></Fade>
                            <Fade>
                                <div className="max-w-[600px]">
                                    <p className="text-gray-500">For the past two years, Ive been dedicated to my growth as a web developer. <b> I have completed 15+ projects using JS, React, React Router, and Firebase authentication, while gaining proficiency in HTML, CSS, and Tailwind </b>. I am currently building modern websites with Node.js and MongoDB.  My ultimate goal is to become a skilled Full Stack Developer who creates impactful products.</p>
                                </div>
                            </Fade>
                            <Fade cascade damping={0.3}>
                                <div className="flex gap-2 items-center flex-wrap pt-10 text-2xl">
                                    <Fade>
                                        <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                                            <FaNodeJs className="text-green-500"></FaNodeJs>
                                        </div></Fade>
                                    <Fade>
                                        <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                                            <FaReact className="text-blue-400"></FaReact>
                                        </div></Fade>
                                    <Fade>
                                        <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                                            <ImHtmlFive className="text-orange-400"></ImHtmlFive>
                                        </div></Fade>
                                    <Fade>
                                        <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                                            <IoLogoJavascript className="text-yellow-400"></IoLogoJavascript>
                                        </div></Fade>
                                    <Fade>
                                        <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                                            <SiCss3 className="text-blue-600"></SiCss3>
                                        </div></Fade>
                                    <Fade>
                                        <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                                            <SiTailwindcss className="text-blue-400"></SiTailwindcss>
                                        </div></Fade>
                                    <Fade>
                                        <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                                            <SiFirebase className="text-orange-500"></SiFirebase>
                                        </div></Fade>
                                    <Fade>
                                        <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                                            <SiMongodb className="text-green-500"></SiMongodb>
                                        </div></Fade>

                                    










                                </div>
                                
                            </Fade>



                        </div>
                    </Fade>
                </div>
            </Fade>


            </div>
            <div>
                <FrontEnd></FrontEnd>
            </div>
        </Fade>


    );
};

export default Projects;