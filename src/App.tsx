import { RouterProvider } from "react-router-dom"
import { ProjectProvider } from "./context/ProjectContext"

import { router } from "./routes"


export default function App() {
	return <div className="flex justify-around m-20 mx-0">
		<ProjectProvider>
			<RouterProvider router={router} />
		</ProjectProvider>
	</div>
}