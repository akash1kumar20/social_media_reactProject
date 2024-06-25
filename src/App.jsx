import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import DummyPage from "./components/DummyPage";

const App = () => {
  const userIsLoggedIn = localStorage.getItem("token");

  return (
    <>
      {!userIsLoggedIn && <DummyPage />}
      {userIsLoggedIn && (
        <div className="bg-zinc-900 text-white min-h-[100vh] z-0">
          <Header />
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
