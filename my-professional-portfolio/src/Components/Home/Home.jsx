import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import UXDevelopment from "../UXDevelopment/UXDevelopment";
import { ClientProject } from "../Project Overview/ClientProject";
import PersonalProjects from "../Project Overview/PersonalProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaPalette, FaRocket, FaChartLine } from "react-icons/fa";
import { Bosch } from "../Project Overview/Bosch";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      icon: <FaCode className="text-5xl" />,
      title: "Web Development",
      description: "Full-stack solutions with modern technologies",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <FaPalette className="text-5xl" />,
      title: "UX/UI Design",
      description: "User-centered design and prototyping",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      icon: <FaRocket className="text-5xl" />,
      title: "Mobile Development",
      description: "iOS and cross-platform applications",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: "Consulting",
      description: "Strategic guidance and optimization",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900">
      <Helmet>
        <title>Portfolio | Home</title>
      </Helmet>

      {/* Hero Section */}
      <Fade triggerOnce={true}>
        <Hero />
      </Fade>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              What I Do
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive digital solutions from concept to deployment
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/20 border border-white/10`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-white mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-100 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UX/UI Development Section */}
      <Fade triggerOnce={true}>
        <Bosch></Bosch>
      </Fade>

      {/* Client Projects Section */}
      <Fade triggerOnce={true}>
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-navy-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Client Projects
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Showcasing impactful work for different clients
              </p>
            </div>
            <ClientProject />
          </div>
        </section>
      </Fade>

      {/* Personal Projects Section */}
      <Fade triggerOnce={true}>
        <section className="py-20 bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <PersonalProjects />
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Home;
