import getRandomOption ,{getFullnameOf} from "/js/parts/helpers.js";

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

//======================
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

//===========================
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

//================================
//skills

export function skillsComposer(user) {
  const option = getRandomOption();

  switch (option) {
    case 0:
      return `I would love to work in your company because I have the necessary skills you will need. - they are ${getSkillsFrom(
        user
      )} etc.`;
    case 1:
      return `Over the years I have gained wonderful skills with experiences to back them up - they are - ${getSkillsFrom(
        user
      )} etc.`;
  }
}

function getSkillsFrom(user) {
  return `${user.skill1}, ${user.skill2}, ${user.skill3}`;
}