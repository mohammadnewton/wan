import { servicesPageData } from '../data'; // Import services page data

function ServicesPageCard() {
  return (
    <section className="grid place-items-center grid-cols-1 md:gap-32 my-0 md:my-[8rem]">
      {servicesPageData.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 p-4 md:p-0 w-full h-auto md:w-[1067px] md:h-[300px]`}
        >
          <img className="w-[374px] h-[418px] object-cover" src={service.image} alt="" />
          <div className='grid gap-2 place-items-start'>
            {service.title && <h2 className="text-[21px] text-[#B3550A] font-roboto font-semibold mb-2">{service.title}</h2>}
            <h3 className="text-[23px] font-poly font-normal">{service.subtitle}</h3>
            <p className="font-roboto text-[19px] font-light">{service.description}</p>
            <span className="font-poly text-[19px] font-normal">{service.price}</span>
            <button className="text-[#B3550A] font-roboto text-[16px] border border-[#B3550A] px-4 py-2 mt-4">{service.buttonText}</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ServicesPageCard;
