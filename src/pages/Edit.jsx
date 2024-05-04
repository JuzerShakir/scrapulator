import { ValidateItemsStateProps } from "./../propValidations";
import Header from "../components/Header";
import Aside from "./../components/Aside";
import homeIcon from "./../assets/home.svg";
import ScrapItemsEditEarning from "../components/ScrapItemsEditEarning";
import GrandTotal from "../components/GrandTotal";
import Footer from "./../components/Footer";

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
