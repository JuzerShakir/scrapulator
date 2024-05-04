export default function roundToNearestPlace(number, place = 1) {
	if (place === 0) return;
	const a = place * 10;

	return Math.round(number * a) / a;
}
