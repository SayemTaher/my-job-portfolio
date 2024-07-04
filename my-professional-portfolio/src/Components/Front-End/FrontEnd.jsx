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
    }
        , [webProject])
    return (
        <Fade triggerOnce cascade damping={0.5}>
            <div className="flex  gap-5 bg-gray-200 flex-col pl-10  pt-10 pb-20">
                <div className="mb-5 lg:text-left flex flex-col lg:items-start  items-center text-center" data-aos="fade-up-right">
                
                <h1 className="lg:text-4xl text-3xl  font-bold  pb-4 ">Front-End Projects</h1>
                

               
                <div className="h-[4px] w-[200px] bg-primaryBlue rounded-full"></div>
                </div>

                <Fade triggerOnce damping={0.5}>
                <div className="flex lg:flex-row justify-center flex-wrap flex-col gap-5 ">
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