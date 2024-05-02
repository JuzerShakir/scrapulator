import PropTypes from "prop-types";

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

export {
	ValidateItemsStateProps,
	ValidateItemEarningsProps,
	ValidateItemEarningsPerKgProps,
	ValidateItemsProp,
};
