export let projImgDir  = "./page_img/projects_img/";

export const webAppProjects = [
    {
        name: 'Odin: Calculator',
        link: 'https://blackbird410.github.io/Odin-Calculator/',
        description: "A calculator capable of basic operations. It is a project from The Odin Project curriculum, part fundamentals",
        pictureLink: projImgDir + "Odin-Calculator.png"
    },
    {
        name: 'Etch-A-Sketch',
        link: 'https://blackbird410.github.io/Etch-a-Sketch/',
        description: "A web application which is basically a sketchpad, when you hover the mouse on the pad, it apply colors based on the chosen mode.",
        pictureLink: projImgDir + "Sketch.png"
    },
    {
        name: 'Rock-Paper-Scissors',
        link: "https://blackbird410.github.io/Rock-Paper-Scissors-/",
        description: "The basic rock paper scissors game that you can play against the computer that draws randomly his choice for each game.",
        pictureLink: projImgDir + "rps.png"
    }
];

export const webSites = [
    {
        name: 'Odin: Sign-Up Form',
        link: 'https://blackbird410.github.io/Odin-Sign-up-Form/',
        description: 'An sign-up web form to the Arcane platform, where all your dreams can become true :)',
        pictureLink: projImgDir + 'arcane.png'
    },
    {
        name: 'Odin: Product Landing Page',
        link: 'https://blackbird410.github.io/Product-landing-page-Odin/',
        description: "An ice cream product landing webpage that present the product, and have order options.",
        pictureLink: projImgDir + 'Product_landing_page_2.png'
    },
    {
        name: 'Makaya: Product Landing Page',
        link: 'https://blackbird410.github.io/Product-landing-page/',
        description: "A chocolate business product landing webpage that present the product and the business history.",
        pictureLink: projImgDir + 'Product_landing_page.png'
    },
    {
        name: 'Odin: Recipes',
        link: 'https://blackbird410.github.io/odin-recipes/',
        description: "A basic website that contains recipes of different food such as Risotto, Chicken Parmesan...",
        pictureLink: projImgDir + 'Recipes.png'
    }
];

export function addProjects(projects, type, container) {
    const sectionHeader = document.createElement('h1');
    const list = document.createElement('ul');
    sectionHeader.textContent = type;
    container.appendChild(sectionHeader);

    list.className = "projectList";

    for (let i = 0; i < projects.length; i++) {
        const temp = document.createElement('li');
        const name = document.createElement('h2');
        const pImg = document.createElement('img');
        const pLink = document.createElement('a');
        const descrip = document.createElement('p');

        temp.className = "project";
        
        name.textContent = projects[i].name;
        pImg.src = projects[i].pictureLink;
        descrip.textContent = projects[i].description;
        descrip.style.fontStyle = 'italic';
        pLink.href = projects[i].link;
        pLink.target = "_blank";
        pLink.appendChild(pImg);
        temp.appendChild(name);
        temp.appendChild(pLink);
        temp.appendChild(descrip);
        list.appendChild(temp)
    }
    container.appendChild(list);
}

export const addFooter = (footer) => {
    const link = document.createElement('a');
    const githubLogo = document.createElement('i');

    link.className ='githubLink';
    githubLogo.className = 'fa';
    githubLogo.classList.add('fa-github');

    link.textContent = 'Copyright © 2023 Blackbird410';
    link.href = 'https://github.com/blackbird410/';
    link.target = '_blank';

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
    footer.style.backgroundColor = '#1F2937';
    footer.style.fontSize = "16px";
    footer.style.fontWeight = "800";
};