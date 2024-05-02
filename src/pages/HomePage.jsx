import PropTypes from "prop-types";
import Header from "./../components/HomePage/Header";
import ScrapItems from "./../components/HomePage/ScrapItems";
import GrandTotal from "./../components/HomePage/GrandTotal";
import Footer from "./../components/Footer";

HomePage.propTypes = {
	items: PropTypes.array.isRequired,
	setItems: PropTypes.func.isRequired,
};

function HomePage({ items, setItems }) {
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
