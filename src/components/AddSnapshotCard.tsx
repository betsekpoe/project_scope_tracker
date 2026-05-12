interface AddSnapshotCardProps {
	snapshot: {
		description: string
		image: string
		preview: string | null
	}
	onSnapshotChange: (snapshot: {
		description: string
		image: string
		preview: string | null
	}) => void
	onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onSubmit: (event: React.FormEvent) => void
}

const AddSnapshotCard = ({
	snapshot,
	onSnapshotChange,
	onImageChange,
	onSubmit,
}: AddSnapshotCardProps) => {
	return (
		<form onSubmit={onSubmit} className="timeline flex flex-col gap-6">
			<div className="flex flex-col p-5 gap-4">
				<div className="flex gap-5 rounded-lg bg-white">
					<label className="cursor-pointer">
						<input
							type="file"
							accept="image/*"
							className="hidden"
							onChange={onImageChange}
							required
						/>
						<img
							src={
								snapshot.preview ||
								"/images/image_upload_placeholder.png"
							}
							alt="Add Snapshot"
							className="w-40 h-28 object-cover rounded-md"
						/>
					</label>

					<div className="flex flex-col justify-center flex-1">
						<textarea
							required
							value={snapshot.description}
							onChange={(e) =>
								onSnapshotChange({
									...snapshot,
									description: e.target.value,
								})
							}
							className="text-xl text-gray-800 resize-none"
							placeholder="Snapshot description..."
						></textarea>
						<span className="text-xs text-gray-500">
							{new Date().toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
							})}
						</span>
					</div>
				</div>
				<button
					type="submit"
					className="text-white p-3 rounded-2xl w-fit cursor-pointer flex items-center gap-2 accentBtn"
				>
					<i className="fi fi-rr-square-plus"></i>
					<span>Create Project</span>
				</button>
			</div>
		</form>
	)
}

export default AddSnapshotCard
