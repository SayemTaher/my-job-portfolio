

const Footer = () => {
    return (
        <footer className="footer flex justify-center gap-40 p-10 bg-base-200 w-full text-base-content">
            <nav>
                <h6 className="footer-title">Projects</h6>
                <a className="link link-hover">Web Application</a>
                <a className="link link-hover">Mobile Application</a>
                
            </nav>
            <nav>
                <h6 className="footer-title">Work & Experience</h6>
                <a className="link link-hover">Hospitality</a>
                
            </nav>
            <nav>
                <h6 className="footer-title">Certificates</h6>
                <a className="link link-hover">Academic</a>
                <a className="link link-hover">Extra Curricular Activities</a>
                <a className="link link-hover">Professional</a>
            </nav>
            <form>
                <h6 className="footer-title">Get in touch</h6>
                <textarea className="textarea textarea-bordered" placeholder="Your texts goes here"></textarea>
                <fieldset className="form-control w-80">
                    <div className="join">
                        
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Send</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;