type Props = {
	projectTitle: string
	lastUpdated: Date
	projectStatus: string
	imageUrl: string
}

const ProjectCard = ({
	projectTitle,
	lastUpdated,
	projectStatus,
	imageUrl,
}: Props) => {
	const statusText =
		projectStatus.charAt(0).toUpperCase() + projectStatus.slice(1)

	const formattedDate = lastUpdated.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	})

	return (
		<div className="border border-gray-200 rounded-lg cursor-pointer transition ease-in-out duration-200 hover:shadow-lg hover:border-gray-300 bg-white overflow-hidden h-full flex flex-col">
			<img
				src={imageUrl}
				alt={projectTitle}
				className="w-full h-48 object-cover"
			/>
			<div className="flex flex-col gap-4 p-5 flex-grow">
				<h3 className="text-base font-semibold text-gray-900 line-clamp-2 leading-tight">{projectTitle}</h3>
				
				<div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
					<span className="text-xs text-gray-500">Updated {formattedDate}</span>
					<span className="project-status px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full capitalize">{statusText}</span>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
