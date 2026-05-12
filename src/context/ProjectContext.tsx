import { createContext, useContext, useState, type ReactNode } from "react"

interface Snapshot {
	snapshotId: string
	snapshotIndex: number
	snapshotDescription: string
	snapshotImage: string
	snapshotDateAdded: Date
	version: string
}

interface Project {
	projectId: string
	projectTitle: string
	description: string
	dateCreated: Date
	lastUpdated: Date
	projectStatus: string
	snapshots: Snapshot[]
	imageUrl: string
}

interface ProjectContextType {
	projects: Project[]
	addProject: (project: Omit<Project, "projectId" | "dateCreated" | "imageUrl">) => string
	addSnapshot: (projectId: string, snapshot: Omit<Snapshot, "snapshotId" | "snapshotIndex" | "version">) => void
	updateProjectTitle: (projectId: string, title: string) => void
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined)

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
	const [projects, setProjects] = useState<Project[]>([
		// Your existing projectsData here
	])

	const addProject = (project: Omit<Project, "projectId" | "dateCreated" | "imageUrl">) => {
		const newProjectId = `proj_${Date.now()}`
		const newProject: Project = {
			...project,
			projectId: newProjectId,
			dateCreated: new Date(),
			imageUrl: project.snapshots[project.snapshots.length - 1]?.snapshotImage || "",
		}
		setProjects([...projects, newProject])
		return newProjectId
	}

	const addSnapshot = (projectId: string, snapshot: Omit<Snapshot, "snapshotId" | "snapshotIndex" | "version">) => {
		setProjects(projects.map(project => {
			if (project.projectId === projectId) {
				const newSnapshotId = `snap_${Date.now()}`
				const newSnapshot: Snapshot = {
					...snapshot,
					snapshotId: newSnapshotId,
					snapshotIndex: project.snapshots.length + 1,
					version: `v1.${project.snapshots.length}`,
				}
				return {
					...project,
					snapshots: [...project.snapshots, newSnapshot],
					lastUpdated: new Date(),
					imageUrl: newSnapshot.snapshotImage,
				}
			}
			return project
		}))
	}

	const updateProjectTitle = (projectId: string, title: string) => {
		setProjects(projects.map(project => 
			project.projectId === projectId 
				? { ...project, projectTitle: title, lastUpdated: new Date() }
				: project
		))
	}

	return (
		<ProjectContext.Provider value={{ projects, addProject, addSnapshot, updateProjectTitle }}>
			{children}
		</ProjectContext.Provider>
	)
}

export const useProjects = () => {
	const context = useContext(ProjectContext)
	if (!context) {
		throw new Error("useProjects must be used within ProjectProvider")
	}
	return context
}