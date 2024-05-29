import { servicesPageHomeData } from '../data';

function ServicesPageHome() {
  const { backgroundImage, title, description } = servicesPageHomeData;

  return (
    <section
      className="h-[30vh] md:h-[40vh] flex justify-center flex-col px-8 md:px-36 gap-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl md:text-[36px] text-[#B3550A] font-poly text-center md:text-start">
        {title}
      </h1>
      <p className="text-lg md:text-xl font-roboto text-white font-light text-center md:text-start">
        {description}
      </p>
    </section>
  );
}

export default ServicesPageHome;
