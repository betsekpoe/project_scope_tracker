import ProjectCard from "./ProjectCard"
import ProjectsListBar from "./ProjectsListBar"

import { projectsData } from "../data/projectsData"

type Props = {}

const ProjectsDisplay = ({}: Props) => {
	return (
		<div>
			<ProjectsListBar />

			<table className="w-full">
				<tbody className="grid grid-cols-4 gap-4">
					{projectsData.map((projectsData, index) => (
						<ProjectCard
							key={index}
							projectTitle={projectsData.projectTitle}
							lastUpdated={projectsData.lastUpdated}
							projectStatus={projectsData.projectStatus}
							imageUrl={projectsData.imageUrl}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default ProjectsDisplay
