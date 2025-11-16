import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  gradient = "from-slate-900 via-navy-900 to-indigo-900",
  features = [],
  ctaText = null,
  ctaLink = null
}) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${gradient} min-h-screen flex items-center justify-center`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8 font-light">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-xs sm:text-lg   text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              {description}
            </p>
          )}

          {/* Features Grid */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  {feature.icon && <div className="text-4xl mb-4">{feature.icon}</div>}
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          {ctaText && (
            <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
              {ctaLink ? (
                <a
                  href={ctaLink}
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 ease-out will-change-transform shadow-2xl"
                >
                  {ctaText}
                </a>
              ) : (
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 ease-out will-change-transform shadow-2xl">
                  {ctaText}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Smooth scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
