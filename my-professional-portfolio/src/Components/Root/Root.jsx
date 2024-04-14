import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
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

const Root = () => {

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() =>{
        const fakeLoader = () =>{
            setTimeout(() =>{
                setIsLoading(false)
            },2000)
        }

        fakeLoader()

    },[])



    return isLoading? (
        <Loader></Loader>
    ) : (
        
        <div>
            <div className="mx-auto container  scroll-smooth ">
            <Header></Header>
            <div className="  z-10 font-mulish ">
                
                <Outlet></Outlet>
            </div>

            
        </div>
        <Footer></Footer>
        </div>
    )
};

export default Root;