/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import { FaGlobeAfrica } from "react-icons/fa";
import { Link } from "react-router-dom";

const FrontEndProject = ({ project }) => {

    const { id, title, description, image, technology, type, website_link } = project
    return (
        <Fade cascade damping={0.5}>
            <div className="flex  mockup-window lg:flex-row bg-gray-100 shadow-md gap-10 rounded-xl  w-[1170px]">
                <div className="mt-10 mb-10 flex gap-5" data-aos="fade-up">
                <Fade>
                    <div>
                        <img className="h-[400px] object-cover w-[600px] rounded-2xl " src={image} alt={`img of ${id}`} />
                    </div></Fade>
                <Fade>
                    <div className="flex flex-col gap-5">
                        <Fade>
                            <div>
                                <h1 className="text-2xl pb-5 font-bold">{title} <sup className="bg-primaryBlue text-sm text-white p-2 text-center rounded-full">{type}</sup></h1>
                                <div className="flex gap-2  flex-wrap text-center  items-center">
                                    {
                                        technology.map((techno, idx) => <span className="bg-primaryGreen text-white p-1 text-center w-[120px]  rounded-full" key={idx}>{techno}</span>)
                                    }
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <p className="text-gray-500 max-w-[450px]">{description}</p>
                        </Fade>
                        <Fade>
                            <div className="btn hover:bg-primaryBlue flex  gap-2  bg-darknavy w-[150px] text-white justify-center items-center rounded-full">
                                <FaGlobeAfrica></FaGlobeAfrica>
                                <Link to={website_link}><button>Visit Now</button></Link>
                            </div>
                        </Fade>
                    </div>
                </Fade>
                </div>



            </div>
        </Fade>
    );
};

export default FrontEndProject;