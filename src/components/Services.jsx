import React from "react";
import styling from "../assets/Rectangle.svg";
import online from "../assets/Rectangle2.svg";
import wardrobe from "../assets/Rectangle3.svg";

function Services() {
  return (
    <section className="h-[70vh] flex flex-col justify-center items-start px-60">
      <h1 className="text-4xl font-bold text-black">Explore Our Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        <div className="p-[1rem] w-[343px] h-[374px] flex flex-col justify-center items-center gap-6 bg-cover bg-center" style={{ backgroundImage: `url(${styling})` }}>
          <h2 className="text-2xl font-bold text-white">Styling Package</h2>
          <p className="text-gray-400 text-center">Our stylists will help you find your signature style through personalized appointments.</p>
          <button className="bg-[#B3550A] text-white py-2 px-4 rounded">Learn More</button>
        </div>

        <div className="p-[1rem] w-[343px] h-[374px] flex flex-col justify-center items-center gap-6 bg-cover bg-center" style={{ backgroundImage: `url(${online})` }}>
          <h2 className="text-2xl font-bold text-white">Online Shopping Assist</h2>
          <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet pretium consectetur adipisicing elit.</p>
          <button className="bg-[#B3550A] text-white py-2 px-4 rounded">Learn More</button>
        </div>

        <div className="p-[1rem] w-[343px] h-[374px] flex flex-col justify-center items-center gap-6 bg-cover bg-center" style={{ backgroundImage: `url(${wardrobe})` }}>
          <h2 className="text-2xl font-bold text-white">Custom Wardrobe</h2>
          <p className="text-gray-400 text-center">Our stylists will help curate your closet and create a virtual wardrobe.</p>
          <button className="bg-[#B3550A] text-white py-2 px-4 rounded">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
