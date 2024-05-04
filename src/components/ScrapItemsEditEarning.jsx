import {
	ValidateItemsStateProps,
	ValidateItemEarningsPerKgProps,
} from "../propValidations";
import smallRupeeIcon from "../assets/small_rupee.svg";

ScrapItemsEditEarning.propTypes = ValidateItemsStateProps;
Item.propTypes = ValidateItemEarningsPerKgProps;

export default function ScrapItemsEditEarning({ items, setItems }) {
	function handleItemEarningPerKg(id, amount) {
		// rescue against negative values
		if (amount < 1) return;

		const roundingAmount = Math.round(amount);

		setItems((items) =>
			items.map((item) =>
				item.id === id
					? {
							...item,
							earningPerKg: roundingAmount,
							earnings: roundingAmount * item.weight,
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
						onHandleItemEarningPerKg={handleItemEarningPerKg}
					/>
				))}
			</ul>
		</main>
	);
}

function Item({ item, onHandleItemEarningPerKg }) {
	return (
		<li className="flex justify-end">
			<form
				className="flex items-center gap-x-12"
				onSubmit={(e) => e.preventDefault()}
			>
				{/* title */}
				<label
					htmlFor={item.name}
					className="patrick-hand-regular text-3xl text-green-900"
				>
					{item.name}
				</label>

				{/* weight input */}
				<span className="flex gap-x-1 items-end">
					<img
						src={smallRupeeIcon}
						className="h-5 self-center"
						alt="rupee icon"
					/>
					<input
						type="number"
						id={item.name}
						name={item.name}
						className="nunito-sans-semibold bg-amber-100 w-14 text-end text-amber-900 pr-1 border-b-2 border-yellow-600 focus:border-yellow-900 focus:outline-none"
						placeholder={item.earningPerKg}
						min="1"
						step="1"
						onChange={(e) =>
							onHandleItemEarningPerKg(item.id, Number(e.target.value))
						}
					></input>
					<strong className="roboto-condensed-normal">per kg</strong>
				</span>
			</form>
		</li>
	);
}
