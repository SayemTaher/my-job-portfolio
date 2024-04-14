

const Footer = () => {
    return (
        <footer className="footer flex flex-col pb-10  justify-center items-center bg-gray-100">
            <div className="grid  lg:grid-cols-3 lg:pl-40 pl-5 gap-10 justify-center  container mx-auto  grid-cols-2   p-10  w-full">
            <nav className="flex flex-col gap-2">
                <h6 className="footer-title">Projects</h6>
                <a className="link link-hover">Web Application</a>
                <a className="link link-hover">Mobile Application</a>
                
            </nav>
            <nav className="flex flex-col gap-2">
                <h6 className="footer-title">Work & Experience</h6>
                <a className="link link-hover">Hospitality</a>
                
            </nav>
            <nav className="flex flex-col gap-2">
                <h6 className="footer-title">Certificates</h6>
                <a className="link link-hover">Academic</a>
                <a className="link link-hover">Extra Curricular Activities</a>
                <a className="link link-hover">Professional</a>
            </nav>
            </div>
            <div className="w-[800px] flex justify-center items-center border-dashed   border-t-2 border-gray-300 ">
                <div className="pt-5 text-center flex lg:flexrow flex-col gap-2 flex-wrap">
                <p className="text-center">&copy;2024 - All rights reserved </p>
                <span className="font-bold">Designed & Developed by Sayem </span>

                </div>

                
                    

                

            </div>
            
        </footer>
    );
};

export default Footer;