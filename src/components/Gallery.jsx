import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { galleryImages } from "./data";

function Gallery() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      controls.start({ opacity: scrollTop > 800 ? 1 : 0, y: scrollTop > 800 ? 0 : 50 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section className="w-full m-0 p-0">
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 m-0 p-0 gap-0" animate={controls}>
        {galleryImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt=""
            className="w-full md:w-[302px] h-[270px] object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Gallery;
