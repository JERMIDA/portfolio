import React from "react";
import { motion as Motion} from "framer-motion";
import Button from "./Button";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <Motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-background text-textPrimary rounded-md shadow-subtle max-w-lg w-full p-6 relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-accent text-xl focus:outline-none focus:ring-2 focus:ring-accent rounded"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Project content */}
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="mb-4">{project.details}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-block px-3 py-1 rounded-md bg-accent/10 text-accent text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">View Code</Button>
        </a>
      </Motion.div>
    </Motion.div>
  );
};

export default ProjectModal;