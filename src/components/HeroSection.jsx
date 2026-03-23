import { motion } from "framer-motion";

const heading = {
  image: "/me.png",
  name: "Dipankor Konwar",
  profession: "Full Stack Developer",
};

export const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Animated Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-medium text-primary"
          >
            Hello, I&apos;m
          </motion.h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              {heading.name}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            A passionate <span className="text-primary">{heading.profession}</span>
          </p>
          
          <p className="max-w-xl mx-auto md:mx-0 text-lg text-foreground/60">
            I build modern, high-performance web applications with a focus on user experience and clean code.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a href="#project" className="cosmic-button">
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2 rounded-full border border-primary/20 hover:bg-primary/5 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full md:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 rounded-[50%_20%_50%_20%/20%_50%_20%_50%] animate-pulse" />
            
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full h-full"
            >
              <img
                src={heading.image}
                alt="Profile"
                className="w-full h-full object-cover rounded-[50%_20%_50%_20%/20%_50%_20%_50%] shadow-2xl border-4 border-white/10"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-foreground/40 font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

