import servicesBg  from '../assets/services-bg.png'

function ServicesPageHome() {
  return (
    <section
      className="h-[40vh] flex justify-center flex-col px-36 gap-4"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-[36px] text-[#B3550A] font-poly">
        Our Services
      </h1>
      <p className="text-[20px] font-roboto text-white font-light">
        Welcome to Wan Styling I help women find their everyday style.
      </p>
    </section>
  );
}

export default ServicesPageHome;
