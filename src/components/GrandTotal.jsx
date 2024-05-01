import PropTypes from "prop-types";
import largeRupeeIcon from "./../assets/large_rupee.svg";

GrandTotal.propTypes = {
	totalEarnings: PropTypes.number.isRequired,
};

export default function GrandTotal({ totalEarnings }) {
	return (
		<section className="flex">
			<img src={largeRupeeIcon} alt="rupee icon" />
			<strong className="patrick-hand-regular text-7xl text-green-800">
				{totalEarnings}
			</strong>
		</section>
	);
}
