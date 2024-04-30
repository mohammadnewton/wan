import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      controls.start({ opacity: scrollTop > 200 ? 1 : 0, y: scrollTop > 200 ? 0 : 50 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.section className="h-[70vh] bg-[#f9f1eb] flex flex-col justify-center items-start px-12 py-60 lg:py-12 lg:px-60" animate={controls}>
      <motion.h1
        className="text-[28px] font-poly font-light text-black"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Explore Our Services
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
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
          <motion.h2 variants={childVariants} className="text-[28px] font-poly font-normal text-white">
            Styling Package
          </motion.h2>
          <motion.p variants={childVariants} className="text-[#BDBDBD] text-center font-inter text-[16px]">
            Our stylists will help you find your signature style through personalized appointments.
          </motion.p>
          <motion.button variants={childVariants} className="bg-[#B3550A] text-white py-2 px-4 rounded font-roboto text-[12px]">
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
          <motion.h2 variants={childVariants} className="text-[28px] font-poly font-normal text-white">
            Online Shopping Assist
          </motion.h2>
          <motion.p variants={childVariants} className="text-[#BDBDBD] text-center font-inter text-[16px]">
            Our stylists will help you find your signature style through personalized appointments.
          </motion.p>
          <motion.button variants={childVariants} className="bg-[#B3550A] text-white py-2 px-4 rounded font-roboto text-[12px]">
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
          <motion.h2 variants={childVariants} className="text-[28px] font-poly font-normal text-white">
            Custom Wardrobe
          </motion.h2>
          <motion.p variants={childVariants} className="text-[#BDBDBD] text-center font-inter text-[16px]">
            Our stylists will help you find your signature style through personalized appointments.
          </motion.p>
          <motion.button variants={childVariants} className="bg-[#B3550A] text-white py-2 px-4 rounded font-roboto text-[12px]">
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Services;
