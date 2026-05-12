import { Link } from "react-router-dom"
import AddSnapshotCard from "../components/SnapshotCard"

const CreateProject = () => {
	return (
		<div className="w-full flex flex-col gap-8 max-w-4xl mx-auto text-(----jet-black)">
			<div className="border-b border-gray-200 pb-6">
				<Link to={"/dashboard"}>
					<i className="fi fi-rr-arrow-left text-2xl hover:bg-(--accentColorMuted) rounded-lg px-4 py-1 w-fit"></i>
				</Link>

				<input required className="text-5xl font-bold h-11" placeholder="Project Title"/>
				<p className="text-gray-600 mt-2">Project Timeline & Updates</p>
			</div>

			<div className="timeline flex flex-col gap-6">
				<AddSnapshotCard />
			</div>
		</div>
	)
}

export default CreateProject