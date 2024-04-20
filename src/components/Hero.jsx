import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "../assets/hero.svg";

function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex justify-end h-[90vh] bg-cover pr-48"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {isMounted && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-start justify-center text-center text-black gap-[29px]"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[40px] font-poly font-normal"
          >
            Hello I&apos;m Winnie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[20px] font-roboto font-light w-4/5 text-start"
          >
            Welcome to Wan Styling I help Women find their Everyday Style
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-[#B3550A] font-roboto text-white px-10 py-4"
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      )}
    </motion.section>
  );
}

export default Hero;
