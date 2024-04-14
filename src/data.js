import profile from "./profile.jpg";
import { addProjects } from "./projects";

export const addHeader = () => {
  const header = document.createElement("header");
  const headerImg = document.createElement("div");
  const name = document.createElement("h1");
  const aboutMe = document.createElement("section");
  const aboutMeHeader = document.createElement("h2");
  const aboutMeText = document.createElement("p");
  const linksWrapper = document.createElement("div");
  const links = [
    {
      platform: "github",
      link: "https://github.com/blackbird410/",
    },
    {
      platform: "linkedin",
      link: "https://www.linkedin.com/in/neilrigaud/",
    },
    {
      platform: "twitter",
      link: "https://twitter.com/NeilTaison",
    },
  ];

  document.body.appendChild(header);
  name.className = "name";
  name.textContent = "Neil T. Rigaud";
  headerImg.appendChild(name);
  headerImg.className = "header-img";
  headerImg.style.background = `center / cover no-repeat url('${profile}')`;
  header.appendChild(headerImg);

  aboutMe.className = "about-me";
  aboutMeHeader.textContent = "About Me";
  aboutMeText.textContent =
    "Hi there! I'm Neil Taison Rigaud, studying Computer Science at NDHU. Currently, I'm diving into web development and sharpening my problem-solving skills. My goal? To understand why I chose this major and make meaningful contributions. Check out my projects and share your thoughts. Thanks for joining me on this journey!";
  linksWrapper.className = "links-wrapper";
  links.forEach((l) => {
    const link = document.createElement("a");
    const icon = document.createElement("ion-icon");

    link.href = l.link;
    link.target = "_blank";
    icon.name = `logo-${l.platform}`;
    icon.className = `logo ${l.platform}`;
    link.appendChild(icon);
    linksWrapper.appendChild(link);
  });

  aboutMe.appendChild(aboutMeHeader);
  aboutMe.appendChild(aboutMeText);
  aboutMe.appendChild(linksWrapper);
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
