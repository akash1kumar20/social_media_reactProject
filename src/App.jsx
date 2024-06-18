import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-[100vh] ">
      <Header />
      <div className="flex">
        <SideBarLeft />
        <Outlet />
        <SideBarRight />
      </div>
    </div>
  );
};

export default App;
