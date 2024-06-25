import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import DummyPage from "./components/DummyPage";
import { useState } from "react";

const App = () => {
  const userIsLoggedIn = localStorage.getItem("token");
  const initialTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(initialTheme);

  const changeThemeHandler = () => {
    setTheme((theme) => !theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <>
      {!userIsLoggedIn && <DummyPage />}
      {userIsLoggedIn && (
        <div
          className={
            theme ? "bg-slate-900 text-white z-0" : "bg-white text-black z-0"
          }
        >
          <Header changeThemeHandler={changeThemeHandler} theme={theme} />
          <div className="flex">
            <SideBarLeft />
            <MainComponent />
            <SideBarRight />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
