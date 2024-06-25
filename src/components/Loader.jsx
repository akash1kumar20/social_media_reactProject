const Loader = () => {
  return (
    <>
      <div className="p-3 mt-5 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full mx-[30%]">
        <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
      </div>
      <p className="text-center mt-2 text-blue-300">Loading...</p>
    </>
  );
};

export default Loader;
