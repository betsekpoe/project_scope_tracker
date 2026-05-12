import TimelineCard from "../components/TimelineCard"
import { projectsData } from "../data/projectsData"

const ProjectDetails = () => {
	return (
		<div className="flex flex-col gap-8 max-w-4xl mx-auto">
			<div className="border-b border-gray-200 pb-6">
				<h1 className="text-3xl font-bold text-gray-900">
					Conference 2026
				</h1>
				<p className="text-gray-600 mt-2">Project Timeline & Updates</p>
			</div>

			<div className="timeline flex flex-col gap-6">
				{projectsData.map((project, index) => (
					<TimelineCard
						snapshotDescription={
							project.snapshots[index].snapshotDescription
						}
						snapshotDateAdded={
							project.snapshots[index].snapshotDateAdded
						}
						snapshotImage={project.snapshots[index].snapshotImage}
					/>
				))}
			</div>
		</div>
	)
}

export default ProjectDetails
