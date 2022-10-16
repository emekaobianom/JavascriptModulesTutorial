function getRandomCvColor() {
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

//bio
function bioComposer(user) {
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

function getFullnameOf(user) {
	return `${user.lastname} ${user.middlename} ${user.firstname}`;
}

//skills

function skillsComposer(user) {
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

//education

function educationComposer(user) {
	const option = getRandomOption();

	switch (option) {
		case 0:
			return `I spent years hunning some of these skills while studying ${user.education}  in school. `;
		case 1:
			return `I studied ${user.education} in school. This is an edge I have over my peers in the field. `;
	}
}

//conclusion

function conclusionComposer(user) {
	const option = getRandomOption();

	switch (option) {
		case 0:
			return "Hoping to here from you soon.";
		case 1:
			return "I will wait passionately believing you will give me a chance to prove myself.";
	}
}

/**
 *  range between 0 to last(default 1)
 *
 */

function getRandomOption(last = 1) {
	const randomNumber = Math.floor(Math.random() * (last + 1));
	return randomNumber;
}

//-------------generate CV--------------

const emeka = {
	firstname: "Emeka",
	middlename: "Sunday",
	lastname: "Obianom",
	country: "Nigeria",
	sex: "male",
	skill1: "HTML",
	skill2: "CSS",
	skill3: "Javascript",
	education: "Computer engineering",
};
const vivian = {
	firstname: "Vivian",
	middlename: "Uchechi",
	lastname: "Obianom",
	country: "USA",
	sex: "female",
	skill1: "Supply Chain",
	skill2: "Distribution management",
	skill3: "Project management",
	education: "Purchasing and Supply",
};

function generateCvFor(user) {
	const cvBody = `
            ${bioComposer(user)} ${skillsComposer(user)}
             ${educationComposer(user)} ${conclusionComposer(user)}
             `;

	const cvContent = `
            <h2>${getFullnameOf(user)}</h2>
            <hr>
                     <p>${cvBody}</p>
            `;

	document.getElementById("main").style.background = getRandomCvColor();
	document.getElementById("CV").innerHTML = cvContent;
}

//---------------- generate CV for a user -----------

generateCvFor(vivian);
