import { myLinks, myPlatforms, mySkills, myCertifs, 
    addHeader, addPlatforms, addSkills, addCertifs, addFooter 
} from "./data.js";

const body = document.body;
const main = document.createElement('div');
const footer = document.createElement('div');

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

const certificates =  document.createElement('div');
const certHead = document.createElement('h2');

main.className = "main";
footer.className = "footer";

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

certificates.className = 'certificates';
certHead.className = 'certHead';

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

certHead.textContent = "Certificates"
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
