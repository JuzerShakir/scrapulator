import { useState } from "react";
// import assets
// import editIcon from "./assets/edit.svg";
// import homeIcon from "./assets/home.svg";
import smallRupeeIcon from "./assets/small_rupee.svg";
import largeRupeeIcon from "./assets/large_rupee.svg";
import PropTypes from "prop-types";

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

GrandTotal.propTypes = {
	totalEarnings: PropTypes.number.isRequired,
};

const scrapItems = [
	{ id: 1, name: "plastic", earningPerKg: 15, earnings: 0 },
	{ id: 2, name: "cardboard", earningPerKg: 8, earnings: 0 },
	{ id: 3, name: "paper", earningPerKg: 10, earnings: 0 },
	{ id: 4, name: "steel", earningPerKg: 40, earnings: 0 },
	{ id: 5, name: "iron", earningPerKg: 30, earnings: 0 },
	{ id: 6, name: "german", earningPerKg: 120, earnings: 0 },
];

function roundToNearestTenth(number) {
	return Math.round(number * 10) / 10;
}

function App() {
	const [items, setItems] = useState(scrapItems);
	const newTotalEarnings = items.reduce(
		(accumulator, item) => roundToNearestTenth(accumulator + item.earnings),
		0
	);

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
		<>
			<Header />
			<ScrapItems items={items} onHandleItemEarnings={handleItemEarnings} />
			<GrandTotal totalEarnings={newTotalEarnings} />
		</>
	);
}

function Header() {
	return (
		<header>
			<h1 className="patrick-hand-sc-regular text-6xl text-yellow-700">
				Scrapulator
			</h1>
		</header>
	);
}

function ScrapItems({ items, onHandleItemEarnings }) {
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
						className="bg-amber-100 w-10 text-end text-amber-900 pr-1"
						placeholder="0"
						min="0"
						step="0.1"
						onChange={(e) => onHandleItemEarnings(item.id, e.target.value)}
					></input>
					<strong className="font-light">kgs</strong>
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

function GrandTotal({ totalEarnings }) {
	return (
		<section className="flex">
			<img src={largeRupeeIcon} alt="rupee icon" />
			<strong className="patrick-hand-regular text-7xl text-green-800">
				{totalEarnings}
			</strong>
		</section>
	);
}

export default App;
