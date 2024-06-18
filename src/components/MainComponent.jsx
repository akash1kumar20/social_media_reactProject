import { Outlet } from "react-router-dom";

const MainComponent = () => {
  return (
    <div className="md:w-[50%] w-[100%] pt-4 z-0">
      <Outlet />
    </div>
  );
};

export default MainComponent;
