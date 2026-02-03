import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import ProjectModal from "../ui/projectModal";
import projects from "../../data/projects";

const techFilters = ["All", "React", "Node.js", "MongoDB", "Tailwind"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(filter));

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Projects
      </h2>

      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {techFilters.map((tech) => (
          <Button
            key={tech}
            variant={filter === tech ? "primary" : "outline"}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </Button>
        ))}
      </div>

      {/* Project cards */}
      <Motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <Motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card>
                {project.screenshot && (
                  <img
                    src={project.screenshot}
                    alt={project.title + " screenshot"}
                    className="w-full h-48 object-cover rounded-md mb-4 border border-accent/20 shadow"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setSelectedProject(project)}>
                    Details
                  </Button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary">View Code</Button>
                  </a>
                </div>
              </Card>
            </Motion.div>
          ))}
        </AnimatePresence>
      </Motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;