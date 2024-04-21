import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styling from "../assets/Rectangle.svg";
import online from "../assets/Rectangle2.svg";
import wardrobe from "../assets/Rectangle3.svg";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Services() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="h-[70vh] flex flex-col justify-center items-start px-12 lg:px-60">
      <motion.h1
        className="text-4xl font-bold text-black"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Explore Our Services
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        <motion.div
          className="p-[1rem] flex flex-col justify-center items-center gap-6 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${styling})`,
            width: "343px",
            height: "374px",
          }}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.h2 variants={childVariants} className="text-2xl font-bold text-white">
            Styling Package
          </motion.h2>
          <motion.p variants={childVariants} className="text-gray-400 text-center">
            Our stylists will help you find your signature style through personalized appointments.
          </motion.p>
          <motion.button variants={childVariants} className="bg-[#B3550A] text-white py-2 px-4 rounded">
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="p-[1rem] flex flex-col justify-center items-center gap-6 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${online})`,
            width: "343px",
            height: "374px",
          }}
          variants={cardVariants}          
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          <motion.h2 variants={childVariants} className="text-2xl font-bold text-white">
            Online Shopping Assist
          </motion.h2>
          <motion.p variants={childVariants} className="text-gray-400 text-center">
            Our stylists will help you find your signature style through personalized appointments.
          </motion.p>
          <motion.button variants={childVariants} className="bg-[#B3550A] text-white py-2 px-4 rounded">
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="p-[1rem] flex flex-col justify-center items-center gap-6 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${wardrobe})`,
            width: "343px",
            height: "374px",
          }}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.4, delay: 1.4 }}
        >
          <motion.h2 variants={childVariants} className="text-2xl font-bold text-white">
            Custom Wardrobe
          </motion.h2>
          <motion.p variants={childVariants} className="text-gray-400 text-center">
            Our stylists will help you find your signature style through personalized appointments.
          </motion.p>
          <motion.button variants={childVariants} className="bg-[#B3550A] text-white py-2 px-4 rounded">
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
