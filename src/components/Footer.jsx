import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.section
      className="text-center bg-black text-white py-[73px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Footer Content
      </motion.h4>
    </motion.section>
  );
}

export default Footer;
