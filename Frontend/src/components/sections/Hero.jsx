import React from "react";
import { motion as Motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[65vh] md:min-h-[80vh] flex flex-col justify-center items-center text-center px-6"
      style={{ paddingTop: 'calc(var(--nav-height) + 2.5rem)' }}
    >
      {/* Profile Image with advanced animation */}
      <Motion.div
        initial={{ opacity: 0, y: -60, scale: 0.6, rotateY: 45 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
        whileHover={{ scale: 1.08, rotateY: 10, boxShadow: "0 8px 32px 0 rgba(40, 80, 200, 0.25)" }}
        whileTap={{ scale: 0.97, rotateY: -10 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, duration: 1 }}
        className="mb-4"
      >
        <div className="relative mx-auto flex items-center justify-center" style={{ width: '180px', height: '180px' }}>
          <Motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring', stiffness: 120 }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 blur-[2px] z-0"
            style={{ filter: 'blur(8px)' }}
          />
          <Motion.img
            src="./src/assets/lemi.jpg"
            alt="Profile"
            className="relative z-10 w-[170px] h-[170px] md:w-[200px] md:h-[200px] rounded-full border-4 border-white shadow-2xl object-cover object-top bg-white"
            style={{ objectPosition: 'top center' }}
            initial={{ opacity: 0, scale: 0.7, y: -40, filter: "grayscale(60%)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "grayscale(0%)" }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring', stiffness: 120 }}
            whileHover={{ scale: 1.12, filter: "brightness(1.1) saturate(1.2)", boxShadow: "0 12px 40px 0 rgba(80, 120, 255, 0.35)" }}
          />
        </div>
      </Motion.div>

      {/* Intro */}
      <Motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Hi, I’m <span className="text-accent">Lemi Damena</span>
      </Motion.h1>

      {/* Typing animation headline */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-xl md:text-2xl text-textPrimary mb-8"
      >
        <span>
          <Typed
            strings={[
              "MERN Stack Developer",
              "Software Engineer",
              "Tech Enthusiast",
            ]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1500}
            loop
          />
        </span>
      </Motion.div>

      {/* CTA buttons */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex gap-4"
      >
        <a href="#projects">
          <Button variant="primary">View Projects</Button>
        </a>
        <a href="#contact">
          <Button variant="outline">Contact Me</Button>
        </a>
      </Motion.div>
    </section>
  );
};

export default Hero;