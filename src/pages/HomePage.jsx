import { useState } from "react";

import Header from "./../components/HomePage/Header";
import ScrapItems from "./../components/HomePage/ScrapItems";
import GrandTotal from "./../components/HomePage/GrandTotal";
import Footer from "./../components/HomePage/Footer";
import { scrapItemsList } from "../scrapItemsList";

function HomePage() {
	const [items, setItems] = useState(scrapItemsList);

	return (
		<>
			<Header />
			<ScrapItems items={items} setItems={setItems} />
			<GrandTotal items={items} />
			<Footer />
		</>
	);
}

export default HomePage;
