import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.png'

function ServicesPageCard() {
  return (
    <section className="grid place-items-center grid-cols-1 gap-32 my-[8rem]">
      <div className="flex flex-col md:flex-row gap-8 w-[1067px] h-[300px]">
        <img className="w-[374px] h-[418px] object-cover" src={image1} alt="" />
        <div className='grid gap-2 place-items-start'>
          <h2 className="text-[21px] text-[#B3550A] font-roboto font-semibold mb-2">Our Services</h2>
          <h3 className="text-[23px] font-poly font-normal">1. Make your customers happy by giving services.</h3>
          <p className="font-roboto text-[19px] font-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
          <span className="font-poly text-[19px] font-normal">Prices start from Kshs 10,000</span>
          <button className="text-[#B3550A] font-roboto text-[16px] border border-[#B3550A] px-4 py-2 mt-4">Book Now</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-[1067px] h-[300px]">
        <img className="w-[524px] h-[275px] object-cover" src={image2} alt="" />
        <div className='grid gap-2 place-items-start'>
          <h3 className="text-[23px] font-poly font-normal">2. Wardrobe Styling</h3>
          <p className="font-roboto text-[19px] font-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
          <span className="font-poly text-[19px] font-normal">Prices start from Kshs 10,000</span>
          <button className="text-[#B3550A] font-roboto text-[16px] border border-[#B3550A] px-4 py-2 mt-4">Book Now</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 w-[1067px] h-[300px]">
        <img className="w-[374px] h-[418px] object-cover" src={image3} alt="" />
        <div className='grid gap-2 place-items-start'>
          <h3 className="text-[23px] font-poly font-normal">3. Make your customers happy by giving services.</h3>
          <p className="font-roboto text-[19px] font-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
          <span className="font-poly text-[19px] font-normal">Prices start from Kshs 10,000</span>
          <button className="text-[#B3550A] font-roboto text-[16px] border border-[#B3550A] px-4 py-2 mt-4">Book Now</button>
        </div>
      </div>
    </section>
  );
}

export default ServicesPageCard;
