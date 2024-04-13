import profile from "./profile.jpg";
import { addProjects } from "./projects";

export const addHeader = () => {
  const header = document.createElement("header");
  document.body.appendChild(header);

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
    "Hi there! I'm Neil Taison Rigaud, studying Computer Science at NDHU. Currently, I'm diving into web development and sharpening my problem-solving skills. My goal? To understand why I chose this major and make meaningful contributions. Check out my projects and share your thoughts. Thanks for joining me on this journey!";

  aboutMe.appendChild(aboutMeHeader);
  aboutMe.appendChild(aboutMeText);
  header.appendChild(aboutMe);
};

export const addMain = () => {
  const main = document.createElement("main");
  document.body.appendChild(main);
  addProjects();
};

export const addFooter = () => {
  const footer = document.createElement("footer");
  document.body.appendChild(footer);
};
