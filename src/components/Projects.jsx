import { motion } from "framer-motion";


export const Projects = () => {

    return (
        <div className="border w-full h-full mt-10 pb-30" id="project">
            <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
            <div className="flex mt-10">
                <motion.div
                    className="flex text-lg text-center mx-10 z-20"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p>
                        Here are some of my projects that showcase my skills and expertise in web development.
                        Each project is a testament to my dedication to creating high-quality, user-friendly applications.
                    </p>
                </motion.div>

                
            </div>
            {/* Image Section - Sliding images for projects */}
                <motion.div
                    className="flex justify-center"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-around gap-15 flex-wrap">
                        <img
                        className="rounded-lg w-xl shadow-lg z-20"
                        src="/projects.png"
                        alt="Projects"
                        style={{ height: "200px", width: "" }}
                        />
                        <img
                            className="rounded-lg w-xl shadow-lg z-20"
                            src="/projects.png"
                            alt="Projects"
                            style={{ height: "200px", width: "" }}
                        />
                        <img
                            className="rounded-lg w-xl shadow-lg z-20"
                            src="/projects.png"
                            alt="Projects"
                            style={{ height: "200px", width: "" }}
                        />
                        <img
                            className="rounded-lg w-xl shadow-lg z-20"
                            src="/projects.png"
                            alt="Projects"
                            style={{ height: "200px", width: "" }}
                        />
                        <img
                            className="rounded-lg w-xl shadow-lg z-20"
                            src="/projects.png"
                            alt="Projects"
                            style={{ height: "200px", width: "" }}
                        />
                    </div>
                </motion.div>
        </div>
    );
}