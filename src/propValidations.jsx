import PropTypes from "prop-types";

const ValidateHeaderProps = {
	title: PropTypes.string.isRequired,
	subHeadings: PropTypes.array.isRequired,
};

const ValidateItemsStateProps = {
	items: PropTypes.array.isRequired,
	setItems: PropTypes.func.isRequired,
};

const ValidateItemEarningsProps = {
	item: PropTypes.object.isRequired,
	onHandleItemEarnings: PropTypes.func.isRequired,
};

const ValidateItemEarningsPerKgProps = {
	item: PropTypes.object.isRequired,
	onHandleItemEarningPerKg: PropTypes.func.isRequired,
};

const ValidateItemsProp = {
	items: PropTypes.array.isRequired,
};

const ValidateAsideProps = {
	icon: PropTypes.oneOf(["svg"]).isRequired,
	alt: PropTypes.string.isRequired,
	linkTo: PropTypes.string.isRequired,
};

export {
	ValidateHeaderProps,
	ValidateItemsStateProps,
	ValidateItemEarningsProps,
	ValidateItemEarningsPerKgProps,
	ValidateItemsProp,
	ValidateAsideProps,
};
