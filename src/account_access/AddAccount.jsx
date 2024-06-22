import React, { useState } from "react";

const AddAccount = () => {
  const [isLogin, setIsLogin] = useState();

  return (
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
              <input
                type="password"
                required
                placeholder="Write here..."
                name="Password"
                className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-[25rem] focus:outline-none placeholder:text-white "
              />
            </div>
            {isLogin === false && (
              <div className="input flex flex-col w-fit static ">
                <label
                  htmlFor="Confirm-Password"
                  className="text-slate-500 text-md font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Write here..."
                  name="Confirm-Password"
                  className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-[25rem] focus:outline-none placeholder:text-white "
                />
              </div>
            )}
            <div className="mt-4 gap-x-4 flex justify-center item-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl">
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
          </form>
        )}
      </div>
    </center>
  );
};

export default AddAccount;
