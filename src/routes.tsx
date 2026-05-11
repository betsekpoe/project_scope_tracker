import { createBrowserRouter } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import CreateProject from "./pages/CreateProject"
import Home from "./pages/Home"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},

	{
		path: "/dashboard",
		element: <Dashboard />,
	},

	{
		path: "/create-project",
		element: <CreateProject />,
	},
])
