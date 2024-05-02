import PropTypes from "prop-types";
import Header from "./../components/Edit/Header";
import ScrapItems from "../components/Edit/ScrapItems";
import Footer from "./../components/Footer";

Edit.propTypes = {
	items: PropTypes.array.isRequired,
	setItems: PropTypes.func.isRequired,
};

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
