const CardComponent = (props) => {
  return (
    <div className="min-h-[95%] max-h-[100vh] md:mx-[15%] mx-3 rounded-md bg-zinc-700 z-50 shadow-2xl drop-shadow-2xl text-white mt-2 py-4 overflow-y-auto">
      {props.children}
    </div>
  );
};

export default CardComponent;
