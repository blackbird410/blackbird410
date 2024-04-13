import "./style.css";
import profile from "./profile.jpg";

const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

const headerImg = document.createElement("div");
const name = document.createElement("h1");
name.className = "name";
name.textContent = "Neil T. Rigaud";
headerImg.appendChild(name);
headerImg.className = "header-img";
headerImg.style.background = `center / cover no-repeat url('${profile}')`;
header.appendChild(headerImg);

const aboutMe = document.createElement("section");
aboutMe.className = "about-me";
const aboutMeHeader = document.createElement("h2");
aboutMeHeader.textContent = "About Me";
const aboutMeText = document.createElement("p");
aboutMeText.textContent =
  "My name is Neil Taison Rigaud, I am CS Major at NDHU. I am actually learning web development and working on enhancing my problem solving and researching skills. I hope this will lead me to a reasonable answer to 'Why I chose to be a CS major?' You're welcome to take a look at my projects and give me some feedback. Thank you";

aboutMe.appendChild(aboutMeHeader);
aboutMe.appendChild(aboutMeText);
header.appendChild(aboutMe);
