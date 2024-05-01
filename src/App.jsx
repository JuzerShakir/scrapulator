import { useState } from "react";
// import assets
// import editIcon from "./assets/edit.svg";
// import homeIcon from "./assets/home.svg";
import largeRupeeIcon from "./assets/large_rupee.svg";
import PropTypes from "prop-types";
// components
import Header from "./Header";
import ScrapItems from "./ScrapItems";

GrandTotal.propTypes = {
	totalEarnings: PropTypes.number.isRequired,
};

const scrapItems = [
	{ id: 1, name: "plastic", earningPerKg: 15, earnings: 0 },
	{ id: 2, name: "cardboard", earningPerKg: 8, earnings: 0 },
	{ id: 3, name: "paper", earningPerKg: 10, earnings: 0 },
	{ id: 4, name: "steel", earningPerKg: 40, earnings: 0 },
	{ id: 5, name: "iron", earningPerKg: 30, earnings: 0 },
	{ id: 6, name: "german", earningPerKg: 120, earnings: 0 },
];

function roundToNearestTenth(number) {
	return Math.round(number * 10) / 10;
}

function App() {
	const [items, setItems] = useState(scrapItems);
	const newTotalEarnings = items.reduce(
		(accumulator, item) => roundToNearestTenth(accumulator + item.earnings),
		0
	);

	function handleItemEarnings(id, weight) {
		// rescue against negative values
		if (weight < 0) return;

		setItems((items) =>
			items.map((item) =>
				item.id === id
					? {
							...item,
							earnings: roundToNearestTenth(weight * item.earningPerKg),
					  }
					: item
			)
		);
	}

	return (
		<>
			<Header />
			<ScrapItems items={items} onHandleItemEarnings={handleItemEarnings} />
			<GrandTotal totalEarnings={newTotalEarnings} />
			<Footer />
		</>
	);
}

function GrandTotal({ totalEarnings }) {
	return (
		<section className="flex">
			<img src={largeRupeeIcon} alt="rupee icon" />
			<strong className="patrick-hand-regular text-7xl text-green-800">
				{totalEarnings}
			</strong>
		</section>
	);
}

function Footer() {
	return (
		<footer className="mb-2">
			<copy className="roboto-condensed-light-italic text-xs md:text-sm tracking-wider md:tracking-wide">
				&copy; 2024 Created with ❤️ by Juzer Shakir
			</copy>
		</footer>
	);
}

export default App;
