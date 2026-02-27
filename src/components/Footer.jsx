import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const footerData = {
  name: "Dipankor Konwar",
  tech: "React & Tailwind CSS",
  links: [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dipankor-konwar/" },
    { icon: <Github className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
  ],
  email: "dipankorkonwar15@gmail.com",
};

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 mb-2">
            {footerData.name}
          </h2>
          <p className="text-foreground/60 text-sm">
            Building digital experiences with {footerData.tech}
          </p>
        </div>

        <div className="flex gap-6">
          {footerData.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right">
          <a
            href={`mailto:${footerData.email}`}
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" /> {footerData.email}
          </a>
          <p className="mt-2 text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};