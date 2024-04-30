import Contact from "../Contact";
import Services from "../Services";
import ServicesPageCard from "./ServicesPageCard";
import ServicesPageHome from "./ServicesPageHome";

function ServicesPage() {
  return (
    <>
      <ServicesPageHome />
      <ServicesPageCard />
      <Services />
      <Contact />
    </>
  );
}

export default ServicesPage;
