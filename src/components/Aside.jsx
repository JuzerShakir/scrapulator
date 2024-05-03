import { Link } from "react-router-dom";

export default function Aside({ icon, alt, linkTo }) {
	return (
		<aside className="w-1/4 self-end">
			<Link to={linkTo}>
				<img src={icon} alt={alt} className="w-7 cursor-pointer" />
			</Link>
		</aside>
	);
}
