const Heading = ( {faded, bold, theme, borderColor} ) => {
  return (
    <div className="flex justify-center items-center mt-7">
      <p className="text-8xl font-extrabold text-gray-300 opacity-40 uppercase">{faded}</p>
      <p className={`${theme} text-4xl absolute font-bold`}>{bold}</p>
      <span className={`w-28 border-b-4 ${borderColor} absolute mt-14`}></span>
    </div>
  );
};

export default Heading;