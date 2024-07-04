import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiSwift } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";
import { Typewriter } from 'react-simple-typewriter';

AOS.init({
    // Global settings
    offset: 100, // Adjusts the offset (in pixels) from the top/bottom of the element when the animation starts
    duration: 800, // Duration of the animation (in milliseconds)
    easing: 'ease', // Easing function for the animation
    delay: 0, // Delay before the animation starts (in milliseconds)
    once: false, // Whether the animation should only happen once
    mirror: true, // Whether the animation should be mirrored on scroll up and scroll down
});


import './hero.css'


const Hero = () => {
    const handleType = (count) => {
        console.log(count); // This logs the current word count
    };

    const handleDone = () => {
        console.log(`Done typing!`);
    };
    
    
    return (
        <div className="flex mx-auto container justify-center bg-no-repeat bg-cover bg-[url('https://i.ibb.co/4JQ1Lc4/Group-99.png')] min-h-screen    font-mulish" data-aos="fade-up-right">


            <div className="flex flex-col gap-5 mt-20 lg:mt-0 items-center justify-center " data-aos="fade-up-right">
            <div className="pb-2 text-left">
                        <span className=" border-l-4 pl-2 border-darknavy  text-lg lg:text-2xl font-bold text-blue-700 dark:text-white ">Sayem Ibne Taher</span>
                    </div>
                <div data-aos="fade-up">
                    

                    <div>
                    <h1 className="lg:text-6xl pb-4 animate__animated animate__fadeInDown text-3xl font-bold text-darknavy">
                    <Typewriter
                            words={["Front-End Developer","Back-End Developer"]}
                            loop={1}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </h1>
                    </div>

                </div>
                <div>
                    <p className="lg:w-[800px] w-[350px] text-center  lg:text-justify "> As a React Developer, I specialize in HTML, CSS, JavaScript, Tailwind, React, React Router, Firebase, MongoDB, Express.Js and Node.Js. I also have a passion for Swift and SwiftUI, with hands-on experience in both. My portfolio showcases my latest projects, emphasizing my design and development skills.</p>
                </div>
                <div className="  lg:ml-5 w-[150px] flex lg:hidden md:hidden ">
                        <span className=" border-b-4 text-2xl  pb-2 border-gray-500  font-bold  text-darknavy">Expertise In </span>
                    </div>
                <div className="lg:pt-10 pt-5">
                    <div className=" hidden lg:flex  lg:ml-5 w-[150px]  ">
                        <span className="mb-5 border-b-4 text-2xl  pb-2 border-gray-500  font-bold  text-darknavy">Expertise In </span>
                    </div>
                    <div className="mt-5 lg:container lg:mx-auto w-[400px] ">
                        <Marquee speed={100} delay={0} pauseOnHover={true}>
                            <div className="flex gap-10 mt-5 mb-5">
                                <div className="h-[150px] rounded-xl border-2 border-darknavy  backdrop-blur-md ml-10 w-[250px] gap-5 flex  items-center justify-center  ">
                                    <ImHtmlFive className="text-5xl text-primaryBlue"></ImHtmlFive>
                                    <span>HTML</span>

                                </div>
                                <div className="h-[150px]  rounded-xl border-2 border-darknavy  backdrop-blur-md   gap-5 flex items-center justify-center w-[250px]  ">
                                    <SiCss3 className="text-5xl text-orange-500"></SiCss3>
                                    <span>CSS</span>

                                </div>
                                <div className="h-[150px] rounded-xl border-2 border-darknavy  backdrop-blur-md   gap-5 flex items-center justify-center w-[250px]  ">
                                    <SiTailwindcss className="text-5xl text-blue-400"></SiTailwindcss>
                                    <span>Tailwind</span>

                                </div>
                                <div className="h-[150px] rounded-xl border-2 border-darknavy  backdrop-blur-md   gap-5 flex items-center justify-center w-[250px]  ">
                                    <IoLogoJavascript className="text-5xl text-yellow-500"></IoLogoJavascript>
                                    <span>Javascipt</span>

                                </div>
                                <div className="h-[150px] rounded-xl border-2  border-darknavy  backdrop-blur-md   gap-5 flex items-center justify-center w-[250px]  ">
                                    <FaReact className="text-5xl text-blue-500"></FaReact>
                                    <span>React</span>

                                </div>
                                <div className="h-[150px] rounded-xl  border-2 border-darknavy  backdrop-blur-md    gap-5 flex items-center justify-center w-[250px]  ">
                                    <FaNodeJs className="text-5xl text-primaryGreen"></FaNodeJs>
                                    <span>Node.Js</span>

                                </div>
                                <div className="h-[150px] rounded-xl  border-2 border-darknavy   backdrop-blur-md  gap-5 flex items-center justify-center w-[250px]  ">
                                    <SiMongodb className="text-5xl text-green-500"></SiMongodb>
                                    <span>MongoDB</span>

                                </div>
                                <div className="h-[150px] rounded-xl border-2 border-darknavy  backdrop-blur-md   gap-5 flex items-center justify-center w-[250px]  ">
                                    <SiFirebase className="text-5xl text-yellow-400"></SiFirebase>
                                    <span>Firebase</span>

                                </div>
                                <div className="h-[150px] rounded-xl border-2 border-darknavy   backdrop-blur-md  gap-5 flex items-center justify-center w-[250px]  ">
                                    <SiSwift className="text-5xl text-orange-500"></SiSwift>
                                    <span>Swift</span>

                                </div>

                            </div>

                        </Marquee>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Hero;