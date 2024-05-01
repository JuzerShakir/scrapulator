import ShowIcon from "../ShowIcon";
import homeIcon from "./../../assets/home.svg";

export default function Header() {
	return (
		<>
			<header className="flex flex-col items-center gap-1 w-full">
				<h1 className="patrick-hand-sc-regular text-6xl text-yellow-700">
					Edit Price
				</h1>
			</header>
			<aside className="w-1/4 self-end">{ShowIcon(homeIcon, "home")}</aside>
		</>
	);
}
