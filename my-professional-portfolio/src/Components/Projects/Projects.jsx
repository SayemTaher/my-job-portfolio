
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
import { Helmet } from "react-helmet-async";
import { Typewriter } from 'react-simple-typewriter';
import 'animate.css';

const Projects = () => {
    const handleType = (count) => {
        console.log(count); // This logs the current word count
    };

    const handleDone = () => {
        console.log(`Done typing!`);
    };
    
    return (
        <Fade triggerOnce damping={0.3} cascade>
            <div className="mx-auto flex flex-col  container ">
            <Helmet>
                    <title>Portfolio | Front-End</title>
                </Helmet>
            
                <div className="flex lg:flex-row flex-col gap-5 items-center p-4 justify-center   min-h-screen" data-aos="fade-up">
                    <div data-aos="fade-up-right"  >
                        <img className="lg:h-[400px] h-[400px] object-contain  lg:object-cover w-[400px] animate__animated animate__backInDown rounded-xl  lg:w-[600px]" src="https://i.ibb.co/GcnKFbr/deviceframes-2.png" alt="img" />
                    </div>
                    
                        <div className="flex flex-col gap-2 justify-center items-center text-center lg:text-left" data-aos="fade-in">
                            
                                <div data-aos="fade-in-right" className=" flex flex-col items-center justify-center gap-5 pb-5">
                                    <h1 className=" lg:text-5xl text-4xl max-w-[300px] animate__animated animate__backInDown font-bold">
                                    <Typewriter
                            words={["MERN-Stack Development", "Front-End Development",]}
                            loop={1}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                                    </h1>
                                    <div className="h-[4px] rounded-full w-[300px] bg-primaryBlue"></div>
                                </div>
                            
                                <div className="lg:max-w-[600px] max-w-[360px]">
                                    <p className="text-gray-500 text-xs">For the past two years, Ive been dedicated to my growth as a web developer. <b> I have completed 15+ projects using JS, React, React Router,MongoDB, Node.Js, Express.Js and Firebase authentication, while gaining proficiency in HTML, CSS, and Tailwind </b>. I am currently building modern websites with Node.js and MongoDB.  My ultimate goal is to become a skilled Full Stack Developer who creates impactful products.</p>
                                </div>
                            
                            
                                <div className="flex gap-5 items-center justify-center flex-wrap pt-10 lg:text-2xl text-lg">
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
                                
                           



                        </div>
                    
                </div>
            


            </div>
            <div>
                <FrontEnd></FrontEnd>
            </div>
        </Fade>


    );
};

export default Projects;