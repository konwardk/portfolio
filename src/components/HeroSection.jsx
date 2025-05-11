import { motion } from "framer-motion";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

const heading = {
  image: "/my-photo.png",
  name: "Dipankor Konwar",
  profession: "Web Developer",
};


export const HeroSection = () => {
  return (
    <div className="w-full h-full pt-20 pb-60" id="home">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start max-w-6xl mx-auto px-4 gap-8">

        {/* Animated Image Section - Slide from Left */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-start w-full md:w-1/2"
        >
          <img
            src={heading.image}
            alt="Profile"
            className="rounded-[70%_30%_30%_70%] sm:w-64 sm:h-64 md:w-80 md:h-90 md:mt-10 object-cover transition-all z-20"
          />
        </motion.div>

        {/* Animated Text Section - Slide from Right */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 mt-10 z-20 text-center md:text-left"
        >
          <h2 className="text-2xl font-semibold mb-2">Hello,</h2>
          <h1 className="text-2xl md:text-4xl font-bold">
            I'm <span className="text-blue-500">{heading.name}</span>
            <span className="text-2xl">, a passionate</span>
            <span className="text-4xl">{heading.profession}</span>.
          </h1>
        </motion.div>

      </div>
      <About/>
      <Projects/>
    </div>
  );
};
