export default function ShowIcon(icon, alt) {
	return (
		<img src={icon} alt={alt} className="w-7 md:w-9 lg:w-11 cursor-pointer" />
	);
}
