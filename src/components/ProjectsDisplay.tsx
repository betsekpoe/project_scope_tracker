import ProjectCard from "./ProjectCard"
import ProjectsListBar from "./ProjectsListBar"

import { useProjects } from "../context/ProjectContext"

const ProjectsDisplay = () => {
	const { projects } = useProjects()

	return (
		<>
			<ProjectsListBar />

			<table className="w-full">
				<tbody className="grid grid-cols-4 gap-4">
					{projects.map((projectsData) => (
						<ProjectCard
							key={projectsData.projectId}
							projectId={projectsData.projectId}
							projectTitle={projectsData.projectTitle}
							lastUpdated={projectsData.lastUpdated}
							projectStatus={
								projectsData.projectStatus as
									| "in progress"
									| "completed"
							}
							imageUrl={projectsData.imageUrl}
						/>
					))}
				</tbody>
			</table>
		</>
	)
}

export default ProjectsDisplay
