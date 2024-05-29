import { cardData } from "../data";

function TransformationsCard() {
  return (
    <section className='grid place-items-center'>
      <div className="p-2 md:p-16 grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 ">
        {cardData.map((card, index) => (
          <div key={index} className="flex bg-white overflow-hidden shadow-md w-full md:w-[551px] h-[443px] gap-2">
            <img className="w-full object-cover object-center" src={card.image} alt="Card" />
            <div className="px-6 py-2 md:py-8 flex flex-col gap-1 md:gap-4">
              <h2 className="font-normal text-[18px] md:text-[24px] font-poly mb-0 md:mb-2">{card.title}</h2>
              <p className="text-[14px] md:text-[16px] font-light font-roboto pr-0 md:pr-8">{card.description}</p>
              <a href="#" className="text-[#B3550A] font-roboto text-[16px] font-medium">{card.link}</a>
            </div>
          </div>
        ))}
      </div>
      <button className='bg-[#B3550A] text-white font-roboto text-[16px] font-normal px-6 py-4 mb-4'>Contact Us</button>
    </section>
  );
}

export default TransformationsCard;
