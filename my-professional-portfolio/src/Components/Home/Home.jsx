// import { useEffect, useState } from "react";
// import Loader from "../Loader/Loader";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import { Bosch } from "../Project Overview/Bosch";
import { ClientProject } from "../Project Overview/ClientProject";
import PersonalProjects from "../Project Overview/PersonalProjects";

import { ProjectHeadline } from "./ProjectHeadline";
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
        <Fade triggerOnce={true}>
          <ProjectHeadline
            header="Featured Projects"
            info="Showcasing my most impactful work in UX/UI design and Web application
          development"
          ></ProjectHeadline>
        </Fade>
        <Fade>
          <Bosch></Bosch>
        </Fade>
        <Fade triggerOnce={true}>
          <ProjectHeadline
            header="Client Projects"
            info="Showcasing my work for different clients on different impactful projects"
          ></ProjectHeadline>
        </Fade>
        <Fade>
          <ClientProject></ClientProject>
        </Fade>
        <Fade>
          <PersonalProjects></PersonalProjects>
        </Fade>
      </div>
    );
};

export default Home;