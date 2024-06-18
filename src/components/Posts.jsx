import { useEffect, useState } from "react";
import CardComponent from "../Card/CardComponent";
import Loader from "./Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [fetchingData, setFetchingData] = useState(false);
  useEffect(() => {
    setFetchingData(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        setPosts(obj.posts);
        setFetchingData(false);
      });
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
              {post.title}
            </h3>
            <p className="text-md my-2 border px-3 py-2 rounded-2xl">
              {post.body}
            </p>
            {post.tags.map((tag) => (
              <span
                className="bg-blue-400 mx-1 px-2 py-1 rounded-3xl"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        ))}
    </CardComponent>
  );
};

export default Posts;
