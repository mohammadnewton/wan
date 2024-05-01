import servicesBg from '../../assets/services-bg.png';

function ServicesPageHome() {
  return (
    <section
      className="h-[30vh] md:h-[40vh] flex justify-center flex-col px-8 md:px-36 gap-4"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl md:text-[36px] text-[#B3550A] font-poly text-center md:text-start">
        Our Services
      </h1>
      <p className="text-lg md:text-xl font-roboto text-white font-light text-center md:text-start">
        Welcome to Wan Styling. I help women find their everyday style.
      </p>
    </section>
  );
}

export default ServicesPageHome;
