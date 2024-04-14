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
            <div className="flex  gap-5 flex-col mt-10  pt-10 pb-10">
                <div className="mb-5">
                <Fade>
                <h1 className="text-4xl font-bold  pb-4 ">Front-End Projects</h1>
                </Fade>

               
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