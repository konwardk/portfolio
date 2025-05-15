import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';

const projects = {
  todo: "/projects/todo-vector.png",
  ecom: "/projects/ecommerce-vector.png",
  cms : "/projects/cms-vector.png",
  // Add more project images if needed
};

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const projectData = [
    {
      title: "Todo App",
      description:
        "A simple Todo app built with React and Tailwind CSS. It allows users to add, delete, and mark tasks as complete. The app uses local storage to persist data across sessions.",
      image: projects.todo,
    },
    {
      title: "e-commerce App",
      description:
        "An e-commerce app built with React and Tailwind CSS. It features a product listing, shopping cart, and checkout process. The app uses a mock API to fetch product data.",
      image: projects.ecom,
    },
    {
      title: "CMS App",
      description:
        "Same Todo app with additional features like edit, mark complete, and responsive layout using Swiper.",
      image: projects.cms,
    },
    {
      title: "Todo App 4",
      description:
        "Same Todo app with additional features like edit, mark complete, and responsive layout using Swiper.",
      image: projects.todo,
    },
  ];

  const ProjectCard = ({ title, description, image }) => (
    <div className="project border rounded-lg p-6 shadow-md w-full lg:w-[45%]">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="about-project flex flex-col md:flex-row justify-between gap-4">
        <p className="text-base md:w-3/5">{description}</p>
        <img
          className="rounded-lg object-cover w-full md:w-2/5 h-48 md:h-52"
          src={image}
          alt={`${title} Screenshot`}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full h-full mt-10 pb-30" id="project">
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

      <motion.div
        className="mt-10 px-4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {isMobile ? (
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex flex-wrap justify-around gap-10">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};
