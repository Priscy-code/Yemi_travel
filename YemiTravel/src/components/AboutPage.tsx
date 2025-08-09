const AboutPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
        YEMRICH TRAVEL AND TOURS
      </h1>
      <p className="text-xl md:text-2xl mb-4 opacity-90 animate-pulse delay-75">
        Your Journey, Our Passion
      </p>
      <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto animate-pulse delay-150">
        Whether you're planning a relaxing holiday, an adventurous escape, or a
        corporate retreat, we deliver bespoke travel solutions that reflect your
        needs, lifestyle, and budget.
      </p>
      <button
        onClick={() => scrollToSection("services")}
        className="bg-gradient-to-r from-green-500 to-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse delay-300"
      >
        Start Your Journey
      </button>
    </div>
  );
};

export default AboutPage;
