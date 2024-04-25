// import { useState } from "react";
// import assets
// import editIcon from "./assets/edit.svg";
// import homeIcon from "./assets/home.svg";
import smallRupeeIcon from "./assets/small_rupee.svg";
import largeRupeeIcon from "./assets/large_rupee.svg";

const scrapItems = [
	{ id: 1, name: "plastic", price_per_kg: 15, amount: 0 },
	{ id: 2, name: "cardboard", price_per_kg: 8, amount: 0 },
	{ id: 3, name: "paper", price_per_kg: 10, amount: 0 },
	{ id: 4, name: "steel", price_per_kg: 40, amount: 0 },
	{ id: 5, name: "iron", price_per_kg: 30, amount: 0 },
	{ id: 6, name: "german", price_per_kg: 120, amount: 0 },
];

function App() {
	return (
		<>
			<Header />
			<ScrapItems />
			<GrandTotal />
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

function ScrapItems() {
	return (
		<main>
			<ul
				id="scrapItems"
				className="grow flex flex-col justify-center gap-5 px-6"
			>
				{scrapItems.map((item) => (
					<Item name={item.name} key={item.id} amount={item.amount} />
				))}
			</ul>
		</main>
	);
}

function Item({ name, amount }) {
	return (
		<li className="flex justify-end gap-10">
			{/* title */}
			<ItemName name={name} />

			{/* weight input */}
			<form className="flex gap-x-1 items-center">
				<input
					type="number"
					id={name}
					name={name}
					className="bg-amber-100 w-10 text-end text-amber-900 pr-1"
					placeholder="0"
				></input>
				<strong className="font-light">kgs</strong>
			</form>

			{/* amount */}
			<span className="w-16 flex gap-x-1 items-center">
				<img src={smallRupeeIcon} className="h-5" alt="rupee icon" />
				<strong className="patrick-hand-regular text-3xl text-yellow-700">
					{amount}
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

function GrandTotal() {
	return (
		<section className="flex">
			<img src={largeRupeeIcon} alt="rupee icon" />
			<strong className="patrick-hand-regular text-7xl text-green-800">
				220
			</strong>
		</section>
	);
}

export default App;
