import { ValidateItemsStateProps } from "./../propValidations";
import Header from "./../components/Edit/Header";
import ScrapItems from "../components/Edit/ScrapItems";
import Footer from "./../components/Footer";
import Aside from "./../components/Aside";
import homeIcon from "./../assets/home.svg";

Edit.propTypes = ValidateItemsStateProps;

function Edit({ items, setItems }) {
	return (
		<>
			<Header />
			<Aside icon={homeIcon} alt="home" linkTo="/" />
			<ScrapItems items={items} setItems={setItems} />
			<Footer />
		</>
	);
}

export default Edit;
