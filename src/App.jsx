// import { useState } from "react";
// import assets
// import editIcon from "./assets/edit.svg";
// import homeIcon from "./assets/home.svg";
import smallRupeeIcon from "./assets/small_rupee.svg";
import largeRupeeIcon from "./assets/large_rupee.svg";

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
			<h1 className="patrick-hand-sc-regular text-5xl text-yellow-700">
				Scrapulator
			</h1>
		</header>
	);
}

function ScrapItems() {
	return (
		<main
			id="scrapItems"
			className="grow flex flex-col justify-center gap-5 px-6"
		>
			{/* plastic */}
			<Item name="plastic" />
			<Item name="cardboard" />
			<Item name="paper" />
			<Item name="steel" />
			<Item name="iron" />
			<Item name="german" />
		</main>
	);
}

function Item(props) {
	return (
		<div className="flex justify-end gap-10">
			{/* title */}
			<label
				htmlFor={props.name}
				className="patrick-hand-regular text-2xl text-green-900"
			>
				{props.name}
			</label>

			{/* weight input */}
			<div className="flex gap-x-1 items-center">
				<input
					type="number"
					id={props.name}
					name={props.name}
					className="bg-amber-100 w-10 text-center"
					placeholder="0"
				></input>
				<strong className="font-light">kgs</strong>
			</div>

			{/* amount */}
			<div className="flex gap-x-1">
				<img src={smallRupeeIcon} alt="rupee icon" />
				<strong className="patrick-hand-regular text-2xl text-yellow-700">
					15
				</strong>
			</div>
		</div>
	);
}

function GrandTotal() {
	return (
		<section className="flex justify-center items-center mb-5">
			<img src={largeRupeeIcon} alt="rupee icon" />
			<strong className="patrick-hand-regular text-7xl text-green-800">
				220
			</strong>
		</section>
	);
}

export default App;
