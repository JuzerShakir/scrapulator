export default function ShowIcon({ icon, alt }) {
	return (
		<aside className="w-1/4 self-end">
			<img src={icon} alt={alt} className="w-7 md:w-9 cursor-pointer" />
		</aside>
	);
}
