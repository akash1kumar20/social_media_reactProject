import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DummyPage from "../components/DummyPage";
import { LuEye, LuEyeOff } from "react-icons/lu";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const autCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const newPassword = useRef();
  const newConfirmPassword = useRef();
  const userIsLoggedIn = localStorage.getItem("token");

  async function changePasswordHandler(event) {
    event.preventDefault();
    if (newPassword.current.value !== newConfirmPassword.current.value) {
      return toast.warning("Please type passwords carefully!", {
        position: "top-center",
        theme: "dark",
        autoClose: 2000,
      });
    }
    const passwordChanged = newPassword.current.value;
    try {
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAQEdPwCPsMNn2hOuK1KoyuP5k0TmLrbbE",
        {
          idToken: autCtx.token,
          password: passwordChanged,
          returnSecureToken: true,
        }
      );
      if (res.status === 200) {
        toast.success("Password Change Successfully!", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      toast.error("Please Try Again!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  }

  return (
    <>
      {!userIsLoggedIn && <DummyPage />}
      {userIsLoggedIn && (
        <div className="bg-slate-900 text-white text-center w-[100vw] h-[100vh]">
          <ToastContainer />
          <h2 className="text-2xl font-bold pt-10 uppercase">
            Change Password
          </h2>
          <form className="mt-6">
            <div className="flex w-[20rem] py-2 px-2 rounded-xl border-4 border-white bg-slate-400 text-white justify-between items-center mx-auto">
              <input
                type={showPassword ? "text" : "password"}
                ref={newPassword}
                placeholder="Enter New Password Here..."
                className=" bg-slate-400 text-white  placeholder-white focus:outline-none"
              />
              {!showPassword && <LuEye onClick={() => setShowPassword(true)} />}
              {showPassword && (
                <LuEyeOff onClick={() => setShowPassword(false)} />
              )}
            </div>
            <br />
            <div className="flex w-[20rem] py-2 px-2 rounded-xl border-4 border-white bg-slate-400 text-white justify-between items-center mx-auto">
              <input
                type={showConfirmPassword ? "text" : "password"}
                ref={newConfirmPassword}
                placeholder="Confirm Password..."
                className=" bg-slate-400 text-white  placeholder-white focus:outline-none"
              />
              {!showConfirmPassword && (
                <LuEye onClick={() => setShowConfirmPassword(true)} />
              )}
              {showConfirmPassword && (
                <LuEyeOff onClick={() => setShowConfirmPassword(false)} />
              )}
            </div>
            <br />
            <button
              className="bg-white text-slate-900 py-2 px-8 rounded-2xl  border-2 border-black"
              onClick={(event) => changePasswordHandler(event)}
            >
              Change Password
            </button>
            <br />
            <button
              className="bg-white text-slate-900 py-2 px-8 rounded-2xl mt-4 border-2 border-black"
              onClick={() => navigate("/login-signup")}
            >
              Back
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChangePassword;
