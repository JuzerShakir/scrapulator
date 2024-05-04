import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { scrapItemsList } from "./scrapItemsList";

// pages
import HomePage from "./pages/HomePage";
import Edit from "./pages/Edit";

function App() {
	const [items, setItems] = useState(scrapItemsList);

	// routing
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage items={items} setItems={setItems} />,
		},
		{
			path: "/edit",
			element: <Edit items={items} setItems={setItems} />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
