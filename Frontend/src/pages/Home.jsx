import React from "react";

const Home = () => {
  return (
        <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <h1 className="text-4xl font-bold mb-4">I'm Lemi Damena, Software Engineer</h1>
      <p className="text-2xl">MERN Stack & API Integration Specialist</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200"
      >
        View My Work
      </a>
    </section>
  );
};

export default Home;