/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFooter: () => (/* binding */ addFooter),\n/* harmony export */   addHeader: () => (/* binding */ addHeader),\n/* harmony export */   addMain: () => (/* binding */ addMain)\n/* harmony export */ });\n/* harmony import */ var _profile_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.jpg */ \"./src/profile.jpg\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\nconst addHeader = () => {\n  const header = document.createElement(\"header\");\n  const headerImg = document.createElement(\"div\");\n  const name = document.createElement(\"h1\");\n  const aboutMe = document.createElement(\"section\");\n  const aboutMeHeader = document.createElement(\"h2\");\n  const aboutMeText = document.createElement(\"p\");\n  const linksWrapper = document.createElement(\"div\");\n  const links = [\n    {\n      platform: \"github\",\n      link: \"https://github.com/blackbird410/\",\n    },\n    {\n      platform: \"linkedin\",\n      link: \"https://www.linkedin.com/in/neilrigaud/\",\n    },\n    {\n      platform: \"twitter\",\n      link: \"https://twitter.com/NeilTaison\",\n    },\n  ];\n\n  document.body.appendChild(header);\n  name.className = \"name\";\n  name.textContent = \"Neil T. Rigaud\";\n  headerImg.appendChild(name);\n  headerImg.className = \"header-img\";\n  headerImg.style.background = `center / cover no-repeat url('${_profile_jpg__WEBPACK_IMPORTED_MODULE_0__}')`;\n  header.appendChild(headerImg);\n\n  aboutMe.className = \"about-me\";\n  aboutMeHeader.textContent = \"About Me\";\n  aboutMeText.textContent =\n    \"Hi there! I'm Neil Taison Rigaud, studying Computer Science at NDHU. Currently, I'm diving into web development and sharpening my problem-solving skills. My goal? To understand why I chose this major and make meaningful contributions. Check out my projects and share your thoughts. Thanks for joining me on this journey!\";\n  linksWrapper.className = \"links-wrapper\";\n  links.forEach((l) => {\n    const link = document.createElement(\"a\");\n    const icon = document.createElement(\"ion-icon\");\n\n    link.href = l.link;\n    link.target = \"_blank\";\n    icon.name = `logo-${l.platform}`;\n    icon.className = `logo ${l.platform}`;\n    link.appendChild(icon);\n    linksWrapper.appendChild(link);\n  });\n\n  aboutMe.appendChild(aboutMeHeader);\n  aboutMe.appendChild(aboutMeText);\n  aboutMe.appendChild(linksWrapper);\n  header.appendChild(aboutMe);\n};\n\nconst addMain = () => {\n  const main = document.createElement(\"main\");\n  document.body.appendChild(main);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addProjects)();\n};\n\nconst addFooter = () => {\n  const footer = document.createElement(\"footer\");\n  document.body.appendChild(footer);\n};\n\n\n//# sourceURL=webpack://homepage/./src/data.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   addProjects: () => (/* binding */ addProjects),\n/* harmony export */   projImgDir: () => (/* binding */ projImgDir),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _projects_img_rps_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects_img/rps.png */ \"./src/projects_img/rps.png\");\n/* harmony import */ var _projects_img_Product_landing_page_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects_img/Product_landing_page_2.png */ \"./src/projects_img/Product_landing_page_2.png\");\n/* harmony import */ var _projects_img_arcane_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects_img/arcane.png */ \"./src/projects_img/arcane.png\");\n/* harmony import */ var _projects_img_library_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects_img/library.png */ \"./src/projects_img/library.png\");\n/* harmony import */ var _projects_img_todo_list_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects_img/todo-list.png */ \"./src/projects_img/todo-list.png\");\n/* harmony import */ var _projects_img_Sketchpad_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects_img/Sketchpad.png */ \"./src/projects_img/Sketchpad.png\");\n/* harmony import */ var _projects_img_simple_form_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects_img/simple-form.png */ \"./src/projects_img/simple-form.png\");\n/* harmony import */ var _projects_img_tic_tac_toe_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects_img/tic-tac-toe.png */ \"./src/projects_img/tic-tac-toe.png\");\n/* harmony import */ var _projects_img_weather_app_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects_img/weather-app.png */ \"./src/projects_img/weather-app.png\");\n/* harmony import */ var _projects_img_image_slider_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects_img/image-slider.png */ \"./src/projects_img/image-slider.png\");\n/* harmony import */ var _projects_img_Odin_Calculator_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects_img/Odin-Calculator.png */ \"./src/projects_img/Odin-Calculator.png\");\n/* harmony import */ var _projects_img_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects_img/admin-dashboard.png */ \"./src/projects_img/admin-dashboard.png\");\n/* harmony import */ var _projects_img_restaurant_page_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects_img/restaurant-page.png */ \"./src/projects_img/restaurant-page.png\");\n/* harmony import */ var _projects_img_second_sign_up_form_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects_img/second-sign-up-form.png */ \"./src/projects_img/second-sign-up-form.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Project {\n  constructor(p) {\n    this.wrapper = document.createElement(\"div\");\n    this.infoWrapper = document.createElement(\"div\");\n    this.img = document.createElement(\"div\");\n    this.name = document.createElement(\"h3\");\n    this.description = document.createElement(\"p\");\n    this.githubLink = document.createElement(\"a\");\n    this.githubLogo = document.createElement(\"ion-icon\");\n    this.projectLink = document.createElement(\"a\");\n    this.projectLogo = document.createElement(\"ion-icon\");\n\n    this.wrapper.className = \"project-wrapper\";\n    this.infoWrapper.className = \"project-info-wrapper\";\n\n    const image = document.createElement(\"img\");\n    image.src = p.pictureLink;\n    this.img.appendChild(image);\n    this.img.className = \"project-image\";\n\n    this.name.textContent = p.name;\n    this.description.textContent = p.description;\n\n    let repoLink = p.link.split(\"blackbird410.github.io\");\n    repoLink = `${repoLink[0]}github.com/blackbird410${repoLink[1]}`;\n    this.githubLink.className = \"github-link\";\n    this.githubLink.href = repoLink;\n    this.githubLink.target = \"_blank\";\n    this.githubLogo.className = \"logo github\";\n    this.githubLogo.name = \"logo-github\";\n    this.githubLink.appendChild(this.githubLogo);\n\n    this.projectLink.className = \"project-link\";\n    this.projectLink.href = p.link;\n    this.projectLink.target = \"_blank\";\n    this.projectLogo.className = \"logo open\";\n    this.projectLogo.name = \"open-outline\";\n    this.projectLink.appendChild(this.projectLogo);\n\n    this.wrapper.appendChild(this.img);\n    this.infoWrapper.appendChild(this.name);\n    this.infoWrapper.appendChild(this.githubLink);\n    this.infoWrapper.appendChild(this.projectLink);\n    this.infoWrapper.appendChild(this.description);\n    this.wrapper.appendChild(this.infoWrapper);\n  }\n}\nlet projImgDir = \"./projects_img/\";\n\nconst projects = [\n  {\n    name: \"Weather App\",\n    link: \"https://blackbird410.github.io/weather-app/\",\n    description: \"A weather app\",\n    pictureLink: _projects_img_weather_app_png__WEBPACK_IMPORTED_MODULE_8__,\n  },\n  {\n    name: \"Todo List\",\n    link: \"https://blackbird410.github.io/todo-list/\",\n    description: \"A personal task management web application\",\n    pictureLink: _projects_img_todo_list_png__WEBPACK_IMPORTED_MODULE_4__,\n  },\n  {\n    name: \"Image Slider\",\n    link: \"https://blackbird410.github.io/image-slider/\",\n    description: \"An image slider\",\n    pictureLink: _projects_img_image_slider_png__WEBPACK_IMPORTED_MODULE_9__,\n  },\n  {\n    name: \"Tic-Tac-Toe\",\n    link: \"https://blackbird410.github.io/Tic-Tac-Toe/\",\n    description: \"A tic tac toe browser game\",\n    pictureLink: _projects_img_tic_tac_toe_png__WEBPACK_IMPORTED_MODULE_7__,\n  },\n  {\n    name: \"Book Library\",\n    link: \"https://blackbird410.github.io/Library/\",\n    description: \"A book library app\",\n    pictureLink: _projects_img_library_png__WEBPACK_IMPORTED_MODULE_3__,\n  },\n  {\n    name: \"Calculator\",\n    link: \"https://blackbird410.github.io/Calculator/\",\n    description: \"A basic calculator modeled after the IPhone calculator app\",\n    pictureLink: _projects_img_Odin_Calculator_png__WEBPACK_IMPORTED_MODULE_10__,\n  },\n  {\n    name: \"Etch-A-Sketch\",\n    link: \"https://blackbird410.github.io/Sketchpad/\",\n    description:\n      \"A sketchpad, when you hover the mouse on the pad, it apply colors based on the chosen mode.\",\n    pictureLink: _projects_img_Sketchpad_png__WEBPACK_IMPORTED_MODULE_5__,\n  },\n  {\n    name: \"Restaurant Page\",\n    link: \"https://blackbird410.github.io/restaurant-page/\",\n    description: \"A template for a restaurant website\",\n    pictureLink: _projects_img_restaurant_page_png__WEBPACK_IMPORTED_MODULE_12__,\n  },\n  {\n    name: \"Admin Dashboard\",\n    link: \"https://blackbird410.github.io/Admin-dashboard/\",\n    description: \"A template for an administrator dashboard website\",\n    pictureLink: _projects_img_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_11__,\n  },\n  {\n    name: \"Product Landing Page\",\n    link: \"https://blackbird410.github.io/Product-landing-page-Odin/\",\n    description:\n      \"An ice cream product landing webpage that present the product, and have order options.\",\n    pictureLink: _projects_img_Product_landing_page_2_png__WEBPACK_IMPORTED_MODULE_1__,\n  },\n  {\n    name: \"Sign-up-form\",\n    link: \"https://blackbird410.github.io/Sign-up-form/\",\n    description: \"A template for sign up form.\",\n    pictureLink: _projects_img_second_sign_up_form_png__WEBPACK_IMPORTED_MODULE_13__,\n  },\n  {\n    name: \"Sign-Up Form\",\n    link: \"https://blackbird410.github.io/Odin-Sign-up-Form/\",\n    description: \"A template for sign up form.\",\n    pictureLink: _projects_img_arcane_png__WEBPACK_IMPORTED_MODULE_2__,\n  },\n  {\n    name: \"Simple form\",\n    link: \"https://blackbird410.github.io/simple-form/\",\n    description: \"A form with built in JavaScript validation\",\n    pictureLink: _projects_img_simple_form_png__WEBPACK_IMPORTED_MODULE_6__,\n  },\n  {\n    name: \"Rock-Paper-Scissors\",\n    link: \"https://blackbird410.github.io/Rock-Paper-Scissors-/\",\n    description:\n      \"The basic rock paper scissors game that you can play against the computer that draws randomly his choice for each game.\",\n    pictureLink: _projects_img_rps_png__WEBPACK_IMPORTED_MODULE_0__,\n  },\n];\n\nconst addProjects = () => {\n  const main = document.querySelector(\"main\");\n\n  projects.forEach((p) => {\n    let project = new Project(p);\n    main.appendChild(project.wrapper);\n  });\n};\n\n\n//# sourceURL=webpack://homepage/./src/projects.js?");

