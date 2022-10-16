import { getRandomOption } from "/js/shared/random.js";

//conclusion

export function conclusionComposer(user) {
	const option = getRandomOption();

	switch (option) {
		case 0:
			return "Hoping to here from you soon.";
		case 1:
			return "I will wait passionately believing you will give me a chance to prove myself.";
	}
}
