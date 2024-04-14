import profile from "./profile.jpg";
import pic from "./devPic.png";
import { addProjects } from "./projects";

export const socialLinks = () => {
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

  return linksWrapper;
};

export const addHeader = () => {
  const header = document.createElement("header");
  const headerImg = document.createElement("div");
  const name = document.createElement("h1");
  const aboutMe = document.createElement("section");
  const aboutMeHeader = document.createElement("h2");
  const aboutMeText = document.createElement("p");

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

  aboutMe.appendChild(aboutMeHeader);
  aboutMe.appendChild(aboutMeText);
  aboutMe.appendChild(socialLinks());
  header.appendChild(aboutMe);
};

export const addMain = () => {
  const main = document.createElement("main");
  const title = document.createElement("h1");
  const projectsWrapper = document.createElement("section");

  title.textContent = "My Projects";
  projectsWrapper.className = "projects-wrapper";

  main.appendChild(title);
  main.appendChild(projectsWrapper);
  document.body.appendChild(main);
  addProjects();
};

export const addFooter = () => {
  const footer = document.createElement("footer");
  const contact = document.createElement("section");
  const title = document.createElement("h1");
  const text = document.createElement("p");
  const address = document.createElement("p");
  const contactInfo = document.createElement("div");
  const img = document.createElement("img");

  title.textContent = "Contact Me";
  text.textContent =
    "Please get in touch if you think our work could be mutually beneficial!";
  address.textContent = "123 Zhongshang Road, Hualien City, Taiwan";
  img.src = pic;
  ["call", "mail"].forEach((item) => {
    const wrapper = document.createElement("div");
    const icon = document.createElement("ion-icon");
    const c = document.createElement("p");

    wrapper.className = "contact-info";
    icon.name = `${item}-outline`;
    c.textContent =
      item === "call" ? "+886-987-654-321" : "ntsrigaud14@gmail.com";
    wrapper.appendChild(icon);
    wrapper.appendChild(c);
    contactInfo.appendChild(wrapper);
  });

  contact.appendChild(title);
  contact.appendChild(text);
  contact.appendChild(address);
  contact.appendChild(contactInfo);
  contact.appendChild(socialLinks());

  footer.appendChild(contact);
  footer.appendChild(img);
  document.body.appendChild(footer);
};
