import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import "../index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
