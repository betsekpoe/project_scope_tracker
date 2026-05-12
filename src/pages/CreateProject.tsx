import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useProjects } from "../context/ProjectContext"
import SnapshotCard from "../components/SnapshotCard"
import AddSnapshotCard from "../components/AddSnapshotCard"

const CreateProject = () => {
	const [title, setTitle] = useState("")
	const [firstSnapshot, setFirstSnapshot] = useState({
		description: "",
		image: "",
		preview: null as string | null,
	})

	const navigate = useNavigate()
	const { addProject } = useProjects()

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const preview = URL.createObjectURL(file)
			setFirstSnapshot({
				...firstSnapshot,
				image: preview,
				preview: preview,
			})
		}
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		if (!title || !firstSnapshot.image || !firstSnapshot.description) return

		const newProjectId = addProject({
			projectTitle: title,
			description: "",
			lastUpdated: new Date(),
			projectStatus: "in progress",
			snapshots: [
				{
					snapshotDescription: firstSnapshot.description,
					snapshotImage: firstSnapshot.image,
					snapshotDateAdded: new Date(),
				} as any, // Type assertion to satisfy the Snapshot type, since we're omitting snapshotId, snapshotIndex, and version
			],
		})

		navigate(`/project/${newProjectId}`)
	}

	return (
		<div className="w-full flex flex-col gap-8 max-w-4xl mx-auto text-(----jet-black)">
			<div className="border-b border-gray-200 pb-6">
				<Link to={"/dashboard"}>
					<i className="fi fi-rr-arrow-left text-2xl hover:bg-(--accentColorMuted) rounded-lg px-4 py-1 w-fit"></i>
				</Link>

				<input
					required
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					className="text-5xl font-bold h-11"
					placeholder="Project Title"
				/>
				<p className="text-gray-600 mt-2">Project Timeline & Updates</p>
			</div>

			<AddSnapshotCard
				snapshot={firstSnapshot}
				onSnapshotChange={setFirstSnapshot}
				onImageChange={handleImageChange}
				onSubmit={handleSubmit}
			/>
		</div>
	)
}

export default CreateProject
