import { useState } from "react"
import {useNavigate, useParams }from "react-router-dom"
import { useProjects} from "../context/ProjectContext"

const SnapshotCard = () => {
	const [preview, setPreview] = useState<string | null>(null)
	const [description, setDescription] = useState("")
	const [imageFile, setImageFile] = useState<File | null>(null)

	const navigate = useNavigate()
	const { projectId } = useParams()
	const { addSnapshot } = useProjects()

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setPreview(URL.createObjectURL(file))
			setImageFile(file)
		}
	}
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
	
		if (!preview || !description || !projectId) return
	
		// Add snapshot to existing project
		addSnapshot(projectId, {
			snapshotDescription: description,
			snapshotImage: preview,
			snapshotDateAdded: new Date(),
		})

		// Navigate back to project details page
		navigate(`/project/${projectId}`)

		// Reset form
		setPreview(null)
		setDescription("")
		setImageFile(null)
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col p-5 gap-4">
			<div className="flex gap-5 rounded-lg bg-white">
				<label className="cursor-pointer">
					<input
						type="file"
						accept="image/*"
						className="hidden"
						onChange={handleImageChange}
					/>
					<img
						src={preview || '../../public/images/image_upload_placeholder.png'}
						alt="Add Snapshot"
						className="w-40 h-28 object-cover rounded-md"
					/>
				</label>

				<div className="flex flex-col justify-center flex-1">
					<textarea
						value={description}
						onChange={(event) => setDescription(event.target.value)}
						required
						className="text-xl text-gray-800 resize-none"
						placeholder="Snapshot description..."
					></textarea>
					<span className="text-xs text-gray-500">
						{new Date().toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
						})}
					</span>
				</div>
			</div>
			<div className="text-white p-3 rounded-2xl w-fit cursor-pointer flex items-center gap-2  accentBtn">
				<i className="fi fi-rr-square-plus"></i>
				<input type="submit" value="Add Snapshot" />
			</div>
		</form>
	)
}

export default SnapshotCard
