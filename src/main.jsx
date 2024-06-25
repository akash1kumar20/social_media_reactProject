import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./components/Posts.jsx";
import CreatePost, { formSubmission } from "./components/CreatePost.jsx";
import UpcomingFeatures from "./components/UpcomingFeatures.jsx";
import AddAccount from "./account_access/AddAccount.jsx";
import EditPost from "./components/EditPost.jsx";
import { AuthContextProvider } from "./store/auth-context.jsx";
import ChangePassword from "./account_access/ChangePassword.jsx";

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
        path: "/*/:otherRoutes",
        element: <UpcomingFeatures />,
      },
      {
        path: "/edit-post",
        element: <EditPost />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: formSubmission,
      },
    ],
  },
  {
    path: "/login-signup",
    element: <AddAccount />,
  },
  {
    path: "/changePassword",
    element: <ChangePassword />,
  },
  { path: "*", element: <UpcomingFeatures /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthContextProvider>
);
