import {
  myLinks,
  myPlatforms,
  mySkills,
  myCertifs,
  addHeader,
  addPlatforms,
  addSkills,
  addCertifs,
  addFooter,
} from "./data.js";

const body = document.body;
const main = document.createElement("div");
const footer = document.createElement("div");

const welcome = document.createElement("div");
const welcomeLeft = document.createElement("div");
const welcomeRight = document.createElement("div");

const welcomeHead = document.createElement("h2");
const welcomeDesc = document.createElement("p");
const welcomeImg = document.createElement("img");

const quote = document.createElement("div");
const quoteAuthor = document.createElement("p");

const about = document.createElement("div");
const aboutLeft = document.createElement("p");
const aboutRight = document.createElement("p");

const learningPlatforms = document.createElement("div");

const skills = document.createElement("div");
const skillsHead = document.createElement("h2");

const certificates = document.createElement("div");
const certHead = document.createElement("h2");

main.className = "main";
footer.className = "footer";

welcome.className = "welcome";
welcomeLeft.className = "welcomeLeft";
welcomeRight.className = "welcomeRight";
welcomeHead.className = "welcomeHead";
welcomeDesc.className = "welcomeDesc";
welcomeImg.className = "welcomeImg";

quote.className = "quote";
quote.id = "quote";
quoteAuthor.className = "quoteAuthor";

about.className = "about";
aboutLeft.className = "aboutLeft";
aboutRight.className = "aboutRight";

learningPlatforms.className = "learningPlatforms";

skills.className = "skills";
skillsHead.className = "skillsHead";

certificates.className = "certificates";
certHead.className = "certHead";

welcomeHead.textContent = "Welcome! I am Neil";
welcomeDesc.textContent =
  "My name is Neil Taison Rigaud, I am CS Major at NDHU. I am actually learning web development and working on enhancing my problem solving and researching skills. I hope this will lead me to a reasonable answer to 'Why I chose to be a CS major?' You're welcome to take a look at my projects and give me some feedback. Thank you";
welcomeImg.src = "./page_img/profile.jpg";

welcomeLeft.appendChild(welcomeHead);
welcomeLeft.appendChild(welcomeDesc);

welcomeRight.appendChild(welcomeImg);

welcome.appendChild(welcomeLeft);
welcome.appendChild(welcomeRight);

quote.textContent =
  '"Develop a passion for learning. If you do, you will never cease to grow."';
quoteAuthor.textContent = "Antony J. D'Angelo";

quote.appendChild(quoteAuthor);

aboutLeft.textContent =
  "My focus is on developing my ability to think rationally and effectively about solving problems, that's why I am more focused on competitive programming.";
aboutRight.textContent =
  "I believe that the projects I am working on will help me build the skills required to solve problems more effectively and also build a better work ethic.";

about.appendChild(aboutLeft);
about.appendChild(aboutRight);

addPlatforms(learningPlatforms, myPlatforms);

skillsHead.textContent = "My skills";
skills.appendChild(skillsHead);
addSkills(skills, mySkills);

certHead.textContent = "Certificates";
certificates.appendChild(certHead);
addCertifs(certificates, myCertifs);

main.appendChild(welcome);
main.appendChild(quote);
main.appendChild(about);
main.appendChild(learningPlatforms);
main.appendChild(skills);
main.appendChild(certificates);

addFooter(footer);

addHeader(body, myLinks);

body.appendChild(main);
body.appendChild(footer);
