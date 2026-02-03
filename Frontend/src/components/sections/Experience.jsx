import React from "react";
import { motion as Motion} from "framer-motion";
import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent">
        <span className="inline-block mr-2 align-middle">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2v2m0 16v2m8-10h2M2 12H4m15.07-7.07l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M4.93 4.93l1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </span>
        Experience
      </h2>

      <div className="relative border-l-4 border-accent/60 pl-10 space-y-12">
        {experience.map((exp, idx) => (
          <Motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + idx * 0.1, ease: "easeOut" }}
            className="relative"
          >
            {/* Timeline dot with icon */}
            <span className="absolute -left-6 top-6 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-accent to-primary shadow-lg border-4 border-background">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#fff"/></svg>
            </span>

            {/* Content */}
            <div className="bg-background shadow-lg rounded-xl p-8 border border-accent/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div className="flex items-center gap-3">
                  {/* Company logo placeholder */}
                  <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-2">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fbbf24"/></svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{exp.role}</h3>
                    <p className="text-sm text-accent font-medium">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm mt-2 md:mt-0 text-right text-accent/80 font-semibold">{exp.period}</p>
              </div>
              <p className="text-base mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 text-accent text-sm font-semibold shadow"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;