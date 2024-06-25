import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DummyPage = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();
  setInterval(() => {
    const timeRemaine = timer - 1;
    setTimer(timeRemaine);
  }, 1000);
  useEffect(() => {
    setTimeout(() => {
      navigate("/login-signup");
    }, 5000);
  }, []);

  return (
    <center className="bg-black text-white text-5xl pt-32 h-[100vh] w-[100vw]">
      <p>You're not autherise to visit this page, please login first!</p>
      <p className="text-sm mt-4">
        <span
          className="text-blue-400 me-2"
          onClick={() => navigate("/login-signup")}
        >
          Click Here
        </span>
        <span>Or Redirecting in {timer}</span>
      </p>
    </center>
  );
};

export default DummyPage;
