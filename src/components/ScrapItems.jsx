import PropTypes from "prop-types";
import smallRupeeIcon from "./../assets/small_rupee.svg";

ScrapItems.propTypes = {
	items: PropTypes.array.isRequired,
	onHandleItemEarnings: PropTypes.func.isRequired,
};

Item.propTypes = {
	item: PropTypes.object.isRequired,
	onHandleItemEarnings: PropTypes.func.isRequired,
};

ItemName.propTypes = {
	name: PropTypes.string.isRequired,
};

export default function ScrapItems({ items, onHandleItemEarnings }) {
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
						onHandleItemEarnings={onHandleItemEarnings}
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
				<ItemName name={item.name} />

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
