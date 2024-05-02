import {
	ValidateItemsStateProps,
	ValidateItemEarningsProps,
} from "./../../propValidations";
import smallRupeeIcon from "./../../assets/small_rupee.svg";
import { roundToNearestTenth } from "../../roundToNearestTenth";

ScrapItems.propTypes = ValidateItemsStateProps;
Item.propTypes = ValidateItemEarningsProps;

export default function ScrapItems({ items, setItems }) {
	function handleItemEarnings(id, weight) {
		// rescue against negative values
		if (weight < 0) return;

		setItems((items) =>
			items.map((item) =>
				item.id === id
					? {
							...item,
							earnings: roundToNearestTenth(weight * item.earningPerKg),
					  }
					: item
			)
		);
	}

	return (
		<main>
			<ul
				id="scrapItems"
				className="grow flex flex-col justify-center gap-5 px-6"
			>
				{items.map((item) => (
					<Item
						key={item.id}
						item={item}
						onHandleItemEarnings={handleItemEarnings}
					/>
				))}
			</ul>
		</main>
	);
}

function Item({ item, onHandleItemEarnings }) {
	return (
		<li className="flex justify-end gap-7">
			<form className="flex gap-7" onSubmit={(e) => e.preventDefault()}>
				{/* title */}
				<label
					htmlFor={item.name}
					className="patrick-hand-regular text-3xl text-green-900"
				>
					{item.name}
				</label>

				{/* weight input */}
				<span className="flex gap-x-1 items-center">
					<input
						type="number"
						id={item.name}
						name={item.name}
						className="nunito-sans-semibold bg-amber-100 w-10 text-end text-amber-900 pr-1 border-b-2 border-yellow-600 focus:border-yellow-900 focus:outline-none"
						placeholder="0"
						min="0"
						step="0.1"
						onChange={(e) => onHandleItemEarnings(item.id, e.target.value)}
					></input>
					<strong className="roboto-condensed-normal">kgs</strong>
				</span>
			</form>

			{/* earnings */}
			<span className="w-16 flex items-center">
				<img src={smallRupeeIcon} className="h-5" alt="rupee icon" />
				<strong className="patrick-hand-regular text-3xl text-yellow-700">
					{item.earnings}
				</strong>
			</span>
		</li>
	);
}
