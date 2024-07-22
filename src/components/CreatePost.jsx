import axios from "axios";
import CardComponent from "../Card/CardComponent";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiLaughing } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { Form, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImHome } from "react-icons/im";
const CreatePost = () => {
  const navigate = useNavigate();
  return (
    <>
      <ToastContainer />
      <CardComponent>
        <h3 className="text-center text-2xl font-semibold border-b pb-4 border-slate-600">
          Create Post
        </h3>
        <div className="px-4">
          <div className="flex gap-x-3 items-center pt-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                className="h-8 rounded-full"
              />
            </div>
            <div>
              <p>Mr. Alex</p>
              <p className="text-sm">How are you today ?</p>
            </div>
          </div>
        </div>
        <Form
          method="POST"
          className="px-4 mt-2 border border-slate-500 mx-4 rounded-lg py-4"
        >
          <span className="text-sm text-slate-200">What's on your mind?</span>
          <div className="input flex flex-col static ">
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
              className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-auto focus:outline-none placeholder:text-white "
            />
          </div>
          <div className="input flex flex-col static ">
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
              className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-auto focus:outline-none placeholder:text-white "
            />
          </div>
          <div className="input flex flex-col static ">
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
              className="border-slate-500 input px-[10px] py-[11px] text-md bg-[#52525B] border-2 rounded-[5px] w-auto focus:outline-none placeholder:text-white "
            />
          </div>
          <button className="bg-amber-500 text-center w-[100%] py-2 mt-4 rounded-3xl">
            Create Post
          </button>
        </Form>

        <p
          className="w-[5%] mt-2 mx-auto px-auto text-2xl"
          onClick={() => navigate("/")}
        >
          <ImHome />
        </p>

        <p className="mx-4 mt-4 text-[15px] text-slate-200">
          Two things are necessary, the development of individuality and the
          participation of the individual in a truly social life.
        </p>
        <div className="flex mx-4 mt-4 gap-x-6 justify-center">
          <BsEmojiGrin />
          <BsEmojiHeartEyes />
          <BsEmojiLaughing />
          <HiOutlineEmojiSad />
        </div>
      </CardComponent>
    </>
  );
};
export const formSubmission = async ({ request }) => {
  //request have all the data of the form
  const data = await request.formData();
  const formData = {
    purpose: data.get("purpose"),
    subject: data.get("subject"),
    message: data.get("message"),
  };
  //use get to catch the data of the form, and inside bracket use name attribute
  let message;
  try {
    let res = await axios.post(
      "https://socialmediareactproject-default-rtdb.firebaseio.com/posts.json",
      formData
    );
    if (res.status === 200) {
      message = toast.success("Post Created! Check Posts", {
        position: "top-right",
        theme: "colored",
        autoClose: 2000,
      });
    }
  } catch (err) {
    message = toast.error("Network Problem!", {
      position: "top-righ",
      theme: "colored",
      autoClose: 2000,
    });
  }

  return message;
};

export default CreatePost;
