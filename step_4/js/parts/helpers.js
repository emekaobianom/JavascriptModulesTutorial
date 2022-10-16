export function getRandomCvColor() {
  const cvColor = [
    "lightgreen",
    "yellow",
    "skyblue",
    "pink",
    "orange",
    "white",
  ];
  return cvColor[getRandomOption(cvColor.length - 1)];
}


/**
 *  range between 0 to last(default 1)
 *
 */

 export default function getRandomOption(last = 1) {
	const randomNumber = Math.floor(Math.random() * (last + 1));
	return randomNumber;
}


export function getFullnameOf(user) {
	return `${user.lastname} ${user.middlename} ${user.firstname}`;
}
