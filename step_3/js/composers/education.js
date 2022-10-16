import { getRandomOption } from "/js/shared/random.js";

//education

export function educationComposer(user) {
	const option = getRandomOption();

	switch (option) {
		case 0:
			return `I spent years hunning some of these skills while studying ${user.education}  in school. `;
		case 1:
			return `I studied ${user.education} in school. This is an edge I have over my peers in the field. `;
	}
}
