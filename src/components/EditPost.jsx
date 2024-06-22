import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
const EditPost = () => {
  const navigate = useNavigate();
  return ReactDOM.createPortal(
    <div className="z-10 bg-black bg-opacity-70 w-[100vw] h-[100vh] fixed top-[0%]">
      <div className="z-50 bg-slate-500 text-white w-[50%] mx-auto mt-24 rounded-md shadow-lg drop-shadow-lg">
        <p
          className="text-xl font-semibold text-end pe-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          X
        </p>
        <div className="py-10  items-center flex flex-col">
          <h3 className="text-xl font-bold underline mb-3">
            Please do the changes here
          </h3>
          <form>
            <div className="input flex flex-col w-fit static ">
              <label
                htmlFor="purpose"
                className="text-slate-500 text-md font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
              >
                Purpose
              </label>
              <input
                type="text"
                placeholder="Write here..."
                name="purpose"
                className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-[25rem] focus:outline-none placeholder:text-white "
              />
            </div>
            <div className="input flex flex-col w-fit static ">
              <label
                htmlFor="subject"
                className="text-slate-500 text-md font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
              >
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Write here..."
                name="subject"
                className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-[25rem] focus:outline-none placeholder:text-white "
              />
            </div>
            <div className="input flex flex-col w-fit static ">
              <label
                htmlFor="message"
                className="text-slate-500 text-md font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
              >
                Message
              </label>
              <textarea
                type="text"
                placeholder="Write here..."
                name="message"
                required
                className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-[25rem] focus:outline-none placeholder:text-white "
              />
            </div>
            <button className="bg-amber-500 text-center w-[100%] py-2 mt-4 rounded-3xl">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.querySelector("#edit-post")
  );
};

export default EditPost;
