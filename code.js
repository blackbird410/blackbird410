import { webAppProjects, webSites, addProjects, addFooter } from './projects.js';

const body = document.body;

const header = document.createElement('div');
const headerLeft = document.createElement('div');
const headerRight = document.createElement('div');
const link = document.createElement('a');
const main = document.createElement('div');
const webApps =  document.createElement('div');
const websites =  document.createElement('div');
const footer = document.createElement('div');

header.className = "header";
headerLeft.className ="headerLeft";
headerRight.className ="headerRight";
main.className = "main";
webApps.className = "webApps";
websites.className = "websites";
footer.className = "footer";

headerLeft.textContent = "Neil's Projects";
link.textContent = "Home";
link.href = "./index.html";

headerRight.appendChild(link);
header.appendChild(headerLeft);
header.appendChild(headerRight);

addProjects(webAppProjects, "Web Applications", webApps);
addProjects(webSites, "Websites", websites);
addFooter(footer);

main.appendChild(webApps);
main.appendChild(websites);

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);