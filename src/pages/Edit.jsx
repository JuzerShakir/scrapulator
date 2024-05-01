import { useState } from "react";

import Header from "./../components/Edit/Header";
import ScrapItems from "../components/Edit/ScrapItems";
import { scrapItemsList } from "../scrapItemsList";

function Edit() {
	const [items, setItems] = useState(scrapItemsList);

	return (
		<>
			<Header />
			<ScrapItems items={items} setItems={setItems} />
		</>
	);
}

export default Edit;
