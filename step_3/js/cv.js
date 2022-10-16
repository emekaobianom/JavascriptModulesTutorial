import { emeka as this_user } from "/js/data/users.js";
import { bioComposer } from "/js/composers/bio.js";
import { skillsComposer } from "/js/composers/skills.js";
import { educationComposer } from "/js/composers/education.js";
import { conclusionComposer } from "/js/composers/conclusion.js";
import { getFullnameOf } from "/js/shared/fullname.js";
import { getRandomCvColor } from "/js/helpers/cvcolor.js";

//-------------generate CV--------------

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

generateCvFor(this_user);
