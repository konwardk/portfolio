import { motion } from "framer-motion";

const image = {
  height: "300px",
  width: "380px",
  img: "/about.png",
};

export const About = () => {
  return (
    <div className="w-full h-full pt-20 pb-60" id="about">
      <h1 className="text-3xl font-bold text-center mb-8">About Me</h1>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto px-4 gap-10">
        {/* Text Section - Slide in from right */}
        <motion.div
          className="text-lg md:w-1/2 z-20"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p>
            I am a <span className="font-semibold">web developer</span> with a passion for building dynamic,
            responsive, and user-friendly web applications. I enjoy solving real-world problems through code
            and constantly improving my skills in modern web technologies.
          </p>
        </motion.div>

        {/* Image Section - Slide in from left */}
        <motion.div
          className="flex justify-center md:justify-start md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            className="rounded-lg shadow-lg z-20"
            src={image.img}
            alt="About me"
            style={{ height: image.height, width: image.width }}
          />
        </motion.div>
      </div>
    </div>
  );
};
