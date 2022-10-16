import { emeka as this_user } from "/js/data/users.js";
import * as Composer from "/js/parts/composers.js";
import { getRandomCvColor, getFullnameOf as fullname} from "/js/parts/helpers.js";

//-------------generate CV--------------

function generateCvFor(user) {
  const cvBody = `
            ${Composer.bioComposer(user)} ${Composer.skillsComposer(user)}
             ${Composer.educationComposer(user)} ${Composer.conclusionComposer(user)}
             `;

  const cvContent = `
            <h2>${fullname(user)}</h2>
            <hr>
                     <p>${cvBody}</p>
            `;

  document.getElementById("main").style.background = getRandomCvColor();
  document.getElementById("CV").innerHTML = cvContent;
}

//---------------- generate CV for a user -----------

generateCvFor(this_user);
