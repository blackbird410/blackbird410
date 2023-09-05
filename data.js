export const myLinks = [
    {
        Name: "HOME",
        Address: "./index.html" 
    },
    {
        Name: "ABOUT",
        Address: "./extra.html"
    },
    {
        Name: "PROJECTS",
        Address: "./projects.html"
    },
    {
        Name: "CONTACT",
        Address: "./contact.html"
    }
];

export const myPlatforms = [
    {
        name: 'The Odin Poject (TOR)',
        description : "Thanks to TOR, I am becoming a skilled web developer. Their courses have helped me learn HTML, CSS, and Javascript. The curriculum is well designed and their community is very supportive. I am grateful for their support and look forward to my future as a full stack web developer.",
        link: 'https://www.theodinproject.com/'
    },
    {
        name: 'Codewars',
        description : "Codewars is my favourite playground for honing my coding skills. It challenges me to solve problems and implement solutions, whether I'm refining my fundamentals or developing advanced skills. The platform's exercises are engaging, diverse, and promote growth and learning. I believe that practice makes perfect, and Codewars has been an incredibly effective tool for improving my problem-solving abilities and deepening my understanding of the language. I am grateful for the opportunity to learn from and compete with fellow coders on this platform. It has been a fantastic experience, and I look forward to continuing to grow and learn with Codewars.",
        link: 'https://www.codewars.com/'
    },
    {
        name: 'Leetcode',
        description: "LeetCode is a great platform for programmers to test their skills and prepare for job interviews. Its range of problems challenges users to think creatively and improve their problem-solving abilities. The platform's emphasis on daily practice and consistency is what sets it apart. Its interactive nature and real-world application make it an ideal tool for improving coding skills or preparing for job interviews. Top companies also use LeetCode to find talented programmers, making it an excellent opportunity for career growth. I encourage anyone looking to improve their coding skills or prepare for job interviews to give LeetCode a try. With its engaging and challenging exercises, it provides a great opportunity to learn, grow, and succeed.",
        link: 'https://www.leetcode.com/'
    },
    {
        name: 'Edx (Harvard CS50)',
        description: "Thanks to Edx and its extensive range of free resources, I had the incredible opportunity to delve into the fascinating world of Computer Science through the renowned Harvard CS50 course. I firmly believe that this course is impeccably designed, offering a well-paced learning experience accompanied by meticulously detailed content, making it an ideal choice for beginners.",
        link: 'https://learning.edx.org/course/course-v1:HarvardX+CS50+X/home'

    }
];

export const mySkills = [
    {
        field: 'Web Development',
        skills: [
            {
                skill: 'HTML',
                level: 'Intermediate'
            },
            {
                skill: 'CSS',
                level: 'Intermediate'
            },
            {
                skill: 'JavaScript',
                level: 'Novice'
            }
        ]
    },
    {
        field: 'Computer Programming',
        skills: [
            {
                skill: 'JavaScript',
                level: 'Novice'
            },
            {
                skill: 'Python',
                level: 'Intermediate'
            },
            {
                skill: 'C++',
                level: 'Novice'
            }
        ]
    },
    {
        field: 'Software Development Tools',
        skills: [
            {
                skill: 'Git',
                level: 'Novice'
            },
            {
                skill: 'GitHub',
                level: 'Intermediate'
            },
            {
                skill: 'VS Code',
                level: 'Intermediate'
            }
        ]
    },
    {
        field: 'Language Proficiency',
        skills: [
            {
                skill: 'English',
                level: 'Advanced - C2'
            },
            {
                skill: 'Chinese',
                level: 'Intermediate - B1'
            },
            {
                skill: 'French',
                level: 'Advanced - C1'
            },
            {
                skill: 'Spanish',
                level: 'Novice - A1'
            }
        ]
    }
];

export const myCertifs = [
    "./page_img/certificates/CS50 Certificate.png",
    "./page_img/certificates/CS50P Certificate.png",
    "./page_img/certificates/RWD_cert.png",
    "./page_img/certificates/SciPy_cert.png",
    "./page_img/certificates/toeic.png"
];

export function addHeader(container, myLinks) {
    const header = document.createElement('div');
    const headerLeft = document.createElement('div');
    const headerRight = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const nav = document.createElement('nav');
    const list = document.createElement('ul');

    const gitLink = document.createElement('a');
    const gitLogo = document.createElement('i');

    header.className = "header";
    headerLeft.className = "headerLeft";
    headerRight.className = "headerRight";

    gitLink.className = "gitLink";
    gitLink.classList.add('link');
    gitLogo.className = 'fa';
    gitLogo.classList.add('fa-github');

    input.type = "checkbox";
    input.id = "toggle";
    label.htmlFor = "toggle";
    label.textContent = "☰";

    for (let i = 0; i < 4; i++) {
        const elt = document.createElement('li');
        const link = document.createElement('a');
    
        link.className = "link";
        // elt.className = "hButton";
    
        link.href = myLinks[i].Address;
        link.textContent = myLinks[i].Name;
        elt.appendChild(link);
        list.appendChild(elt);
    }

    nav.appendChild(list);

    gitLink.textContent = "Blackbird410";
    gitLink.href = "https://github.com/blackbird410/";
    gitLink.target = "blank";
    gitLink.appendChild(gitLogo);

    headerRight.appendChild(gitLink);

    headerLeft.appendChild(input);
    headerLeft.appendChild(label);
    headerLeft.appendChild(nav);

    header.appendChild(headerLeft);
    header.appendChild(headerRight);

    container.appendChild(header);
}

export function addPlatforms(container, myPlatforms) {
    const platforms = document.createElement('ul');
    
    for (let i = 0; i < myPlatforms.length; i++) {
        const platform = document.createElement('li');
        const platformLink = document.createElement('a');
        const platformName = document.createElement('h2');
        const platformDesc = document.createElement('p');
        
        platformName.textContent = myPlatforms[i].name;
        platformLink.appendChild(platformName);
        platformLink.href = myPlatforms[i].link;
        platformLink.target = 'blank';
        platformLink.style.textDecoration = 'none';
        platformLink.style.color = "#1b1b32"
        platformDesc.textContent = myPlatforms[i].description;
        
        platform.appendChild(platformLink);
        platform.appendChild(platformDesc);
        platforms.appendChild(platform);
    }

    container.appendChild(platforms);
}

export function addSkills(container, mySkills) {
    const skillsList = document.createElement('ul');
    
    for (let i = 0; i < mySkills.length; i++) {
        const skillCat = document.createElement('li');
        const skillHead = document.createElement('h3');

        skillHead.textContent = mySkills[i].field;
        skillCat.appendChild(skillHead);

        for (let j = 0; j < mySkills[i].skills.length; j++) {
            const currentSkill = document.createElement('p');
            currentSkill.textContent = `${mySkills[i].skills[j].skill} : ${mySkills[i].skills[j].level}`;
            skillCat.appendChild(currentSkill);
        }

        skillsList.appendChild(skillCat);
    }
    container.appendChild(skillsList);
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

export function addCertifs(container, certs) {
    const innerCont = document.createElement('div');
    for (let i = 0; i < certs.length; i++) {
        const cert = document.createElement('img');
        cert.src = certs[i];
        innerCont.appendChild(cert);
    }
    container.appendChild(innerCont);
}