import { useState } from "react";

import Header from "./../components/HomePage/Header";
import ScrapItems from "./../components/HomePage/ScrapItems";
import GrandTotal from "./../components/HomePage/GrandTotal";
import Footer from "./../components/HomePage/Footer";

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

function HomePage() {
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

export default HomePage;
