import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./components/Posts.jsx";
import CreatePost from "./components/CreatePost.jsx";
import MainComponent from "./components/MainComponent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainComponent />,
        children: [
          {
            path: "/",
            element: <Posts />,
          },
          {
            path: "/create-post",
            element: <CreatePost />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
