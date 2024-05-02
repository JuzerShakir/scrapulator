import { ValidateItemsStateProps } from "./../propValidations";
import Header from "./../components/Edit/Header";
import ScrapItems from "../components/Edit/ScrapItems";
import Footer from "./../components/Footer";

Edit.propTypes = ValidateItemsStateProps;

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
