import { getRandomOption } from "/js/shared/random.js";
import { getFullnameOf } from "/js/shared/fullname.js";

//bio
export function bioComposer(user) {
	const option = getRandomOption();

	switch (option) {
		case 0:
			return `My name is ${getFullnameOf(user)}. I am a ${user.sex} from ${
				user.country
			}.`;
		case 1:
			return `I am humble to introduce my self as ${getFullnameOf(
				user
			)} from ${user.country}.`;
	}
}
