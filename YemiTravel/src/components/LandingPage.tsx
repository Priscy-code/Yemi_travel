import { useState, useEffect } from "react";
import {
  Plane,
  Hotel,
  FileText,
  Globe,
  Briefcase,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Star,
  Users,
  Award,
  Clock,
} from "lucide-react";
import Logo from "../assets/Yemrich_travel_logo-01-removebg-preview.png";
import AboutPage from "./AboutPage";

const YemrichLandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "services",
        "destinations",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Flight Bookings",
      description:
        "Competitive rates for domestic and international flights across all major airlines, with flexible options to suit your schedule and budget.",
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hotel Reservations",
      description:
        "From luxury resorts to budget stays, we book vetted accommodations that match your comfort level and travel style.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Visa Assistance",
      description:
        "Our experienced team guides you through the visa application process with precision, ensuring correct documentation and compliance.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Tour Packages",
      description:
        "Curated experiences including heritage tours, eco-adventures, honeymoon getaways, and safari excursions.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporate Travel",
      description:
        "Complete travel management for companies, NGOs, and institutions including group bookings and executive support.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Educational Travel",
      description:
        "Tailored programs for students and institutions involving academic tours, exchanges, and educational experiences.",
    },
  ];

  const localDestinations = [
    {
      name: "Cape Coast & Elmina Castles",
      icon: "🏰",
      description: "Explore Ghana's historical heritage sites",
    },
    {
      name: "Mole National Park",
      icon: "🦁",
      description: "Wildlife safari adventures",
    },
    {
      name: "Lake Bosomtwe",
      icon: "🌊",
      description: "Serene lake experiences",
    },
    {
      name: "Wli Waterfalls",
      icon: "💧",
      description: "Nature's spectacular displays",
    },
  ];

  const internationalDestinations = [
    {
      name: "Dubai Adventures",
      icon: "🏙️",
      description: "Luxury and modern marvels",
    },
    {
      name: "UK & Schengen Tours",
      icon: "🇬🇧",
      description: "European cultural experiences",
    },
    {
      name: "South African Safaris",
      icon: "🦓",
      description: "Big Five wildlife encounters",
    },
    {
      name: "Holy Land Pilgrimages",
      icon: "🛐",
      description: "Spiritual journeys to Israel, Jordan & Egypt",
    },
  ];

  const testimonials = [
    {
      text: "Yemrich made our honeymoon unforgettable. Seamless planning and top-class service!",
      author: "Amanda & Kwabena, Accra",
    },
    {
      text: "Our school trip to the UK was well-organised and safe. Highly recommended.",
      author: "Headmistress, Elite Academy",
    },
    {
      text: "I travel often for work and Yemrich handles everything. Reliable and responsive.",
      author: "Mr Kojo Owusu, Corporate Client",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "50+",
      label: "Destinations",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "5+",
      label: "Years Experience",
    },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <img src={Logo} alt="" className="w-32, h-32 mt-5" />
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Services", "Destinations", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors duration-300 hover:opacity-80 ${
                      scrolled ? "text-gray-700" : "text-white"
                    } ${
                      activeSection === item.toLowerCase()
                        ? "font-semibold"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-600 to-gray-800">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Floating Elements */}
          <div className="absolute inset-0">
            <div
              className="absolute top-20 left-10 text-4xl animate-bounce"
              style={{ animationDelay: "0s" }}
            >
              ✈️
            </div>
            <div
              className="absolute top-40 right-20 text-3xl animate-bounce"
              style={{ animationDelay: "2s" }}
            >
              🌍
            </div>
            <div
              className="absolute bottom-40 left-20 text-5xl animate-bounce"
              style={{ animationDelay: "4s" }}
            >
              🏝️
            </div>
            <div
              className="absolute bottom-20 right-10 text-3xl animate-bounce"
              style={{ animationDelay: "6s" }}
            >
              🎒
            </div>
          </div>
        </div>

        <AboutPage />

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-3xl">↓</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-gray-900 to-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
            About Yemrich Travel
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Who We Are
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yemrich Travel and Tours is a Ghanaian-owned travel management
                  company established to redefine the travel experience for
                  individuals, families, institutions, and businesses. Founded
                  by Mr Richard Boakye Yermoh, a seasoned facilitator and
                  logistics expert, we operate with a customer-first approach.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver personalised, efficient, and value-driven travel
                  services that exceed client expectations and inspire lifelong
                  memories.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Our Core Values
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Integrity",
                    desc: "We act honestly and transparently in all dealings",
                  },
                  {
                    title: "Excellence",
                    desc: "We strive for top-tier service and continuous improvement",
                  },
                  {
                    title: "Customer Satisfaction",
                    desc: "Your journey is our focus",
                  },
                  {
                    title: "Innovation",
                    desc: "We embrace creativity in problem-solving and service delivery",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-gray-900 to-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-gray-900 to-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
            Popular Destinations
          </h2>

          {/* Local Destinations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">
              Local Experiences
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {localDestinations.map((destination, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-green-500 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {destination.icon}
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">
                      {destination.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {destination.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Destinations */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">
              International Adventures
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internationalDestinations.map((destination, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-green-500 to-gray-700 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {destination.icon}
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">
                      {destination.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {destination.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                <div className="absolute top-4 left-4 text-6xl text-green-200 opacity-50">
                  "
                </div>
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 via-green-600 to-gray-800 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to start your next adventure? Get in touch with us today!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <MapPin className="w-8 h-8 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
                <p className="opacity-90">
                  Office Address
                  <br />
                  [Insert Office Location]
                </p>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Call Us</h4>
                <p className="opacity-90">[Insert Phone Number]</p>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Email Us</h4>
                <p className="opacity-90">[Insert Email Address]</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300 hover:scale-110"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300 hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300 hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("services")}
            className="bg-gradient-to-r from-green-500 to-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Plan Your Journey Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default YemrichLandingPage;
