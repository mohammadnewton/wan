import { motion } from "framer-motion";
import image1 from "../assets/rect1.svg";
import image2 from "../assets/rect2.svg";
import image3 from "../assets/rect3.svg";
import image4 from "../assets/rect4.svg";
import image5 from "../assets/rect6.svg";

const images = [image1, image2, image3, image4, image5];

function Gallery() {
  return (
    <section className="w-full m-0 p-0">
      <div className="flex flex-wrap gap-0">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt=""
            className="w-[302px] h-[270px] object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
