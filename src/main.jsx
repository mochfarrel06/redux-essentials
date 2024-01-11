import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/home";
import store from "./app/store";
import {Provider} from "react-redux";
import SinglePost from "./pages/singlePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/posts/:postId",
    element: <SinglePost />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
