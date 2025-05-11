import { motion } from "framer-motion";

const image = {
  height: "300px",
  width: "380px",
  img: "/about.png",
  sheight: "100px",
  swidth: "100px",

  html : "/skills/html_css_js.png",
  react : "/skills/react.png",
  mysql : "/skills/mysql.png",
  php : "/skills/php.png",
  laravel : "/skills/laravel.png",

};

export const About = () => {
  return (
    <div className="w-full h-full pt-20 pb-60" id="about">
      <h1 className="text-3xl font-bold text-center mb-8">About Me</h1>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto px-4 gap-10">
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
            <p className="mt-4">
              My journey into web development started with a curiosity about how websites work. Since then, I’ve built up my skills in HTML, CSS, JavaScript, and various frameworks to create smooth and responsive user experiences.
            </p>
            <p className="mt-4">
              I’ve worked with technologies like <span className="font-semibold">React.js</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">Laravel</span>, and <span className="font-semibold">MongoDB</span>. I'm always excited to learn new tools and frameworks to improve my workflow.
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

<div className="flex items-center justify-center mt-10">
  <motion.div
    className="flex justify-center md:justify-start"
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="flex flex-wrap mx-5 justify-around gap-10 z-20">
      {[image.html, image.php, image.laravel, image.mysql, image.react].map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt=""
          style={{ height: image.sheight, width: image.swidth }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  </motion.div>
</div>

    </div>
  );
};
