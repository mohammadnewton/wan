import heroImage from "../assets/hero.svg"

function Hero() {
  return (
    <section className="flex justify-end h-[90vh] bg-cover pr-48" style={{backgroundImage: `url(${heroImage})`}}>
      <div className="flex flex-col items-start justify-center text-center text-black gap-[29px]">
        <h1 className="text-[40px] font-poly font-normal">Hello I&apos;m Winnie</h1>
        <p className="text-[20px] font-roboto font-light w-4/5 text-start">Welcome to Wan Styling I help Women find their Everyday Style</p>
        <button className="bg-[#B3550A] font-roboto text-white px-10 py-4">Explore Our Services</button>
      </div>
    </section>
  );
}

export default Hero;
