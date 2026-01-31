import React from "react";
import { motion as Motion} from "framer-motion";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup) => (
          <Motion.div
            key={skillGroup.category}
           initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Card>
              <h3 className="text-xl font-semibold mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;