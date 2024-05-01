import { useState, useEffect } from "react";
import ShowIcon from "../ShowIcon";
import editIcon from "./../assets/edit.svg";

export default function Header() {
	return (
		<>
			<header className="flex flex-col items-center gap-1 w-full">
				<h1 className="patrick-hand-sc-regular text-6xl text-yellow-700">
					Scrapulator
				</h1>
				<h2 className="patrick-hand-regular text-lg text-yellow-700 tracking-wider">
					<SubHeading />
				</h2>
			</header>
			<aside className="w-1/4 self-end">{ShowIcon(editIcon, "edit")}</aside>
		</>
	);
}

function SubHeading() {
	const subHeadings = [
		"Scrap calculations made easy",
		"Scrap value at your fingertips",
		"Calculate your scrap, calculate your earnings",
	];

	const [currentSubheadingIndex, setCurrentSubheadingIndex] = useState(0);

	// Function to cycle through subheadings
	const changeSubheading = () => {
		setCurrentSubheadingIndex(
			(prevIndex) => (prevIndex + 1) % subHeadings.length
		);
	};

	// Change subheading every 5 seconds
	useEffect(() => {
		const intervalId = setInterval(() => {
			changeSubheading();
		}, 5000); // Change subheading every 5 seconds

		return () => clearInterval(intervalId);
	});

	return subHeadings[currentSubheadingIndex];
}
