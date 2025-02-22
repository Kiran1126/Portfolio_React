import ScrollAnimation from 'react-animate-on-scroll';

const Heading = ( {faded, bold, theme, borderColor} ) => {
  return (
    <div className="flex flex-col justify-items-start items-center mt-7">
      <ScrollAnimation animateIn="bounceInLeft" animateOnce>
        <p className="text-8xl font-extrabold text-gray-300 opacity-40 uppercase">{faded}</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInRight" animateOnce>
        <div className="flex flex-col justify-center items-center -translate-y-12">
          <pre className={`${theme} text-4xl absolute font-bold font-sans`}>{bold}</pre>
          <span className={`w-28 border-b-4 ${borderColor} absolute mt-14`}></span>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Heading;