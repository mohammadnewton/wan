import { transformationsData } from '../data';

function TransformationsHome() {
  return (
    <section
      className="h-[30vh] md:h-[40vh] flex justify-center flex-col px-8 md:px-36 gap-4"
      style={{
        backgroundImage: `url(${transformationsData.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className='text-[36px] text-[#B3550A] font-poly text-center md:text-start'>
        {transformationsData.title}
      </h1>
      <p className='text-[20px] font-roboto text-white font-light text-center md:text-start'>
        {transformationsData.subtitle}
      </p>
    </section>
  );
}

export default TransformationsHome;
