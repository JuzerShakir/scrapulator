import { useState } from "react";

import Header from "./../components/HomePage/Header";
import ScrapItems from "./../components/HomePage/ScrapItems";
import GrandTotal from "./../components/HomePage/GrandTotal";
import Footer from "./../components/HomePage/Footer";
import { scrapItemsList } from "../scrapItemsList";

function roundToNearestTenth(number) {
	return Math.round(number * 10) / 10;
}

function HomePage() {
	const [items, setItems] = useState(scrapItemsList);
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
