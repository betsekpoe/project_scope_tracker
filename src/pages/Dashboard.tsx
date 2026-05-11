import ProjectsDisplay from "../components/ProjectsDisplay"
import Button from "../components/Button"

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
					<Button buttonText="New Project" route="/create-project" icon="fi fi-rr-multiple"/>
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
