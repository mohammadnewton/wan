import transformationBg from '../../assets/transformation-bg.png';

function TransformationsHome() {
  return (
    <section className="h-[30vh] md:h-[40vh] flex justify-center flex-col px-8 md:px-36 gap-4" style={{ backgroundImage: `url(${transformationBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className='text-[36px] text-[#B3550A] font-poly text-center md:text-start'>Our Transformations</h1>
      <p className='text-[20px] font-roboto text-white font-light  text-center md:text-start'>Welcome to Wan Styling I help women find their everyday style.</p>
    </section>
  );
}

export default TransformationsHome;
