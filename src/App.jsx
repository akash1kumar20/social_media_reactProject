import { useState } from "react";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";

const App = () => {
  const [tabSelected, setTabSelected] = useState("Home");

  return (
    <div className="bg-zinc-900 text-white min-h-[100vh] ">
      <Header setTabSelected={setTabSelected} />
      <div className="flex">
        <SideBarLeft setTabSelected={setTabSelected} />
        <MainComponent tabSelected={tabSelected} />
        <SideBarRight />
      </div>
    </div>
  );
};

export default App;
