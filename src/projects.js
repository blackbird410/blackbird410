import rps from "./projects_img/rps.png"
import landingPage from "./projects_img/Product_landing_page_2.png";
import arcane from "./projects_img/arcane.png"
import library from "./projects_img/library.png"
import todoList from "./projects_img/todo-list.png"
import sketchpad from "./projects_img/Sketchpad.png"
import signUp from "./projects_img/simple-form.png"
import ticTacToe from "./projects_img/tic-tac-toe.png"
import weatherApp from "./projects_img/weather-app.png"
import imageSlider from "./projects_img/image-slider.png"
import calculator from "./projects_img/Odin-Calculator.png"
import adminDashboard from "./projects_img/admin-dashboard.png"
import restaurant from "./projects_img/restaurant-page.png"
import signUp2 from "./projects_img/second-sign-up-form.png";


export class Project {
  constructor(p) {
    this.wrapper = document.createElement("div");
    this.img = document.createElement("div");
    this.name = document.createElement("h3");
    this.description = document.createElement("p");
    this.githubLink = document.createElement("a");
    this.githubLogo = document.createElement("ion-icon");
    this.projectLink = document.createElement("a");
    this.projectLogo = document.createElement("ion-icon");

    this.wrapper.className = "project-wrapper";
    
    const image = document.createElement("img");
    image.src = p.pictureLink;
    this.img.appendChild(image);
    this.img.className = "project-image";

    this.name.textContent = p.name;
    this.description.textContent = p.description;

    let repoLink = p.link.split("blackbird410.github.io");
    repoLink = `${repoLink[0]}github.com/blackbird410${repoLink[1]}`;
    this.githubLink.className = "github-link";
    this.githubLink.href = repoLink;
    this.githubLink.target = "_blank";
    this.githubLogo.className = "logo github";
    this.githubLogo.name = "logo-github";
    this.githubLink.appendChild(this.githubLogo);

    this.projectLink.className = "project-link";
    this.projectLink.href = p.link;
    this.projectLink.target = "_blank";
    this.projectLogo.className = "logo open";
    this.projectLogo.name = "open-outline";
    this.projectLink.appendChild(this.projectLogo);

    this.wrapper.appendChild(this.img); 
    this.wrapper.appendChild(this.name);
    this.wrapper.appendChild(this.githubLink);
    this.wrapper.appendChild(this.projectLink);
    this.wrapper.appendChild(this.description);
  }
}
export let projImgDir = "./projects_img/";


export const projects = [
  {
    name: "Weather App",
    link: "https://blackbird410.github.io/weather-app/",
    description: "A weather app",
    pictureLink: weatherApp,
  },
  {
    name: "Image Slider",
    link: "https://blackbird410.github.io/image-slider/",
    description: "An image slider",
    pictureLink: imageSlider,
  },
  {
    name: "Todo List",
    link: "https://blackbird410.github.io/todo-list/",
    description: "A personal task management web application",
    pictureLink: todoList,
  },
  {
    name: "Tic-Tac-Toe",
    link: "https://blackbird410.github.io/Tic-Tac-Toe/",
    description: "A tic tac toe browser game",
    pictureLink: ticTacToe,
  },
  {
    name: "Book Library",
    link: "https://blackbird410.github.io/Library/",
    description: "A book library app",
    pictureLink: library,
  },
  {
    name: "Calculator",
    link: "https://blackbird410.github.io/Calculator/",
    description: "A basic calculator modeled after the IPhone calculator app",
    pictureLink: calculator,
  },
  {
    name: "Etch-A-Sketch",
    link: "https://blackbird410.github.io/Sketchpad/",
    description:
      "A sketchpad, when you hover the mouse on the pad, it apply colors based on the chosen mode.",
    pictureLink: sketchpad,
  },
  {
    name: "Rock-Paper-Scissors",
    link: "https://blackbird410.github.io/Rock-Paper-Scissors-/",
    description:
      "The basic rock paper scissors game that you can play against the computer that draws randomly his choice for each game.",
    pictureLink: rps,
  },
  {
    name: "Restaurant Page",
    link: "https://blackbird410.github.io/restaurant-page/",
    description: "A template for a restaurant website",
    pictureLink: restaurant,
  },
  {
    name: "Admin Dashboard",
    link: "https://blackbird410.github.io/Admin-dashboard/",
    description: "A template for an administrator dashboard website",
    pictureLink: adminDashboard,
  },
  {
    name: "Sign-up-form",
    link: "https://blackbird410.github.io/Sign-up-form/",
    description: "A template for sign up form.",
    pictureLink: signUp2,
  },
  {
    name: "Odin: Sign-Up Form",
    link: "https://blackbird410.github.io/Odin-Sign-up-Form/",
    description: "A template for sign up form.",
    pictureLink: arcane,
  },
  {
    name: "Simple form",
    link: "https://blackbird410.github.io/simple-form/",
    description: "A form with built in JavaScript validation",
    pictureLink: signUp,
  },
  {
    name: "Odin: Product Landing Page",
    link: "https://blackbird410.github.io/Product-landing-page-Odin/",
    description:
      "An ice cream product landing webpage that present the product, and have order options.",
    pictureLink: landingPage,
  },
];

export const addProjects = () => {
  const main = document.querySelector("main");
  
  projects.forEach(p => {
    let project = new Project(p);
    main.appendChild(project.wrapper);
  });
}
