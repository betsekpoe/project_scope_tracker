import { Link, useParams } from "react-router-dom"
import TimelineCard from "../components/TimelineCard"
import AddSnapshotCard from "../components/SnapshotCard"
import { useProjects } from "../context/ProjectContext"

const ProjectDetails = () => {
	const { projectId } = useParams()
	const { projects } = useProjects()

	const project = projects.find((proj) => proj.projectId === projectId)

	if (!project) {
		return <div>Project not found</div>
	}

	return (
		<div className="w-full flex flex-col gap-8 max-w-4xl mx-auto text-(----jet-black)">
			<div className="border-b border-gray-200 pb-6">
				<Link to={"/dashboard"}>
					<i className="fi fi-rr-arrow-left text-2xl hover:bg-(--accentColorMuted) rounded-lg px-4 py-1 w-fit"></i>
				</Link>
				<h1 className="text-3xl font-bold">{project.projectTitle}</h1>
				<p className="text-gray-600 mt-2">Project Timeline & Updates</p>
			</div>

			<div className="timeline flex flex-col gap-6">
				{project?.snapshots.map((snapshot) => (
					<TimelineCard
						key={snapshot.snapshotId}
						snapshotDescription={snapshot.snapshotDescription}
						snapshotDateAdded={snapshot.snapshotDateAdded}
						snapshotImage={snapshot.snapshotImage}
					/>
				))}

				<AddSnapshotCard />
			</div>
		</div>
	)
}

export default ProjectDetails
