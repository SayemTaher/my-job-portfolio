import { useEffect, useState } from "react";
import FrontEndProject from "../FrontEnd-Project/FrontEndProject";
import { Fade } from "react-awesome-reveal";

const FrontEnd = () => {
    
    const [webProject, setWebProject] = useState([])
    useEffect(() => {
        fetch('front-end.json')
            .then(res => res.json())
            .then(data => setWebProject(data))
        console.log(webProject)
    }, [webProject])

    return (
        <Fade triggerOnce cascade damping={0.5}>
            <div className="flex gap-6 sm:gap-8 flex-col pt-10 pb-20">
                <div className="text-center mb-8 sm:mb-12 px-4" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Front-End Projects
                    </h2>
                    <p className="text-base sm:text-xl text-blue-200 max-w-3xl mx-auto">
                        A collection of modern web applications built with cutting-edge technologies
                    </p>
                    
                </div>
                <Fade triggerOnce damping={0.5}>
                    <div className="flex flex-col gap-6 sm:gap-8 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                        {
                            webProject.map(project => <FrontEndProject project={project} key={project.id}></FrontEndProject>)
                        }
                    </div>
                </Fade>
            </div>
        </Fade>
    );
};

export default FrontEnd;
