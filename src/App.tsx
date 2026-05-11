import { RouterProvider } from "react-router-dom"

import { router } from "./routes"


export default function App() {
	return <div className="flex justify-around m-20 mx-0">
		<RouterProvider router={router} />
	</div>
}