import { useEffect, useState } from "react";
import CardComponent from "../Card/CardComponent";
import Loader from "./Loader";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  useEffect(() => {
    setFetchingData(true);
    const fetchData = async () => {
      try {
        let res = await axios.get(
          "https://socialmediareactproject-default-rtdb.firebaseio.com/posts.json"
        );
        const dataArray = [];
        for (let key in res.data) {
          dataArray.push({ ...res.data[key], id: key });
        }
        setPosts(dataArray);
        setFetchingData(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <CardComponent>
      <h1 className="text-center text-3xl font-semibold ">Posts</h1>
      {fetchingData && <Loader />}
      {!fetchingData && posts.length === 0 && (
        <p className="text-center mt-4">
          No post yet,{" "}
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
            <span className="bg-blue-400 mx-1 px-2 py-1 rounded-3xl text-sm">
              {post.purpose}
            </span>
          </div>
        ))}
    </CardComponent>
  );
};

export default Posts;
