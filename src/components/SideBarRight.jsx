const SideBarRight = () => {
  return (
    <div className="hidden  max-w-[25%] ps-4 pt-4 text-lg md:flex flex-col gap-y-3">
      <p className="flex flex-col gap-x-4 pe-4">
        <h3>Quotes </h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYrc6TSOPEb6___BSIjw4iMaNW9XFQBQlOQ&s"
          className="rounded-lg"
        />
      </p>
      <p className=" pe-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96fEOoqLv-hx8SIs9LaCKTNlB6dCLYTMFeA&s"
          className="rounded-lg"
        />
      </p>
      <p className="text-[15px]">
        “For me, becoming isn’t about arriving somewhere or achieving a certain
        aim. I see it instead as forward motion, a means of evolving, a way to
        reach continuously toward a better self. The journey doesn’t end.”
        <br />
        <b>—Michelle Obama</b>
      </p>
    </div>
  );
};

export default SideBarRight;
