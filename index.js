import { myPlatforms, mySkills, addPlatforms, addSkills, addFooter } from "./data.js";

const body = document.body;
const header = document.createElement('div');
const main = document.createElement('div');
const footer = document.createElement('div');

const headerLeft = document.createElement('div');
const headerRight = document.createElement('div');

const gitLink = document.createElement('a');
const gitLogo = document.createElement('i');

const welcome = document.createElement('div');
const welcomeLeft = document.createElement('div');
const welcomeRight = document.createElement('div');

const welcomeHead = document.createElement('h2');
const welcomeDesc = document.createElement('p'); 
const welcomeImg = document.createElement('img');

const quote = document.createElement('div');
const quoteAuthor = document.createElement('p');

const about = document.createElement('div');
const aboutLeft = document.createElement('p');
const aboutRight = document.createElement('p');

const learningPlatforms = document.createElement('div');

const skills = document.createElement('div');
const skillsHead = document.createElement('h2');

header.className = "header";
main.className = "main";
footer.className = "footer";

headerLeft.className = "headerLeft";
headerRight.className = "headerRight";
gitLink.className = "gitLink";
gitLink.classList.add('link');
gitLogo.className = 'fa';
gitLogo.classList.add('fa-github');

welcome.className = 'welcome';
welcomeLeft.className = 'welcomeLeft';
welcomeRight.className = 'welcomeRight';
welcomeHead.className = 'welcomeHead';
welcomeDesc.className = 'welcomeDesc';
welcomeImg.className = 'welcomeImg';

quote.className = 'quote';
quote.id = 'quote';
quoteAuthor.className = 'quoteAuthor';

about.className = 'about';
aboutLeft.className = 'aboutLeft';
aboutRight.className = 'aboutRight';

learningPlatforms.className = "learningPlatforms";

skills.className = 'skills';
skillsHead.className = 'skillsHead';

for (let i = 0; i < 4; i++) {
    const hButton = document.createElement('div');
    const link = document.createElement('a');
    const linkTexts = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
    const linkAddress = [
        "index.html",
        "#quote",
        "./projects.html",
        "#contact"
    ];

    hButton.className = "hButton";
    link.className = "link";

    link.href = linkAddress[i];
    link.textContent = linkTexts[i];
    hButton.appendChild(link);
    headerLeft.appendChild(hButton);
}



gitLink.textContent = "Blackbird410";
gitLink.href = "https://github.com/blackbird410/";
gitLink.target = "blank";
gitLink.appendChild(gitLogo);

headerRight.appendChild(gitLink);

header.appendChild(headerLeft);
header.appendChild(headerRight);

welcomeHead.textContent = "Welcome! I am Neil";
welcomeDesc.textContent = "My name is Neil Taison Rigaud, and I am passionate about Computer Science. My interest lies in Data Science and its potential to transform the world. As an aspiring engineer, I am fascinated by the ability to solve complex problems using cutting-edge technologies. I believe that Computer Science skills are essential for everyone to learn in the near future, as they have become a crucial component of every industry.";
welcomeImg.src = './page_img/profile.jpg';

welcomeLeft.appendChild(welcomeHead);
welcomeLeft.appendChild(welcomeDesc);

welcomeRight.appendChild(welcomeImg);

welcome.appendChild(welcomeLeft);
welcome.appendChild(welcomeRight);

quote.textContent = "\"Develop a passion for learning. If you do, you will never cease to grow.\"";
quoteAuthor.textContent = "Antony J. D'Angelo";

quote.appendChild(quoteAuthor);

aboutLeft.textContent = "My focus is on AI and Data Science, and I am determined to create innovative tools and techniques for financial data analysis. My goal is to develop machine learning algorithms and data visualization tools that will revolutionize the industry and empower individuals and businesses to make better decisions."
aboutRight.textContent = "With hard work, dedication, and a passion for innovation, I am confident that I can make a positive change in the world. Let's use the power of technology to make a difference together!";

about.appendChild(aboutLeft);
about.appendChild(aboutRight);

addPlatforms(learningPlatforms, myPlatforms);

skillsHead.textContent = 'My skills';
skills.appendChild(skillsHead);
addSkills(skills, mySkills);

main.appendChild(welcome);
main.appendChild(quote);
main.appendChild(about);
main.appendChild(learningPlatforms);
main.appendChild(skills);


addFooter(footer);

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
