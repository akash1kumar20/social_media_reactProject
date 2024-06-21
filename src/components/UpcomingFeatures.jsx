import { useNavigate } from "react-router-dom";

const UpcomingFeatures = () => {
  const navigate = useNavigate();
  return (
    <center className="pt-28 min-h-[100vh] bg-amber-500 text-white  font-semibold">
      <h1 className="text-3xl">Feature Coming Soon...</h1>
      <p
        className="text-blue-500 hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        Home
      </p>
    </center>
  );
};

export default UpcomingFeatures;
