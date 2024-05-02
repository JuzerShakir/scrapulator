import Header from "./../components/Edit/Header";
import ScrapItems from "../components/Edit/ScrapItems";
import Footer from "./../components/Footer";

function Edit({ items, setItems }) {
	return (
		<>
			<Header />
			<ScrapItems items={items} setItems={setItems} />
			<Footer />
		</>
	);
}

export default Edit;
