import PropTypes from "prop-types";
import smallRupeeIcon from "./../../assets/small_rupee.svg";

ScrapItems.propTypes = {
	items: PropTypes.array.isRequired,
	setItems: PropTypes.func.isRequired,
};

Item.propTypes = {
	item: PropTypes.object.isRequired,
	onHandleItemEarningPerKg: PropTypes.func.isRequired,
};

ItemName.propTypes = {
	name: PropTypes.string.isRequired,
};

export default function ScrapItems({ items, setItems }) {
	function handleItemEarningPerKg(id, amount) {
		// rescue against negative values
		if (amount <= 0) return;

		setItems((items) =>
			items.map((item) =>
				item.id === id
					? {
							...item,
							earningPerKg: amount,
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
		<li className="flex justify-end gap-7">
			<form className="flex gap-7" onSubmit={(e) => e.preventDefault()}>
				{/* title */}
				<ItemName name={item.name} />

				{/* weight input */}
				<span className="flex gap-x-1">
					<img src={smallRupeeIcon} className="h-5" alt="rupee icon" />
					<input
						type="number"
						id={item.name}
						name={item.name}
						className="nunito-sans-semibold bg-amber-100 w-10 text-end text-amber-900 pr-1 border-b-2 border-yellow-600 focus:border-yellow-900 focus:outline-none"
						placeholder={item.earningPerKg}
						min="0"
						step="0.1"
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

function ItemName({ name }) {
	return (
		<label
			htmlFor={name}
			className="patrick-hand-regular text-3xl text-green-900"
		>
			{name}
		</label>
	);
}
