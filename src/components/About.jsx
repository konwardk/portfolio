import { motion } from "framer-motion";

const aboutData = {
  description: [
    "I am a Full Stack Developer with a passion for building dynamic, responsive, and user-friendly web applications. I enjoy solving real-world problems through code and constantly improving my skills in modern web technologies.",
    "My journey into web development started with a curiosity about how websites work. Since then, I’ve built up my skills in modern frontend and backend frameworks to create seamless digital experiences.",
    "I specialize in building robust applications using React, Laravel, and modern database technologies. I'm always excited to learn new tools and frameworks to improve my workflow."
  ],
  skills: [
    { name: "HTML/CSS/JS", icon: "/skills/html_css_js.png" },
    { name: "PHP", icon: "/skills/php.png" },
    { name: "Laravel", icon: "/skills/laravel.png" },
    { name: "MySQL", icon: "/skills/mysql.png" },
    { name: "React JS", icon: "/skills/react.png" },
  ],
  image: "/aboutme.png"
};

export const About = () => {
  return (
    <section className="relative z-10 py-24 px-4 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl -rotate-3" />
            <img
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover z-10"
              src={aboutData.image}
              alt="About me"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {aboutData.description.map((para, i) => (
              <p key={i} className="text-lg text-foreground/70 leading-relaxed">
                {para}
              </p>
            ))}

            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {aboutData.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-card border border-border rounded-xl flex flex-col items-center gap-3 transition-colors hover:border-primary/30"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

