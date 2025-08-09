import { useState, useEffect } from "react";
import {
  Plane,
  Hotel,
  FileText,
  Map,
  Briefcase,
  GraduationCap,
  Shield,
  Car,
  MapPin,
  Phone,
  Mail,
  Users,
  Globe,
  Clock,
  Star,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Logo from '../assets/Yemrich_travel_logo-01-removebg-preview.png'

const YemrichLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Plane,
      title: "Flight Bookings",
      description:
        "Competitive rates for domestic and international flights across all major airlines, with flexible options to suit your schedule and budget.",
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description:
        "From luxury resorts to budget stays, we book vetted accommodations that match your comfort level and travel style.",
    },
    {
      icon: FileText,
      title: "Visa Assistance",
      description:
        "Our experienced team guides clients through the visa application process with precision, ensuring correct documentation and compliance.",
    },
    {
      icon: Map,
      title: "Tour Packages",
      description:
        "Explore Ghana and beyond with our curated packages including heritage tours, eco adventures, honeymoon getaways, and wildlife safaris.",
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description:
        "We manage travel logistics for companies, NGOs, and institutions including group bookings, retreats, and executive concierge support.",
    },
    {
      icon: GraduationCap,
      title: "Study Abroad Programs",
      description:
        "Tailored programmes for students and institutions involving academic tours, exchange opportunities, and educational experiences.",
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description:
        "Comprehensive travel insurance options to ensure peace of mind throughout your journey with full coverage protection.",
    },
    {
      icon: Car,
      title: "Airport Transfers",
      description:
        "Reliable, safe and on-time transport options to and from airports, and a range of car rental packages for your convenience.",
    },
  ];

  const destinations = [
    {
      title: "Local Experiences",
      emoji: "🏰",
      description:
        "Cape Coast & Elmina Castles, Mole National Park, Lake Bosomtwe, Wli Waterfalls, and Volta Region adventures.",
      gradient: "from-green-400 to-green-500",
    },
    {
      title: "International Adventures",
      emoji: "🌍",
      description:
        "Dubai experiences, UK and Schengen cultural tours, South African safaris, and Nairobi expeditions.",
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "Spiritual Journeys",
      emoji: "🕊️",
      description:
        "Holy Land pilgrimages to Israel, Jordan, and Egypt for meaningful spiritual experiences.",
      gradient: "from-green-300 to-green-500",
    },
    {
      title: "Educational Tours",
      emoji: "📚",
      description:
        "Student tours to Europe, North America, and Asia designed for learning and cultural exchange.",
      gradient: "from-green-600 to-green-700",
    },
  ];

  const testimonials = [
    {
      text: "Yemrich made our honeymoon unforgettable. Seamless planning and top-class service!",
      author: "Amanda & Kwabena",
      location: "Accra",
    },
    {
      text: "Our school trip to the UK was well-organised and safe. Highly recommended.",
      author: "Headmistress",
      location: "Elite Academy",
    },
    {
      text: "I travel often for work and Yemrich handles everything. Reliable and responsive.",
      author: "Mr Kojo Owusu",
      location: "Corporate Client",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Travelers", icon: Users },
    { number: "50+", label: "Destinations", icon: Globe },
    { number: "24/7", label: "Customer Support", icon: Clock },
    { number: "100%", label: "Satisfaction Rate", icon: Star },
  ];

  const values = [
    {
      title: "Integrity",
      description: "We act honestly and transparently in all dealings.",
    },
    {
      title: "Excellence",
      description: "We strive for top-tier service and continuous improvement.",
    },
    {
      title: "Customer Satisfaction",
      description: "Your journey is our focus.",
    },
    {
      title: "Innovation",
      description:
        "We embrace creativity in problem-solving and service delivery.",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-black">
             <img src={Logo} alt="" className="w-38, h-38" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Services", "Destinations", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 hover:text-green-500 transition-colors duration-200 font-medium"
                  >
                    {item}
                  </button>
                )
              )}
            </nav>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex items-center px-6 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full hover:from-green-500 hover:to-green-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Plan Your Journey
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["Home", "About", "Services", "Destinations", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors duration-200 font-medium w-full text-left"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Your Journey,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
              Our Passion
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl mb-4 text-green-100 font-light">
            Explore. Discover. Experience.
          </p>

          <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're planning a relaxing holiday, an adventurous escape,
            or a corporate retreat, we deliver bespoke travel solutions that
            reflect your needs, lifestyle, and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection("services")}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full hover:from-green-500 hover:to-green-600 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1"
            >
              Explore Services
              <ChevronRight className="ml-2" size={20} />
            </button>
            <button
              onClick={() => scrollToSection("destinations")}
              className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
            >
              View Destinations
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight
            className="rotate-90 text-green-400 opacity-60"
            size={24}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <stat.icon className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                Redefining Travel Excellence in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                  Ghana & Beyond
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Yemrich Travel and Tours is a Ghanaian-owned travel management
                company established to redefine the travel experience for
                individuals, families, institutions, and businesses.
              </p>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded by Mr Richard Boakye Yermoh, a seasoned facilitator and
                logistics expert, we operate with a customer-first approach,
                blending passion, professionalism, and purpose.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-gray-50 to-green-50 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="font-bold text-black mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl h-96 lg:h-[500px] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Globe className="w-24 h-24 mx-auto mb-6 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">
                      Your Gateway to the World
                    </h3>
                    <p className="text-lg opacity-90">
                      Experience travel like never before
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-gray-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From flight bookings to cultural tours, we handle every aspect of
              your travel experience with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500"></div>
                <service.icon className="w-12 h-12 text-green-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-black mb-4">
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
      <section id="destinations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Discover Amazing Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From local Ghanaian treasures to international adventures, explore
              the world with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${destination.gradient} rounded-3xl p-10 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-6">{destination.emoji}</div>
                  <h3 className="text-2xl font-bold mb-4">
                    {destination.title}
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {destination.description}
                  </p>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied
              travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl text-green-300 mb-4">"</div>
                <p className="text-lg mb-6 leading-relaxed italic">
                  {testimonial.text}
                </p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-green-300">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-300">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-green-400 to-green-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-12 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Let Yemrich Travel and Tours be your gateway to the world. Contact
            us today to plan your perfect adventure.
          </p>

          <button className="inline-flex items-center px-10 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl transform hover:-translate-y-1 mb-16">
            Get Started Today
            <ChevronRight className="ml-2" size={20} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6">
              <MapPin className="w-12 h-12 mb-4 text-green-200" />
              <h4 className="text-xl font-bold mb-2">Visit Our Office</h4>
              <p className="text-green-100">[Insert Office Location]</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Phone className="w-12 h-12 mb-4 text-green-200" />
              <h4 className="text-xl font-bold mb-2">Call Us</h4>
              <p className="text-green-100">[Insert Phone Number]</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Mail className="w-12 h-12 mb-4 text-green-200" />
              <h4 className="text-xl font-bold mb-2">Email Us</h4>
              <p className="text-green-100">[Insert Email Address]</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Users className="w-12 h-12 mb-4 text-green-200" />
              <h4 className="text-xl font-bold mb-2">Follow Us</h4>
              <p className="text-green-100">@YemrichTravel on all platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold mb-4">
            YEM<span className="text-green-500">RICH</span>
          </div>
          <p className="text-gray-400">
            © 2025 Yemrich Travel and Tours. All rights reserved. | Your
            Journey, Our Passion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default YemrichLanding;
