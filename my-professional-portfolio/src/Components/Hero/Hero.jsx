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
import 'aos/dist/aos.css'; 

AOS.init({
    // Global settings
    offset: 100, // Adjusts the offset (in pixels) from the top/bottom of the element when the animation starts
    duration: 800, // Duration of the animation (in milliseconds)
    easing: 'ease', // Easing function for the animation
    delay: 0, // Delay before the animation starts (in milliseconds)
    once: false, // Whether the animation should only happen once
    mirror: true, // Whether the animation should be mirrored on scroll up and scroll down
  });

import { Fade } from "react-awesome-reveal";
import './hero.css'
import { useEffect, useState } from "react";

const Hero = () => {
    const [text, setText] = useState('');
    const [i, setI] = useState(0);
    const speed = 10;
    useEffect(() => {
        const fullText = "As a front-end developer, I specialize in HTML, CSS, JavaScript, Tailwind, React, React Router, Firebase, MongoDB, and Node.js. I also have a passion for Swift and SwiftUI, with hands-on experience in both. My portfolio showcases my latest projects, emphasizing my design and development skills.";
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setText(prevText => prevText + fullText.charAt(i));
                setI(prevI => prevI + 1);
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [i]);
    return (
        <div className="flex   justify-between mx-auto container items-center h-[800px] lg:h-[900px] ">
                <div className="flex flex-col gap-5" data-aos="fade-right">
                    <div className="lg:border-l-8 lg:border-darknavy lg:pl-4 ">
                        <div className="flex flex-col lg:text-left text-center ">
                            <h1 className="lg:text-6xl text-4xl  font-bold tracking-wide" id="gradient-text">Sayem Ibne Taher</h1>
                            <span className="mt-4 text- text-xl  text-gray-600">Front-End | UI & UX | iOS</span>
                        </div>

                    </div>
                    <div className=" flex justify-center lg:text-left text-center items-center lg:justify-start lg:items-start">
                        <Fade>
                            <p className="text-sm text-darknavy mt-5 max-w-[350px] lg:max-w-[600px] leading-6" > {text}</p>
                        </Fade>

                    </div>
                    <div className="flex flex-col gap-5 mt-5 justify-center lg:items-start lg:justify-start items-center">
                        <p className="text-xl border-b-2 border-primaryBlue tracking-wide font-bold pb-2 w-[120px]">Expertise In</p>
                        <Fade damping={0.5} cascade>
                            <div className="flex flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start gap-5 text-2xl" id="wavy-animation">

                                <div className="bg-gray-100 rounded-full p-5 tooltip-bottom tooltip" data-tip="HTML5">
                                    <ImHtmlFive className="hover:text-orange-500" />
                                </div>


                                <div className="bg-gray-100 rounded-full p-5 tooltip-bottom tooltip" data-tip="CSS3">
                                    <SiCss3 className="hover:text-blue-500" />
                                </div>


                                <div className="bg-gray-100 rounded-full p-5 tooltip-bottom tooltip" data-tip="JavaScript">
                                    <IoLogoJavascript className="hover:text-yellow-400" />
                                </div>


                                <div className="bg-gray-100 rounded-full p-5 tooltip-bottom tooltip" data-tip="Tailwind">
                                    <SiTailwindcss className="hover:text-blue-500" />
                                </div>


                                <div className="bg-gray-100 rounded-full p-5 tooltip-bottom tooltip" data-tip="React">
                                    <FaReact className="hover:text-blue-300" />
                                </div>


                                <div className="bg-gray-100 rounded-full p-5 tooltip-bottom tooltip" data-tip="Firebase">
                                    <SiFirebase className="hover:text-yellow-500" />
                                </div>


                                <div className="bg-gray-100 rounded-full p-5 tooltip-bottom tooltip" data-tip="Swift">
                                    <SiSwift className="hover:text-orange-400" />
                                </div>


                                <div className="bg-gray-100 rounded-full p-5 tooltip-bottom tooltip" data-tip="MongoDB">
                                    <SiMongodb className="hover:text-green-500" />
                                </div>


                                <div className="bg-gray-100 rounded-full p-5 tooltip-bottom tooltip" data-tip="Node.js">
                                    <FaNodeJs className="hover:text-green-400" />
                                </div>

                            </div>
                        </Fade>
                    </div>
                </div>
                <div data-aos="fade-left " className="hidden lg:flex">

                    <img className="w-[400px]" src="https://i.ibb.co/cbNCW69/4421964-removebg-preview.png" alt="img" />

                </div>
           
        </div>
    );
};

export default Hero;