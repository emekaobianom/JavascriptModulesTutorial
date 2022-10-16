/**
 *  range between 0 to last(default 1)
 *
 */

export function getRandomOption(last = 1) {
	const randomNumber = Math.floor(Math.random() * (last + 1));
	return randomNumber;
}
