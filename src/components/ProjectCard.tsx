import { useNavigate } from "react-router-dom"

type Props = {
	projectId: string
	projectTitle: string
	lastUpdated: Date
	projectStatus: "in progress" | "completed"
	imageUrl: string
}

const ProjectCard = ({
	projectId,
	projectTitle,
	lastUpdated,
	projectStatus = "in progress",
	imageUrl,
}: Props) => {
	const statusText =
		projectStatus.charAt(0).toUpperCase() + projectStatus.slice(1)

	let statusClass = "inprogress"

	if (projectStatus == "completed") {
		statusClass = "completed"
	}

	const formattedDate = lastUpdated.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	})

	const navigate = useNavigate()

	return (
		<div
			className="border border-gray-200 rounded-lg cursor-pointer transition ease-in-out duration-200 hover:shadow-lg hover:border-gray-300 bg-white overflow-hidden h-full flex flex-col"
			onClick={() => {
				navigate(`/project/${projectId}`)
			}}
		>
			<img
				src={imageUrl}
				alt={projectTitle}
				className="w-full h-48 object-cover"
			/>
			<div className="flex flex-col gap-4 p-5 grow">
				<h3 className="text-base font-semibold text-gray-900 line-clamp-2 leading-tight">
					{projectTitle}
				</h3>

				<div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
					<span className="text-xs text-gray-500">
						Updated {formattedDate}
					</span>
					<span
						className={`${statusClass} project-status px-3 py-1.5 text-xs font-medium bg-blue-50 rounded-full capitalize`}
					>
						{statusText}
					</span>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
