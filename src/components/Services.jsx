import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { servicesData } from "./data";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Services() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      controls.start({ opacity: scrollTop > 200 ? 1 : 0, y: scrollTop > 200 ? 0 : 50 });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.section
      className="relative overflow-hidden bg-[#f9f1eb] px-6 py-12 md:px-12 lg:px-24 xl:px-32"
      style={{ zIndex: 1 }}
      animate={controls}
    >
      <motion.h1
        className="text-[28px] font-poly font-light text-black"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Explore Our Services
      </motion.h1>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="p-4 flex flex-col justify-center items-center gap-6 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${service.image})`,
              width: "100%",
              height: "374px",
            }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
          >
            <motion.h2 variants={childVariants} className="text-[28px] font-poly font-normal text-white">
              {service.title}
            </motion.h2>
            <motion.p variants={childVariants} className="text-[#BDBDBD] text-center font-inter text-[16px]">
              {service.description}
            </motion.p>
            <motion.button variants={childVariants} className="bg-[#B3550A] text-white py-2 px-4 rounded font-roboto text-[12px]">
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Services;
