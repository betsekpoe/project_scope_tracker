type Props = {}

const ProjectsListBar = ({}: Props) => {
	return (
		<>
			<div className="flex justify-between">
				<h2 className="title">Projects</h2>
				<div className="flex">
					<div className="flex items-center gap-4">
						<i className="fi fi-rr-search text-(--accentColor)"></i>{" "}
						<input
							type="text"
							name="searchProject"
							id="searchProject"
							placeholder="Search Projects"
							className="focus:text-(--accentColor) w-40"
						/>
						Sort By:
						<select
							name="projectsSearchFilter"
							id="projectsSearchFilter"
						>
							<option value="in-progess">In Progess</option>
							<option value="Completed">Completed</option>
						</select>
					</div>
				</div>
			</div>
			<br />
			<hr className="border-gray-300 " />
			<br />
		</>
	)
}

export default ProjectsListBar
