import { ValidateItemsStateProps } from "./../propValidations";
import Header from "../components/Header";
import ScrapItems from "../components/Edit/ScrapItems";
import GrandTotal from "../components/HomePage/GrandTotal";
import Footer from "./../components/Footer";
import Aside from "./../components/Aside";
import homeIcon from "./../assets/home.svg";

Edit.propTypes = ValidateItemsStateProps;

function Edit({ items, setItems }) {
	const subHeadings = ["Enter custom price", "Prices update instantly"];

	return (
		<>
			<Header title="Edit Price" subHeadings={subHeadings} />
			<Aside icon={homeIcon} alt="home" linkTo="/" />
			<ScrapItemsEditEarning items={items} setItems={setItems} />
			<GrandTotal items={items} />
			<Footer />
		</>
	);
}

export default Edit;
