// import { useEffect, useState } from "react";
// import Loader from "../Loader/Loader";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import OverView from "../Project Overview/OverView";
// import ScrollParalax from "../ScrollParallax/ScrollParalax";


const Home = () => {




    return (



        <div>
            <Helmet>
                <title>Portfolio | Home</title>
            </Helmet>
            <Fade triggerOnce={true}>
                <Hero></Hero>
                
            </Fade>

            <Fade>
                <OverView></OverView>
            </Fade>
           

        </div>

    )
};

export default Home;