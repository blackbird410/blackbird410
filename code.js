import { webAppProjects, webSites, addProjects, addFooter } from './projects.js';

const body = document.body;
const main = document.createElement('div');
const webApps =  document.createElement('div');
const websites =  document.createElement('div');
const footer = document.createElement('div');

main.className = "main";
webApps.className = "webApps";
websites.className = "websites";
footer.className = "footer";

addProjects(webAppProjects, "Web Applications", webApps);
addProjects(webSites, "Websites", websites);
addFooter(footer);

main.appendChild(webApps);
main.appendChild(websites);

body.appendChild(main);
body.appendChild(footer);