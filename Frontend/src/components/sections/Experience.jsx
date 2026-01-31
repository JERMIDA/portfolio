import React from "react";
import { motion as Motion} from "framer-motion";
import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Experience
      </h2>

      <div className="relative border-l-2 border-accent/40 pl-8 space-y-12">
        {experience.map((exp,) => (
          <Motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-accent border-2 border-background"></span>

            {/* Content */}
            <div className="bg-background shadow-subtle rounded-md p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                </div>
                <p className="text-sm mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-sm mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-block px-3 py-1 rounded-md bg-accent/10 text-accent text-sm font-medium"
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