import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const EditProfile = ({ setEditProfile }) => {
  const navigate = useNavigate();
  const autCtx = useContext(AuthContext);
  function logoutHandler() {
    autCtx.logout();
    navigate("/login-signup");
  }

  return (
    <div className="z-10 bg-[rgba(0,0,0,0.7)] w-[100vw] h-[100vh] top-[0%] fixed">
      <div className="flex flex-col gap-y-3 w-48 top-20 fixed right-2 z-50 bg-amber-500 py-12 px-2 rounded-xl">
        <button
          className="bg-black py-1 px-4 text-lg rounded-lg"
          onClick={() => navigate("/login-signup")}
        >
          Change Account
        </button>
        <button
          className="bg-black py-1 px-4 text-lg rounded-lg"
          onClick={() => navigate("/changePassword")}
        >
          Change Password
        </button>
        <button
          className="bg-red-600 py-1 px-4 text-lg rounded-lg"
          onClick={logoutHandler}
        >
          Logout
        </button>
        <button
          className="bg-pink-600 py-1 px-4 text-lg rounded-lg"
          onClick={() => setEditProfile()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
