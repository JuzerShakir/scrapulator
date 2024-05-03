import { ValidateItemsStateProps } from "../propValidations";
import Header from "./../components/HomePage/Header";
import ScrapItems from "./../components/HomePage/ScrapItems";
import GrandTotal from "./../components/HomePage/GrandTotal";
import Footer from "./../components/Footer";
import Aside from "../components/Aside";
import editIcon from "./../assets/edit.svg";

HomePage.propTypes = ValidateItemsStateProps;

function HomePage({ items, setItems }) {
	return (
		<>
			<Header />
			<Aside icon={editIcon} alt="edit" linkTo="edit" />
			<ScrapItems items={items} setItems={setItems} />
			<GrandTotal items={items} />
			<Footer />
		</>
	);
}

export default HomePage;
