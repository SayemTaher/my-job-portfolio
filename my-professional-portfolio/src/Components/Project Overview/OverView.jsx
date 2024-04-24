import { FiAirplay } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { GoArrowUpRight } from "react-icons/go";

const OverView = () => {
    return (
        <Fade triggerOnce damping={0.5} cascade>
            <div className="flex flex-col justify-center   mt-10 mb-10">
                

                <div className="flex flex-col gap-2 items-center lg:items-start text-center lg:text-left" data-aos="fade-up-right">
                    <h1 className="text-4xl  pb-2 w-[400px] font-bold">Focused Areas </h1>
                    <div className="w-[250px] rounded-full h-[2px] bg-primaryBlue"></div>
                </div>

                <div className="flex mt-10  flex-col justify-center gap-20" data-aos="fade-up-left">
                    <Fade>
                        <div className="flex flex-col m-5  gap-5 bg-gray-100 p-5 rounded-xl ">
                            <div className="flex justify-between  items-center ">
                                <h1 className=" text-sm lg:text-xl font-bold">Front-End Development <sup className="font-normal  bg-primaryBlue  text-white lg:p-2 p-1 rounded-full">React Based</sup></h1>
                                <FiAirplay className=" text-3xl lg:text-6xl"></FiAirplay>

                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="stat flex flex-col mt-5 lg:mt-0 justify-center shadow-xl w-[250px]  items-center bg-white p-5 rounded-2xl">
                                    <div className="stat-figure text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                    </div>
                                    <div className="stat-title">Projects Completed</div>
                                    <div className="stat-value">15</div>
                                    <div className="stat-desc">↗︎ since Jan 24</div>
                                </div>

                                <div className="lg:flex hidden  pb-10 pt-10">
                                    <ul className="timeline ">
                                        <li>
                                            <div className="timeline-start timeline-box">HTML</div>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-black"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <hr className="bg-primaryGreen" />
                                        </li>
                                        <li>
                                            <hr className="bg-primaryGreen" />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-black"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end timeline-box">CSS</div>
                                            <hr className="bg-primaryGreen" />
                                        </li>
                                        <li>
                                            <hr className="bg-primaryGreen" />
                                            <div className="timeline-start timeline-box">JavaScript</div>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-black"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <hr className="bg-primaryGreen" />
                                        </li>
                                        <li>
                                            <hr className="bg-primaryGreen" />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end timeline-box">Tailwind</div>
                                            <hr className="bg-primaryGreen" />
                                        </li>
                                        <li>
                                            <hr className="bg-primaryGreen" />
                                            <div className="timeline-start timeline-box">React</div>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <hr className="bg-primaryGreen" />
                                        </li>
                                        <li>
                                            <hr className="bg-primaryGreen" />
                                            <div className="timeline-start timeline-box">Firebase</div>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <hr className="bg-primaryGreen" />

                                        </li>
                                        <li>
                                            <hr />
                                            <div className="timeline-start timeline-box">MongoDB</div>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <hr />
                                        </li>
                                        <li>
                                            <hr />
                                            <div className="timeline-start timeline-box">Node.js</div>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="lg:hidden flex justify-center pb-10 pt-10 ">

                                    <ul className="timeline timeline-vertical">
                                        <li>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end timeline-box text-sm">HTML,CSS</div>
                                            <hr className="bg-blue-400"/>
                                        </li>
                                        <li>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end timeline-box text-sm">Tailwind</div>
                                            <hr className="bg-blue-400"/>
                                        </li>
                                        <li>
                                            <hr className="bg-blue-400"/>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end timeline-box text-sm">React</div>
                                            <hr className="bg-blue-400"/>
                                        </li>
                                        <li>
                                            <hr className="bg-blue-400"/>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end timeline-box text-sm">Firebase </div>
                                            <hr className="bg-blue-400"/>
                                        </li>
                                        <li>
                                            <hr />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end timeline-box text-sm">Node.Js</div>
                                            <hr />
                                        </li>
                                        <li>
                                            <hr />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end timeline-box text-sm">MongoDB</div>
                                        </li>
                                    </ul>

                                </div>


                                <div className="flex flex-end mt-5">
                                    <Link to='/projects'><button className="btn bg-darknavy hover:bg-primaryBlue w-[150px] text-white p-2 rounded-full text-center"><GoArrowUpRight></GoArrowUpRight> View Projects  </button></Link>
                                </div>
                            </div>



                        </div>
                    </Fade>

                    
                        <div data-aos="fade-up-right" className=" flex-col m-5  gap-5 bg-gray-100 p-5 rounded-xl ">
                            
                                <div className="flex justify-between  items-center ">
                                    <h1 className="lg:text-xl text-sm font-bold">App Development <sup className="font-normal bg-primaryBlue  text-white p-2 rounded-full">iOS Based</sup></h1>
                                    <FaApple className="lg:text-6xl text-3xl "></FaApple>

                                </div>
                            
                            <div className="flex justify-center flex-col items-center">


                                
                                    <div className="stat shadow-xl flex flex-col justify-center lg:mt-0 mt-10 w-[250px]  items-center bg-white p-5 rounded-2xl">
                                        <div className="stat-figure text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                        </div>
                                        <div className="stat-title">Projects Completed</div>
                                        <div className="stat-value">4</div>
                                        <div className="stat-desc">↗︎ since March 24</div>
                                    </div>
                                
                                
                                    <div className="flex justify-center pb-10 pt-10">
                                        <ul className="timeline">
                                            <li>
                                                <div className="timeline-start timeline-box">Swift</div>
                                                <div className="timeline-middle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-black"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                </div>
                                                <hr className="bg-primaryLightBlue" />
                                            </li>
                                            <li>
                                                <hr className="bg-primaryLightBlue" />
                                                <div className="timeline-middle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-black"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                </div>
                                                <div className="timeline-end timeline-box">SwiftUI</div>
                                                <hr className="bg-primaryLightBlue" />
                                            </li>
                                            <li>
                                                <hr className="bg-primaryLightBlue" />
                                                <div className="timeline-start timeline-box">Firebase </div>
                                                <div className="timeline-middle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-black"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                </div>

                                            </li>



                                        </ul>
                                    </div>
                                
                                    <div className="flex flex-end mt-5">
                                        {/* <Link to='/frontEnd'><button className="btn btn-primary text-white">View Projects</button></Link> */}
                                        <Link to='/mobileProjects'><button className="btn bg-darknavy hover:bg-primaryBlue w-[150px] text-white p-2 rounded-full text-center"><GoArrowUpRight></GoArrowUpRight> View Projects  </button></Link>
                                    </div>
                                
                            </div>




                        </div>
                    





                </div>


            </div>
        </Fade>
    );
};

export default OverView;