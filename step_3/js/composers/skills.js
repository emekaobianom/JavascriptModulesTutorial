import { getRandomOption } from "/js/shared/random.js";

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
