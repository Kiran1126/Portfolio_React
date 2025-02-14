const BtnContainer = (props) => {
  return (
    <div className="bg-red-500 text-white h-10 w-32 rounded-3xl text-base flex items-center justify-center font-medium transition delay-75 duration-300 ease-in-out hover:scale-110 hover:bg-indigo-500 cursor-pointer">
      {props.children}
    </div>
  );
};

export default BtnContainer;