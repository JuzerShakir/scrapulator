import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

// pages
import HomePage from "./pages/HomePage";
import Edit from "./pages/Edit";

// stylings
import "./index.css";

// routing
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/edit",
		element: <Edit />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
