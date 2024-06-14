import CardComponent from "../Card/CardComponent";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiLaughing } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreatePost = () => {
  function formSubmit(e) {
    e.preventDefault();
    toast.success("Post Created!", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  }
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
              <p className="text-sm">How are you today, Mr. Alex?</p>
            </div>
          </div>
        </div>
        <form className="px-4 mt-14 border border-slate-500 mx-4 rounded-lg py-4">
          <span className="text-sm text-slate-200">What's on your mind?</span>
          <input
            type="text"
            placeholder="Purpose"
            className="createPostInputStyling"
          ></input>
          <input
            type="mail"
            placeholder="Subject"
            className="createPostInputStyling"
          ></input>
          <textarea
            type="text"
            placeholder="Message"
            className="createPostInputStyling"
          ></textarea>
          <button
            className="bg-amber-500 text-center w-[100%] py-2 mt-4 rounded-3xl"
            onClick={(e) => formSubmit(e)}
          >
            Create Post
          </button>
        </form>
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

export default CreatePost;
