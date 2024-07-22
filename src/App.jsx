import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import DummyPage from "./components/DummyPage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const userIsLoggedIn = localStorage.getItem("token");
  const intitalTheme = JSON.parse(localStorage.getItem("socialTheme"));
  const [theme, setTheme] = useState(intitalTheme);
  const navigate = useNavigate();

  const changeThemeHandler = () => {
    setTheme((theme) => !theme);
  };
  localStorage.setItem("socialTheme", theme);

  useEffect(() => {
    if (!userIsLoggedIn) {
      navigate("/login-signup");
    }
  }, []);
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
