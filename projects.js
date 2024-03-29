export let projImgDir = "./page_img/projects_img/";

export const webAppProjects = [
  {
    name: "Weather App",
    link: "https://blackbird410.github.io/weather-app/",
    description: "A weather app",
    pictureLink: projImgDir + "weather-app.png",
  },
  {
    name: "Image Slider",
    link: "https://blackbird410.github.io/image-slider/",
    description: "An image slider",
    pictureLink: projImgDir + "image-slider.png",
  },
  {
    name: "Todo List",
    link: "https://blackbird410.github.io/todo-list/",
    description: "A personal task management web application",
    pictureLink: projImgDir + "todo-list.png",
  },
  {
    name: "Tic-Tac-Toe",
    link: "https://blackbird410.github.io/Tic-Tac-Toe/",
    description: "A tic tac toe browser game",
    pictureLink: projImgDir + "tic-tac-toe.png",
  },
  {
    name: "Book Library",
    link: "https://blackbird410.github.io/Library/",
    description: "A book library app",
    pictureLink: projImgDir + "library.png",
  },
  {
    name: "Calculator",
    link: "https://blackbird410.github.io/Calculator/",
    description: "A basic calculator modeled after the IPhone calculator app",
    pictureLink: projImgDir + "Odin-Calculator.png",
  },
  {
    name: "Etch-A-Sketch",
    link: "https://blackbird410.github.io/Sketchpad/",
    description:
      "A sketchpad, when you hover the mouse on the pad, it apply colors based on the chosen mode.",
    pictureLink: projImgDir + "Sketchpad.png",
  },
  {
    name: "Rock-Paper-Scissors",
    link: "https://blackbird410.github.io/Rock-Paper-Scissors-/",
    description:
      "The basic rock paper scissors game that you can play against the computer that draws randomly his choice for each game.",
    pictureLink: projImgDir + "rps.png",
  },
];

export const webSites = [
  {
    name: "Restaurant Page",
    link: "https://blackbird410.github.io/restaurant-page/",
    description: "A template for a restaurant website",
    pictureLink: projImgDir + "restaurant-page.png",
  },
  {
    name: "Admin Dashboard",
    link: "https://blackbird410.github.io/Admin-dashboard/",
    description: "A template for an administrator dashboard website",
    pictureLink: projImgDir + "admin-dashboard.png",
  },
  {
    name: "Sign-up-form",
    link: "https://blackbird410.github.io/Sign-up-form/",
    description: "A template for sign up form.",
    pictureLink: projImgDir + "second-sign-up-form.png",
  },
  {
    name: "Odin: Sign-Up Form",
    link: "https://blackbird410.github.io/Odin-Sign-up-Form/",
    description: "A template for sign up form.",
    pictureLink: projImgDir + "arcane.png",
  },
  {
    name: "Simple form",
    link: "https://blackbird410.github.io/simple-form/",
    description: "A form with built in JavaScript validation",
    pictureLink: projImgDir + "simple-form.png",
  },
  {
    name: "Odin: Product Landing Page",
    link: "https://blackbird410.github.io/Product-landing-page-Odin/",
    description:
      "An ice cream product landing webpage that present the product, and have order options.",
    pictureLink: projImgDir + "Product_landing_page_2.png",
  },
  {
    name: "Makaya: Product Landing Page",
    link: "https://blackbird410.github.io/Product-landing-page/",
    description:
      "A chocolate business product landing webpage that present the product and the business history.",
    pictureLink: projImgDir + "Product_landing_page.png",
  },
  {
    name: "Odin: Recipes",
    link: "https://blackbird410.github.io/odin-recipes/",
    description:
      "A basic website that contains recipes of different food such as Risotto, Chicken Parmesan...",
    pictureLink: projImgDir + "Recipes.png",
  },
];

export function addProjects(projects, type, container) {
  const sectionHeader = document.createElement("h1");
  const list = document.createElement("ul");
  sectionHeader.textContent = type;
  container.appendChild(sectionHeader);

  list.className = "projectList";

  for (let i = 0; i < projects.length; i++) {
    const temp = document.createElement("li");
    const name = document.createElement("h2");
    const pImg = document.createElement("img");
    const pLink = document.createElement("a");
    const descrip = document.createElement("p");

    temp.className = "project";

    name.textContent = projects[i].name;
    pImg.src = projects[i].pictureLink;
    descrip.textContent = projects[i].description;
    descrip.style.fontStyle = "italic";
    pLink.href = projects[i].link;
    pLink.target = "_blank";
    pLink.appendChild(pImg);
    temp.appendChild(name);
    temp.appendChild(pLink);
    temp.appendChild(descrip);
    list.appendChild(temp);
  }
  container.appendChild(list);
}

export const addFooter = (footer) => {
  const link = document.createElement("a");
  const githubLogo = document.createElement("i");

  link.className = "githubLink";
  githubLogo.className = "fa";
  githubLogo.classList.add("fa-github");

  link.textContent = "Copyright © 2023 Blackbird410";
  link.href = "https://github.com/blackbird410/";
  link.target = "_blank";

  githubLogo.style.fontSize = "36px";

  link.appendChild(githubLogo);
  footer.appendChild(link);

  // Css style
  link.style.textDecoration = "none";
  link.style.color = "#D4D4D2";
  link.style.display = "flex";
  link.style.alignItems = "center";

  githubLogo.style.marginLeft = "8px";

  footer.style.margin = "0px";
  footer.style.padding = "0px";
  footer.style.flex = "1 1 60px";
  footer.style.width = "100%";
  footer.style.display = "flex";
  footer.style.justifyContent = "center";
  footer.style.alignItems = "center";
  footer.style.backgroundColor = "#1F2937";
  footer.style.fontSize = "16px";
  footer.style.fontWeight = "800";
};
