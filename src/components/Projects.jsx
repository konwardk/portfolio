/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Folder, 
  Layout, 
  Code,
  Monitor,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const projectData = [
  // Major Projects
  {
    title: "Attendance Management System",
    description: "A professional system for tracking attendance with real-time reporting and administrative dashboards.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-primary/40">
        <rect x="20" y="20" width="60" height="60" rx="8" fill="currentColor" opacity="0.2" />
        <path d="M35 40h30M35 50h30M35 60h20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <circle cx="70" cy="70" r="15" fill="currentColor" opacity="0.3" />
        <path d="M65 70l3 3 7-7" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
    ),
    tags: ["Laravel", "MySQL", "Tailwind"],
    category: "major",
    link: "#",
    github: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-scale online store with product management, secure checkout, and user profile systems.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-primary/40">
        <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.1" />
        <path d="M30 40h40l-5 30H35z" fill="currentColor" opacity="0.3" />
        <path d="M30 40L25 25h10" stroke="currentColor" strokeWidth="4" fill="none" />
        <circle cx="40" cy="75" r="5" fill="currentColor" />
        <circle cx="60" cy="75" r="5" fill="currentColor" />
      </svg>
    ),
    tags: ["React", "Node.js", "MongoDB"],
    category: "major",
    link: "#",
    github: "#"
  },
  {
    title: "Government Portal CMS",
    description: "Secure Content Management System for state portals with dynamic updates and role-based access.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-primary/40">
        <rect x="25" y="20" width="50" height="60" rx="4" fill="currentColor" opacity="0.2" />
        <path d="M40 35h20M40 45h20M40 55h20M40 65h10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M70 15l15 15-15 15" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.3" />
      </svg>
    ),
    tags: ["PHP", "Laravel", "MySQL"],
    category: "major",
    link: "#",
    github: "#"
  },
  {
    title: "School Management Website",
    description: "Digital solution for schools to manage student data, academic results, and faculty coordination.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-primary/40">
        <path d="M20 80h60V40L50 20 20 40z" fill="currentColor" opacity="0.2" />
        <path d="M50 20v60M20 40h60" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <circle cx="50" cy="45" r="10" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    tags: ["React", "Firebase", "Tailwind"],
    category: "major",
    link: "#",
    github: "#"
  },
  {
    title: "Expense Tracker Web App",
    description: "Financial management tool for tracking daily expenses and income with visual data summaries.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-primary/40">
        <rect x="20" y="30" width="60" height="40" rx="4" fill="currentColor" opacity="0.2" />
        <path d="M20 45h60" stroke="currentColor" strokeWidth="4" opacity="0.3" />
        <circle cx="35" cy="55" r="5" fill="currentColor" />
        <path d="M50 55h20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    tags: ["React", "Chart.js"],
    category: "minor",
    link: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "Productivity-focused todo list with drag-and-drop features and persistent local storage.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-primary/40">
        <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.1" />
        <path d="M35 40l10 10 20-20" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
        <rect x="30" y="60" width="40" height="4" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="30" y="70" width="30" height="4" rx="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    tags: ["React", "Context API"],
    category: "minor",
    link: "#",
    github: "#"
  }
];

const ProjectCard = ({ project }) => {
  const { title, description, svg, tags, link, github } = project;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="group bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
    >
      {/* Consistent Background Container */}
      <div className="relative h-44 bg-foreground/[0.02] flex items-center justify-center border-b border-border/30">
        <div className="transition-transform duration-500 group-hover:scale-110">
          {svg}
        </div>
        
        {/* Subtle Overlay Actions */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a href={github} className="p-2 bg-card border border-border rounded-lg hover:text-primary transition-colors shadow-sm">
            <Github size={20} />
          </a>
          <a href={link} className="p-2 bg-card border border-border rounded-lg hover:text-primary transition-colors shadow-sm">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-foreground/40">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">{title}</h3>
        <p className="text-foreground/60 text-sm line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="pt-2 flex items-center text-primary text-xs font-semibold group-hover:gap-2 gap-1 transition-all">
          <span>View Details</span>
          <ChevronRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <section className="relative z-10 py-20 px-4" id="project">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
            <p className="text-foreground/60 max-w-md">A collection of web applications and systems focusing on functionality and clean code.</p>
          </div>
          
          {/* Minimalist Tabs */}
          <div className="flex bg-foreground/[0.03] p-1 rounded-lg border border-border/50">
            {["all", "major", "minor"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === tab 
                  ? 'bg-card text-primary shadow-sm' 
                  : 'text-foreground/40 hover:text-foreground'
                }`}
              >
                {tab === 'minor' ? 'Small' : tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm italic">Continuous learning through building.</p>
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-foreground/80 hover:text-primary transition-colors"
          >
            <Github size={18} />
            Check Github Repository
          </a>
        </div>
      </div>
    </section>
  );
};
