import { useState, useEffect } from "react";

export default function Header({ title, subHeadings }) {
	return (
		<>
			<header className="flex flex-col items-center gap-1 w-full">
				<h1 className="patrick-hand-sc-regular text-6xl text-yellow-700">
					{title}
				</h1>
				<h2 className="patrick-hand-regular text-lg text-yellow-700 tracking-wider">
					<SubHeading subHeadings={subHeadings} />
				</h2>
			</header>
		</>
	);
}

function SubHeading({ subHeadings }) {
	const [currentSubheadingIndex, setCurrentSubheadingIndex] = useState(0);

	// Function to cycle through subheadings
	const changeSubheading = () => {
		setCurrentSubheadingIndex(
			(prevIndex) => (prevIndex + 1) % subHeadings.length
		);
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			changeSubheading();
		}, 2500); // Change subheading every 2.5 seconds

		return () => clearInterval(intervalId);
	});

	return subHeadings[currentSubheadingIndex];
}
