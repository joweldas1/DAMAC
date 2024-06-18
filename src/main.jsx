import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {  RouterProvider } from "react-router-dom";
import router from "./route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-full lg:max-w-[1360px] mx-auto px-1">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
