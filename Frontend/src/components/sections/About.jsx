import React from "react";
import { motion as Motion} from "framer-motion";
import Card from "../ui/Card";

const About = () => {
  return (
    <section id="about" className="pt-6 pb-12 md:pt-10 md:pb-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About Me
      </h2>

      <Motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Card>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Motion.img
              src="/assets/lemi.jpg"
              alt="Profile"
              className="w-full md:w-[340px] h-[320px] md:h-[420px] rounded-2xl border-4 border-accent ring-4 ring-accent/30 shadow-2xl object-cover object-center bg-white mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.7, x: -60 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              whileHover={{ scale: 1.03, rotate: 2, boxShadow: "0 16px 48px 0 rgba(80, 120, 255, 0.35)" }}
              whileTap={{ scale: 0.98, rotate: -2 }}
              transition={{ type: "spring", stiffness: 220, damping: 22, duration: 0.8 }}
            />
            <div>
              <p className="text-lg leading-relaxed">
                I’m <span className="text-accent font-semibold">Lemi Damena</span>, a
                software engineering student and  MERN developer with strong
                experience in building responsive, professional-grade applications.
                My focus is on clean UI design, accessibility, and scalable
                architecture. I thrive on learning deeply from each line of code and
                bridging the gap between student projects and production-ready
                applications.
              </p>

              <p className="text-lg leading-relaxed mt-6">
                Beyond coding, I’m passionate about presenting my work in a polished
                way from clear GitHub documentation to subtle design details that
                make interfaces feel product-like. My short-term goal is to build a
                recruiter-ready portfolio, and my long-term ambition is to secure a
                software engineering role where I can continue growing and
                contributing to impactful projects.
              </p>
            </div>
          </div>
        </Card>
      </Motion.div>
    </section>
  );
};

export default About;