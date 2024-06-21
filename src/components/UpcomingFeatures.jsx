import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

const UpcomingFeatures = () => {
  const navigate = useNavigate();
  return ReactDOM.createPortal(
    <div className="bg-black bg-opacity-70 w-[100vw] h-[100vh] z-10 fixed top-[0%]">
      <center className="pt-28 min-h-[70vh] bg-amber-500 text-white  font-semibold z-50 w-[46%] shadow-2xl drop-shadow-2xl rounded-md mx-auto my-20">
        <h1 className="text-3xl">Feature Coming Soon...</h1>
        <p
          className="text-blue-500 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </p>
      </center>
    </div>,
    document.getElementById("portal")
  );
};

export default UpcomingFeatures;