/***/ }),

/***/ "./src/profile.jpg":
/*!*************************!*\
  !*** ./src/profile.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"906a5a74d41169e55720.jpg\";\n\n//# sourceURL=webpack://homepage/./src/profile.jpg?");

/***/ }),

/***/ "./src/projects_img/Odin-Calculator.png":
/*!**********************************************!*\
  !*** ./src/projects_img/Odin-Calculator.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"694404d2456b05f12d06.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/Odin-Calculator.png?");

/***/ }),

/***/ "./src/projects_img/Product_landing_page_2.png":
/*!*****************************************************!*\
  !*** ./src/projects_img/Product_landing_page_2.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f1c07a59166296e3a3b.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/Product_landing_page_2.png?");

/***/ }),

/***/ "./src/projects_img/Sketchpad.png":
/*!****************************************!*\
  !*** ./src/projects_img/Sketchpad.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7aef658f7a1a2ef67a3.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/Sketchpad.png?");

/***/ }),

/***/ "./src/projects_img/admin-dashboard.png":
/*!**********************************************!*\
  !*** ./src/projects_img/admin-dashboard.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5be4375f3820342bd5cf.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/admin-dashboard.png?");

/***/ }),

/***/ "./src/projects_img/arcane.png":
/*!*************************************!*\
  !*** ./src/projects_img/arcane.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"255976e7a8dbd88ebe46.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/arcane.png?");

/***/ }),

