import Contact from "../Contact";
import Gallery from "../Gallery";
import Services from "../Services";
import TransformationsCard from "./TransformationsCard";
import TransformationsHome from "./TransformationsHome";

function Transformations() {
  return (
    <>
      <TransformationsHome />
      <TransformationsCard />
      <Services />
      <Contact />
      <Gallery />
    </>
  );
}

export default Transformations;
