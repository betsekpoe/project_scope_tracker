type Props = {
	projectTitle: string
	lastUpdated: Date
	projectStatus: string
	imageUrl: string
}

const ProjectCard = ({projectTitle, lastUpdated, projectStatus, imageUrl }: Props) => {
	const statusText =
		projectStatus.charAt(0).toUpperCase() + projectStatus.slice(1)

		const formattedDate = lastUpdated.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric'
		})

	return (
		<div className="border p-4">
			<img src={imageUrl} alt="" className="h-10" />
			<p>{projectTitle}</p>
			<p>Last Updated {formattedDate}</p>
			<p>{statusText}</p>
		</div>
	)
}

export default ProjectCard
