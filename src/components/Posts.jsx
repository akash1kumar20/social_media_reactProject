import { useEffect, useState } from "react";
import CardComponent from "../Card/CardComponent";
import Loader from "./Loader";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFetchingData(true);
    const fetchData = async () => {
      try {
        let res = await axios.get(
          "https://socialmediareactproject-default-rtdb.firebaseio.com/posts.json"
        );
        setFetchingData(false);
        const dataArray = [];
        for (let key in res.data) {
          dataArray.push({ ...res.data[key], id: key });
        }
        setPosts(dataArray);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDeletePost = async (post) => {
    try {
      let res = await axios.delete(
        `https://socialmediareactproject-default-rtdb.firebaseio.com/posts/${post.id}.json`
      );
      if (res.status === 200) {
        toast.error("Post Deleted!", {
          position: "top-right",
          theme: "colored",
          autoClose: 2000,
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    } catch (err) {
      toast.warning("Please Try Again!", {
        position: "top-right",
        theme: "dark",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <CardComponent>
        <h1 className="text-center text-3xl font-semibold ">Posts</h1>
        {fetchingData && <Loader />}
        {!fetchingData && posts.length === 0 && (
          <p className="text-center mt-4">
            No post yet
            <a href="/create-post" className="text-blue-400">
              create post
            </a>
          </p>
        )}
        {!fetchingData &&
          posts.map((post) => (
            <div
              key={post.id}
              className=" px-3 py-2 my-3 bg-gradient-to-br from-orange-500 via-transparent to-orange-600"
            >
              <h3 className="text-center text-lg font-semibold underline ">
                {post.subject}
              </h3>
              <p className="text-md my-2 border px-3 py-2 rounded-2xl">
                {post.message}
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-blue-400 mx-1 px-2 py-1 rounded-3xl text-sm">
                  {post.purpose}
                </span>
                <div className="flex gap-2 mr-2">
                  <button
                    className="text-indigo-950 text-lg drop-shadow-lg shadow-black"
                    onClick={() => handleDeletePost(post)}
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="text-slate-300 text-lg drop-shadow-lg shadow-black"
                    onClick={() => navigate("/edit-post")}
                  >
                    <FaPenClip />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </CardComponent>
    </>
  );
};

export default Posts;
