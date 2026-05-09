import ProjectsDisplay from "./ProjectsDisplay"

type Props = {}

function Dashboard({}: Props) {
	return (
		<div className="w-full px-50 ">
			{/* Top Section: Greeting & New Project Button */}
			<div className="flex items-center justify-between mb-20">
				<div>
					<h1>Morning' Joe 👋</h1>
					<p>message</p>
				</div>
				<div>
					<button className="text-white p-3 rounded-2xl cursor-pointer accentBtn flex items-center gap-2">
						<i className="fi fi-rr-multiple"></i>{" "}
						<span>New Project</span>
					</button>
				</div>
			</div>

			{/* Projects Table */}
			<div>
				<ProjectsDisplay />
			</div>
		</div>
	)
}

export default Dashboard
