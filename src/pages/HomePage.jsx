import { ValidateItemsStateProps } from "../propValidations";
import Header from "../components/Header";
import Aside from "../components/Aside";
import editIcon from "./../assets/edit.svg";
import ScrapItemsEarning from "../components/ScrapItemsEarning";
import GrandTotal from "./../components/GrandTotal";
import Footer from "./../components/Footer";

HomePage.propTypes = ValidateItemsStateProps;

function HomePage({ items, setItems }) {
	const subHeadings = [
		"Scrap calculations made easy",
		"Scrap value at your fingertips",
		"Calculate your scrap, calculate your earnings",
	];

	return (
		<>
			<Header title="Scrapulator" subHeadings={subHeadings} />
			<Aside icon={editIcon} alt="edit" linkTo="edit" />
			<ScrapItemsEarning items={items} setItems={setItems} />
			<GrandTotal items={items} />
			<Footer />
		</>
	);
}

export default HomePage;
