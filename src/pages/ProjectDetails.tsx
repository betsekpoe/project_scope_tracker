import image3 from "../../public/snapshots/p1-3.png"
import image1 from "../../public/snapshots/p1-1.png"

import TimelineCard from "../components/TimelineCard"

const ProjectDetails = () => {
	return (
		<div className="flex flex-col gap-8 max-w-4xl mx-auto">
			<div className="border-b border-gray-200 pb-6">
				<h1 className="text-3xl font-bold text-gray-900">Conference 2026</h1>
				<p className="text-gray-600 mt-2">Project Timeline & Updates</p>
			</div>

			<div className="timeline flex flex-col gap-6">
				<TimelineCard
					snapshotDescription="Data visualization explorations for sustainability metrics"
					snapshotDateAdded={new Date("2026-03-05")}
					snapshotImage={image3}
				/>

				<TimelineCard
					snapshotDescription="Final layouts with print specifications and color management"
					snapshotDateAdded={new Date("2026-04-25")}
					snapshotImage={image1}
				/>
			</div>
		</div>
	)
}

export default ProjectDetails
