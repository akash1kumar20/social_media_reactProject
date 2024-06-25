import axios from "axios";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditPost = () => {
  const navigate = useNavigate();
  const [editMessage, setEditMessage] = useState("");
  const [editSubject, setEditSubject] = useState("");
  const [editPurpose, setEditPurpose] = useState("");
  const [editId, setEditId] = useState(null);

  const updatePost = async (event) => {
    event.preventDefault();
    const formData = {
      purpose: editPurpose,
      subject: editSubject,
      message: editMessage,
    };
    try {
      let res = await axios.put(
        `https://socialmediareactproject-default-rtdb.firebaseio.com/posts/${editId}.json`,
        formData
      );
      if (res.status === 200) {
        toast.success("Post Edit Successfully", {
          theme: "colored",
          autoClose: 2000,
          position: "top-right",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      toast.error("Please try again", {
        theme: "colored",
        autoClose: 2000,
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    let post = JSON.parse(localStorage.getItem("edit-post"));
    setEditMessage(post.message);
    setEditSubject(post.subject);
    setEditPurpose(post.purpose);
    setEditId(post.id);
  }, []);

  return ReactDOM.createPortal(
    <div className="z-10 bg-[rgba(0,0,0,0.7)] bg-opacity-70 w-[100vw] h-[100vh] fixed top-[0%]">
      <ToastContainer />
      <div className="z-50 bg-slate-500 text-white md:w-[50%] mx-auto mt-24 rounded-md shadow-lg drop-shadow-lg">
        <p
          className="text-xl font-semibold text-end md:pe-1 pe-4 cursor-pointer"
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
                onChange={(e) => setEditPurpose(e.target.value)}
                value={editPurpose}
                name="purpose"
                required
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
                onChange={(e) => setEditSubject(e.target.value)}
                value={editSubject}
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
                onChange={(e) => setEditMessage(e.target.value)}
                value={editMessage}
                name="message"
                required
                className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-[25rem] focus:outline-none placeholder:text-white "
              />
            </div>
            <button
              className="bg-amber-500 text-center w-[100%] py-2 mt-4 rounded-3xl"
              onClick={(e) => updatePost(e)}
            >
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
