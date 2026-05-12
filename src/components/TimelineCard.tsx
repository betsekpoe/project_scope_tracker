interface TimelineCardProps {
	snapshotDescription: string
	snapshotDateAdded: Date
	snapshotImage: string
}

const TimelineCard = ({
	snapshotDescription,
	snapshotImage,
	snapshotDateAdded,
}: TimelineCardProps) => {
	const formattedDate = snapshotDateAdded.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	})
	return (
		<div className="flex gap-5 p-5 rounded-lg bg-white hover:bg-gray-50 transition duration-150 cursor-pointer">
			<img
				src={snapshotImage}
				alt={snapshotDescription}
				className="w-40 h-28 object-cover rounded-md shrink-0"
			/>
			<div className="flex flex-col justify-center gap-3 flex-1">
				<p className="text-sm text-gray-800">{snapshotDescription}</p>
				<span className="text-xs text-gray-500">{formattedDate}</span>
			</div>
		</div>
	)
}
export default TimelineCard
