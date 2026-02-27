import { motion } from "framer-motion";
import { Code2, Palette, Globe, Smartphone, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern frameworks like React and Laravel.",
    icon: <Code2 className="w-8 h-8" />,
    color: "blue"
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive user interfaces and engaging user experiences with a focus on usability and aesthetics.",
    icon: <Palette className="w-8 h-8" />,
    color: "violet"
  },
  {
    title: "E-commerce Solutions",
    description: "Developing robust online stores with secure payment integrations and efficient product management systems.",
    icon: <Globe className="w-8 h-8" />,
    color: "emerald"
  },
  {
    title: "Mobile Optimization",
    description: "Ensuring your web applications look and perform flawlessly across all devices and screen sizes.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "amber"
  },
  {
    title: "Performance Tuning",
    description: "Optimizing application speed and efficiency to ensure the best possible user experience and SEO ranking.",
    icon: <Zap className="w-8 h-8" />,
    color: "red"
  },
  {
    title: "Secure Development",
    description: "Implementing industry-standard security practices to protect your data and ensure application integrity.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "indigo"
  }
];

export const Service = () => {
  return (
    <section className="relative z-10 py-24 px-4 bg-background" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            My Services
          </motion.h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-lg text-foreground/60 text-center max-w-2xl">
            I offer a comprehensive range of development services to help you build and scale your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};