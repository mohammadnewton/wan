import cardImage from '../../assets/cardImage.png';

const cardData = [
  {
    image: cardImage,
    title: "Njeeri's Transformation Journey",
    description: 'Lorem ipsum dolor sit amet consectetur. Porta justo quis ac congue egestas mattis porttitor donec. Fringilla convallis imperdiet cursus ac vivamus id. Quam nibh dapibus ultrices sed mi nec. Mollis orci elit tincidunt pellentesque quis sit accumsan.',
    link: 'Read More',
  },
  {
    image: cardImage,
    title: "Njeeri's Transformation Journey",
    description: 'Lorem ipsum dolor sit amet consectetur. Porta justo quis ac congue egestas mattis porttitor donec. Fringilla convallis imperdiet cursus ac vivamus id. Quam nibh dapibus ultrices sed mi nec. Mollis orci elit tincidunt pellentesque quis sit accumsan.',
    link: 'Read More',
  },
  {
    image: cardImage,
    title: "Njeeri's Transformation Journey",
    description: 'Lorem ipsum dolor sit amet consectetur. Porta justo quis ac congue egestas mattis porttitor donec. Fringilla convallis imperdiet cursus ac vivamus id. Quam nibh dapibus ultrices sed mi nec. Mollis orci elit tincidunt pellentesque quis sit accumsan.',
    link: 'Read More',
  },
  {
    image: cardImage,
    title: "Njeeri's Transformation Journey",
    description: 'Lorem ipsum dolor sit amet consectetur. Porta justo quis ac congue egestas mattis porttitor donec. Fringilla convallis imperdiet cursus ac vivamus id. Quam nibh dapibus ultrices sed mi nec. Mollis orci elit tincidunt pellentesque quis sit accumsan.',
    link: 'Read More',
  }
];

function TransformationsCard() {
  return (
    <section className='grid place-items-center'>
      <div className="p-16 grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
        {cardData.map((card, index) => (
          <div key={index} className="flex bg-white overflow-hidden shadow-md w-[551px] h-[443px] gap-2">
            <img className="w-full object-cover object-center" src={card.image} alt="Card" />
            <div className="px-6 py-8 flex flex-col gap-4">
              <h2 className="font-normal text-[24px] font-poly mb-2">{card.title}</h2>
              <p className="text-[16px] font-light font-roboto pr-8">{card.description}</p>
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
