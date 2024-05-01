import PropTypes from "prop-types";
import largeRupeeIcon from "./../../assets/large_rupee.svg";
import { roundToNearestTenth } from "../../roundToNearestTenth";

GrandTotal.propTypes = {
	items: PropTypes.array.isRequired,
};

export default function GrandTotal({ items }) {
	const totalEarnings = items.reduce(
		(accumulator, item) => roundToNearestTenth(accumulator + item.earnings),
		0
	);

	return (
		<section className="flex">
			<img src={largeRupeeIcon} alt="rupee icon" />
			<strong className="patrick-hand-regular text-7xl text-green-800">
				{totalEarnings}
			</strong>
		</section>
	);
}