/***/ "./src/projects_img/image-slider.png":
/*!*******************************************!*\
  !*** ./src/projects_img/image-slider.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b65c9e115799dc839377.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/image-slider.png?");

/***/ }),

/***/ "./src/projects_img/library.png":
/*!**************************************!*\
  !*** ./src/projects_img/library.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a94da37a6c03387cc07.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/library.png?");

/***/ }),

/***/ "./src/projects_img/restaurant-page.png":
/*!**********************************************!*\
  !*** ./src/projects_img/restaurant-page.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a4d4e17bbddf26610b9.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/restaurant-page.png?");

/***/ }),

/***/ "./src/projects_img/rps.png":
/*!**********************************!*\
  !*** ./src/projects_img/rps.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9804c7d044bb43cff8c7.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/rps.png?");

/***/ }),

/***/ "./src/projects_img/second-sign-up-form.png":
/*!**************************************************!*\
  !*** ./src/projects_img/second-sign-up-form.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8160aff812f8618a0494.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/second-sign-up-form.png?");

/***/ }),

/***/ "./src/projects_img/simple-form.png":
/*!******************************************!*\
  !*** ./src/projects_img/simple-form.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2ee58ee35d70a7045734.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/simple-form.png?");

/***/ }),

/***/ "./src/projects_img/tic-tac-toe.png":
/*!******************************************!*\
  !*** ./src/projects_img/tic-tac-toe.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06fe93653398aa8db341.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/tic-tac-toe.png?");

/***/ }),

/***/ "./src/projects_img/todo-list.png":
/*!****************************************!*\
  !*** ./src/projects_img/todo-list.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad69c2694ac7b18b5683.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/todo-list.png?");

/***/ }),

/***/ "./src/projects_img/weather-app.png":
/*!******************************************!*\
  !*** ./src/projects_img/weather-app.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f1c7959f46aee3a337d.png\";\n\n//# sourceURL=webpack://homepage/./src/projects_img/weather-app.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/data.js");
/******/ 	
/******/ })()
;