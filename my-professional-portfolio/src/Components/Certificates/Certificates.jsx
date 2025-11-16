import { Helmet } from "react-helmet-async";
import HeroSection from "../HeroSection/HeroSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAward, FaGraduationCap, FaGlobe } from "react-icons/fa";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";

const Certificates = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      icon: <FaGraduationCap className="text-cyan-400 mx-auto" />,
      title: "Professional Courses",
      description: "Comprehensive learning programs"
    },
    {
      icon: <FaAward className="text-emerald-400 mx-auto" />,
      title: "Certifications",
      description: "Recognized achievements"
    },
    {
      icon: <FaGlobe className="text-teal-400 mx-auto" />,
      title: "International Events",
      description: "Global participation"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "Complete Web Development",
      provider: "Programming Hero",
      participation : "Online",
      providerLogo: "https://i.ibb.co/VvGYkhk/ph.jpg",
      providerUrl: "https://www.programming-hero.com",
      image: "https://i.ibb.co/6ZWMrbx/Screenshot-2024-07-03-at-00-13-18.png",
      description: "This course has equipped me with extensive hands-on experience, laying a solid foundation for my career as a Junior Web Developer. I have become proficient in front-end and back-end development, authentication, authorization, and database management."
    },
    {
      id: 2,
      title: "Responsive Web Design",
      provider: "FreeCodeCamp",
      participation : "Online",
      providerLogo: "https://i.ibb.co/HVh0ByR/free-code-camp.png",
      providerUrl: "https://www.freecodecamp.org/learn",
      image: "https://i.ibb.co/JdvNq4D/Screenshot-2024-07-04-at-22-24-21.png",
      description: "This course provides hands-on experience while working through projects to provide learners a complete strong understanding of designing web applications using HTML and CSS. The main purpose is to provide a complete understanding of responsive web development."
    },
    {
      id: 3,
      title: "Sustainability and Green UX in Multimedia and IT",
      provider: "IBA, Kolding, Denmark",
      participation : "In Person",
      providerLogo: "https://i.ibb.co/s1CMLrR/iba-kolding.png",
      providerUrl: "https://busitweeks.wordpress.com/international-business-academy-kolding/",
      image: "https://i.ibb.co/DrfcbMj/1711407683311.jpg",
      description: "I worked actively as part of a multicultural team, on projects requiring problem-solving skills with an academic but nevertheless practical mindset. Of crucial importance over the various weeks were time management, cross-cultural communication and team spirit."
    },
    {
      id: 4,
      title: "Digitization and Its Economic and Social Impacts",
      provider: "Università della Calabria, Calabria, Italy",
      participation : "In Person",
      providerLogo: "https://i.ibb.co/995t7t1S/ucal.png",
      providerUrl: "https://www.unical.it/internazionale/intenational-students/unical-admission/",
      image: "https://i.ibb.co/Nw3cXJN/Screenshot-2025-11-11-at-14-33-01.png",
      description: "The project involves developing a business model and business plan for a startup in the sustainable and digital tourism sector, with a focus on economic and social impact, as well as business and marketing communication."
    },
    {
      id: 5,
      title: "Intensive Blended Design Workshop",
      provider: "EK - Erhvervsakademi København",
      participation : "In Person",
      providerLogo: "https://i.ibb.co/fdcwSnfw/kea.jpg",
      providerUrl: "https://mit.kea.dk/en/exchange-students/activities/charrette",
      image: "https://i.ibb.co/rGxCMxtK/kea.jpg",
      description: "Engaged in a week-long international design challenge as part of the KEA Charrette in Copenhagen, collaborating with students from various countries to explore sustainability-focused solutions. Worked with local stakeholders to develop innovative prototypes aimed at enhancing the sustainability of businesses. This project provided a hands-on experience in cross-cultural teamwork, creative problem-solving, and sustainable design practices, allowing me to contribute to real-world impact while expanding my global perspective."
    }
  ];

  return (
    <div className="mx-auto flex flex-col bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900">
      <Helmet>
        <title>Portfolio | Certifications</title>
      </Helmet>
      
      <HeroSection
        title="Certifications & Achievements"
        subtitle="Professional Growth & Learning"
        description="Highlighting the professional courses and international events that have shaped my expertise and contributed to my professional development"
        gradient="from-slate-900 via-navy-900 to-indigo-900"
        features={features}
      />
      
      <section className="bg-gradient-to-br from-indigo-900 via-navy-900 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Courses & International Events
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Certifications and achievements that demonstrate my commitment to continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 border border-blue-500/20 hover:border-blue-400/40"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithLoader
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-out will-change-transform"
                    skeletonClassName="h-64 w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                    <div className="flex items-center gap-3">
                      <ImageWithLoader
                        src={cert.providerLogo}
                        alt={cert.provider}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                        skeletonClassName="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="text-white font-semibold text-sm">{cert.provider}</h3>
                        <a
                          href={cert.providerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 text-xs hover:text-cyan-400 transition-colors"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-2 justify-between">
                  <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
                  <span className=" text-orange-500 text-sm leading-relaxed line-clamp-4">{cert.participation}</span>
                  <p className="text-blue-200/80 text-sm leading-relaxed line-clamp-4    ">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
