/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projectData = [
  {
    title: "Recruitment Portal",
    description: "A comprehensive recruitment portal allowing users to register and apply for jobs with a streamlined application tracking system.",
    image: "/projects/todo-vector.png",
    tags: ["React", "Tailwind", "Firebase"],
    link: "#",
    github: "#"
  },
  {
    title: "e-commerce Platform",
    description: "A full-featured e-commerce application with product listings, advanced cart management, and a mock checkout flow.",
    image: "/projects/ecommerce-vector.png",
    tags: ["React", "Redux", "Node.js"],
    link: "#",
    github: "#"
  },
  {
    title: "Government State Portal CMS",
    description: "A secure Content Management System built for the Meghalaya State Portal, focusing on content integrity and role-based access.",
    image: "/projects/cms-vector.png",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    link: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity-focused todo application with local persistence, category filtering, and an intuitive drag-and-drop interface.",
    image: "/projects/todo-vector.png",
    tags: ["React", "Context API", "Local Storage"],
    link: "#",
    github: "#"
  },
];

const ProjectCard = ({ project, index }) => {
  const { title, description, image, tags, link, github } = project;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a href={github} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
            <Github className="w-6 h-6 text-white" />
          </a>
          <a href={link} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
            <ExternalLink className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-foreground/60 line-clamp-3">{description}</p>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section className="relative z-10 py-24 px-4 bg-background/50" id="project">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Featured Projects
          </motion.h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-lg text-foreground/60 text-center max-w-2xl">
            A selection of my recent work, showcasing expertise in frontend and backend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            See more on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

