import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../store/auth-context";
import { LuEye, LuEyeOff } from "react-icons/lu";

const AddAccount = () => {
  const [isLogin, setIsLogin] = useState();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const userName = useRef();
  const userMail = useRef();
  const passwordEntered = useRef();
  const confirmPassowrdEntered = useRef();
  const navigate = useNavigate();
  const autCtx = useContext(AuthContext);
  const userIsLoggedIn = localStorage.getItem("token");

  async function handlerUserDetails(event) {
    event.preventDefault();
    let mailEntered;
    let password;
    let confirmPassowrd;
    let url;
    if (isLogin === true) {
      mailEntered = userMail.current.value;
      password = passwordEntered.current.value;
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQEdPwCPsMNn2hOuK1KoyuP5k0TmLrbbE";
    } else if (isLogin === false) {
      mailEntered = userMail.current.value;
      password = passwordEntered.current.value;
      nameEntered = userName.current.value;
      confirmPassowrd = confirmPassowrdEntered.current.value;

      if (password !== confirmPassowrd) {
        return toast.warning("Password and confirm-password are not same!", {
          position: "top-center",
          theme: "dark",
          autoClose: 2000,
        });
      }

      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQEdPwCPsMNn2hOuK1KoyuP5k0TmLrbbE";
    }
    setLoading(true);
    try {
      let res = await axios.post(url, {
        email: mailEntered,
        password: password,
        retunrSecureToken: true,
      });
      autCtx.login(res.data.idToken);
      setLoading(false);
      if (res.status === 200 && isLogin === false) {
        toast.success("Account Created Successfully!", {
          theme: "light",
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          setIsLogin();
        }, 2000);
      }
      if (res.status === 200 && isLogin === true) {
        toast.success("Welcome Back!", {
          theme: "light",
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      toast.error("Authentication failed! ", {
        theme: "dark",
        position: "top-right",
        autoClose: 2000,
      });
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <center className="bg-black text-white h-[100vh] w-[100vw] pt-12">
        <div className="border-2 border-white w-fit md:px-32 px-4 py-10">
          <h1 className="text-3xl font-bold">Welcome to the word of posts!</h1>
          {isLogin === undefined && (
            <div className="flex mt-6 justify-between ">
              <p>Already a user?</p>
              <p>New User?</p>
            </div>
          )}
          {isLogin === undefined && (
            <div className="flex mt-2 justify-between">
              <button
                className="bg-amber-500 text-white px-6 py-2 rounded-lg"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className="bg-amber-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsLogin(false)}
              >
                Create Account
              </button>
            </div>
          )}
          {isLogin === undefined && userIsLoggedIn && (
            <button
              className="bg-amber-500 text-white px-4 py-2 rounded-lg mt-6"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          )}
          {isLogin !== undefined && (
            <form className="mt-4">
              {isLogin === false && (
                <div className="input flex flex-col w-fit static ">
                  <label
                    htmlFor="Name"
                    className="text-slate-500 text-md font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Write here..."
                    name="Name"
                    ref={userName}
                    className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-[25rem] focus:outline-none placeholder:text-white "
                  />
                </div>
              )}
              <div className="input flex flex-col w-fit static ">
                <label
                  htmlFor="mail"
                  className="text-slate-500 text-md font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
                >
                  Email
                </label>
                <input
                  type="mail"
                  ref={userMail}
                  required
                  placeholder="Write here..."
                  name="mail"
                  className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-[25rem] focus:outline-none placeholder:text-white "
                />
              </div>
              <div className="input flex flex-col w-fit static ">
                <label
                  htmlFor="Password"
                  className="text-slate-500 text-md font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
                >
                  Password
                </label>
                <div className="flex justify-between border-slate-500  px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-[25rem] items-center gap-x-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    ref={passwordEntered}
                    required
                    placeholder="Write here..."
                    name="Password"
                    className="bg-[#52525B] w-full input focus:outline-none placeholder:text-white "
                  />
                  {!showPassword && (
                    <LuEye onClick={() => setShowPassword(true)} />
                  )}
                  {showPassword && (
                    <LuEyeOff onClick={() => setShowPassword(false)} />
                  )}
                </div>
              </div>
              {isLogin === false && (
                <div className="input flex flex-col w-fit static ">
                  <label
                    htmlFor="Confirm-Password"
                    className="text-slate-500 text-md font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
                  >
                    Confirm Password
                  </label>
                  <div className="flex justify-between border-slate-500  px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-[25rem] items-center gap-x-2">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      ref={confirmPassowrdEntered}
                      required
                      placeholder="Write here..."
                      name="Password"
                      className="bg-[#52525B] w-full input focus:outline-none placeholder:text-white "
                    />
                    {!showConfirmPassword && (
                      <LuEye onClick={() => setShowConfirmPassword(true)} />
                    )}
                    {showConfirmPassword && (
                      <LuEyeOff onClick={() => setShowConfirmPassword(false)} />
                    )}
                  </div>
                </div>
              )}
              {isLogin !== false && (
                <div className="flex justify-end">
                  <p
                    className="text-blue-600  pe-4 cursor-pointer w-fit "
                    onClick={() => navigate("/changePassword")}
                  >
                    Forget Password?
                  </p>
                </div>
              )}
              {!loading && (
                <div className="mt-4 gap-x-4 flex justify-center item-center">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-2xl"
                    onClick={(event) => handlerUserDetails(event)}
                  >
                    {isLogin === true && "Login"}
                    {isLogin === false && "Signup"}
                  </button>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-2xl hover:cursor-pointer"
                    onClick={() => setIsLogin()}
                  >
                    Back
                  </button>
                </div>
              )}
              {loading && <p>Request send...</p>}
            </form>
          )}
        </div>
      </center>
    </>
  );
};

export default AddAccount;
