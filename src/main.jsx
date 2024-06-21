import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./components/Posts.jsx";
import CreatePost, { formSubmission } from "./components/CreatePost.jsx";
import UpcomingFeatures from "./components/UpcomingFeatures.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Posts />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: formSubmission,
      },
    ],
  },
  {
    path: "/*",
    element: <UpcomingFeatures />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
