export const projectsData = [
	{
		projectId: "001",
		projectTitle: "Conference 2026",
		description:
			"Complete brand identity overhaul including logo, color palette, and typography system.",

		dateCreated: new Date("2026-01-15"),
		lastUpdated: new Date("2026-05-08"),
		projectStatus: "in progress",
		get imageUrl() {
			return this.snapshots[this.snapshots.length - 1]?.snapshotImage;
		},

		snapshots: [
			{
				snapshotId: "snap_001",
				snapshotIndex: 1,
				snapshotDescription:
					"First round of logo explorations focusing on minimalist geometric approach",
				snapshotImage: "/src/snapshots/p1-1.png",
				snapshotDateAdded: new Date("2026-01-20"),
				version: "v1.0",
			},
			{
				snapshotId: "snap_009",
				snapshotIndex: 2,
				snapshotTitle: "Infographic Concepts",
				snapshotDescription:
					"Data visualization explorations for sustainability metrics",
				snapshotImage: "/src/snapshots/p1-2.png",
				snapshotDateAdded: new Date("2026-03-05"),
				version: "v1.0",
			},
			{
				snapshotId: "snap_010",
				snapshotIndex: 3,
				snapshotTitle: "Print-Ready Pages",
				snapshotDescription:
					"Final layouts with print specifications and color management",
				snapshotImage: "/src/snapshots/p1-3.png",
				snapshotDateAdded: new Date("2026-04-25"),
				version: "v2.0",
			},
		],
	},
]