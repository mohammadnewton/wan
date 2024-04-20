import { motion } from "framer-motion";
import backVideo from '../assets/back.mp4';

function Notice() {
  return (
    <section className="h-[30vh] relative overflow-hidden">

      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={backVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div 
        className="absolute inset-0 flex items-center justify-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-4xl font-bold" 
          whileHover={{ scale: 1.1 }}
        >
          &quot;Dress to be remembered
        </motion.h1>
      </motion.div>
    </section>
  );
}

export default Notice;
