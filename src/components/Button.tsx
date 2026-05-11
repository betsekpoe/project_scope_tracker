import { useNavigate } from "react-router-dom"

interface ButtonProps {
	buttonText: string
	route: string
	icon?: string
}

const Button = ({
	buttonText,
	route,
	icon = "fi fi-rr-angle-circle-right",
}: ButtonProps) => {
	const navigate = useNavigate()
	return (
		<button
			className="text-white p-3 rounded-2xl cursor-pointer flex items-center gap-2  accentBtn"
			onClick={() => navigate(route)}
		>
			<i className={`${icon} flex items-center`}></i>
			<span>{buttonText}</span>
		</button>
	)
}

export default Button
