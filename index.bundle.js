/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,900&display=swap);"]);\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap);"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --main-color: #080b12;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  padding-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: "Playfair Display", Roboto, "Poppins", sans-serif;\n  background-color: var(--main-color);\n  gap: 1.5rem;\n}\n\nheader {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n  text-align: justify;\n}\n\n.name {\n  margin: 0;\n}\n\n.about-me {\n  max-width: 500px;\n  background-color: white;\n  padding: 1rem;\n  justify-self: left;\n}\n\n.about-me,\n.header-img {\n  animation: display 1000ms ease-in;\n  animation-fill-mode: backwards;\n}\n\n.about-me > p {\n  font-family: "Roboto";\n  font-weight: 300;\n  font-size: 1.2rem;\n}\n\n.main {\n  background-color: white;\n}\n\n.header-img {\n  height: 350px;\n  min-width: 300px;\n  color: white;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n}\n\n.name {\n  background-color: rgba(120, 120, 120, 0.8);\n  width: 100%;\n  transition:\n    background-color 1s ease-out 0.25s,\n    color 1s ease-out 0.25s;\n}\n\n.name:hover {\n  background-color: darkgray;\n  color: black;\n}\n\n.links-wrapper {\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n}\n\nmain {\n  text-align: center;\n  background-color: white;\n}\n\nheader,\nmain,\nfooter {\n  padding: 1rem;\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n\n.projects-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 2.5rem;\n}\n\n.project-image {\n  grid-area: image;\n}\n\n.project-wrapper h3 {\n  grid-area: title;\n}\n\n.logo.github {\n  grid-area: logo-github;\n}\n\n.logo.open {\n  grid-area: logo-open;\n}\n\n.project-wrapper p {\n  grid-area: description;\n}\n\n.project-wrapper {\n  flex-basis: 280px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 5px 5px 15px lightgray;\n}\n\n.project-info-wrapper {\n  display: grid;\n  height: 100%;\n  align-items: center;\n  padding: 1rem;\n  gap: 0.8rem;\n  grid-template-columns: 1fr 1fr 30px 30px;\n  grid-template-rows: auto;\n  grid-template-areas:\n    "title title logo-github logo-open"\n    "description description description description";\n  transition:\n    background-color 250ms ease-out 150ms,\n    color 250ms ease-out 150ms;\n}\n\n.project-info-wrapper:hover {\n  background-color: black;\n  color: white;\n}\n\nimg {\n  object-fit: scale-down;\n  width: 100%;\n  height: 100%;\n}\n\nion-icon {\n  font-size: 1.5rem;\n  color: gray;\n  transition:\n    color 25ms ease-out 25ms,\n    transform 25ms ease-out 25ms;\n}\n\n.about-me ion-icon {\n  color: black;\n}\n\nion-icon:hover {\n  color: #318ce7;\n  transform: scale(1.4);\n}\n\nfooter {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n  color: white;\n  padding: 1rem;\n}\n\nfooter > img {\n  max-height: 350px;\n  width: auto;\n}\n\n.contact-info {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\nfooter > section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nfooter .links-wrapper {\n  justify-content: center;\n  align-items: center;\n  justify-self: start;\n  transform: scale(1.6);\n}\n\n@keyframes display {\n  from {\n    opacity: 0.25;\n  }\n  to {\n    opacity: 1;\n  }\n}\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://homepage/./src/style.css?./node_modules/css-loader/dist/cjs.js',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://homepage/./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://homepage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?",
        );

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://homepage/./src/style.css?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/insertBySelector.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?",
        );

        /***/
      },

    /***/ "./src/data.js":
      /*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFooter: () => (/* binding */ addFooter),\n/* harmony export */   addHeader: () => (/* binding */ addHeader),\n/* harmony export */   addMain: () => (/* binding */ addMain),\n/* harmony export */   socialLinks: () => (/* binding */ socialLinks)\n/* harmony export */ });\n/* harmony import */ var _profile_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.jpg */ "./src/profile.jpg");\n/* harmony import */ var _devPic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devPic.png */ "./src/devPic.png");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");\n\n\n\n\nconst socialLinks = () => {\n  const linksWrapper = document.createElement("div");\n  const links = [\n    {\n      platform: "github",\n      link: "https://github.com/blackbird410/",\n    },\n    {\n      platform: "linkedin",\n      link: "https://www.linkedin.com/in/neilrigaud/",\n    },\n    {\n      platform: "twitter",\n      link: "https://twitter.com/NeilTaison",\n    },\n  ];\n\n  linksWrapper.className = "links-wrapper";\n  links.forEach((l) => {\n    const link = document.createElement("a");\n    const icon = document.createElement("ion-icon");\n\n    link.href = l.link;\n    link.target = "_blank";\n    icon.name = `logo-${l.platform}`;\n    icon.className = `logo ${l.platform}`;\n    link.appendChild(icon);\n    linksWrapper.appendChild(link);\n  });\n\n  return linksWrapper;\n};\n\nconst addHeader = () => {\n  const header = document.createElement("header");\n  const headerImg = document.createElement("div");\n  const name = document.createElement("h1");\n  const aboutMe = document.createElement("section");\n  const aboutMeHeader = document.createElement("h2");\n  const aboutMeText = document.createElement("p");\n\n  document.body.appendChild(header);\n  name.className = "name";\n  name.textContent = "Neil T. Rigaud";\n  headerImg.appendChild(name);\n  headerImg.className = "header-img";\n  headerImg.style.background = `center / cover no-repeat url(\'${_profile_jpg__WEBPACK_IMPORTED_MODULE_0__}\')`;\n  header.appendChild(headerImg);\n\n  aboutMe.className = "about-me";\n  aboutMeHeader.textContent = "About Me";\n  aboutMeText.textContent =\n    "Hi there! I\'m Neil Taison Rigaud, studying Computer Science at NDHU. Currently, I\'m diving into web development and sharpening my problem-solving skills. My goal? To understand why I chose this major and make meaningful contributions. Check out my projects and share your thoughts. Thanks for joining me on this journey!";\n\n  aboutMe.appendChild(aboutMeHeader);\n  aboutMe.appendChild(aboutMeText);\n  aboutMe.appendChild(socialLinks());\n  header.appendChild(aboutMe);\n};\n\nconst addMain = () => {\n  const main = document.createElement("main");\n  const title = document.createElement("h1");\n  const projectsWrapper = document.createElement("section");\n\n  title.textContent = "My Projects";\n  projectsWrapper.className = "projects-wrapper";\n\n  main.appendChild(title);\n  main.appendChild(projectsWrapper);\n  document.body.appendChild(main);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.addProjects)();\n};\n\nconst addFooter = () => {\n  const footer = document.createElement("footer");\n  const contact = document.createElement("section");\n  const title = document.createElement("h1");\n  const text = document.createElement("p");\n  const address = document.createElement("p");\n  const contactInfo = document.createElement("div");\n  const img = document.createElement("img");\n\n  title.textContent = "Contact Me";\n  text.textContent =\n    "Please get in touch if you think our work could be mutually beneficial!";\n  address.textContent = "Hualien City, Taiwan";\n  img.src = _devPic_png__WEBPACK_IMPORTED_MODULE_1__;\n  ["call", "mail"].forEach((item) => {\n    const wrapper = document.createElement("div");\n    const icon = document.createElement("ion-icon");\n    const c = document.createElement("p");\n\n    wrapper.className = "contact-info";\n    icon.name = `${item}-outline`;\n    c.textContent =\n      item === "call" ? "+886-987-654-321" : "ntsrigaud14@gmail.com";\n    wrapper.appendChild(icon);\n    wrapper.appendChild(c);\n    contactInfo.appendChild(wrapper);\n  });\n\n  contact.appendChild(title);\n  contact.appendChild(text);\n  contact.appendChild(address);\n  contact.appendChild(contactInfo);\n  contact.appendChild(socialLinks());\n\n  footer.appendChild(contact);\n  footer.appendChild(img);\n  document.body.appendChild(footer);\n};\n\n\n//# sourceURL=webpack://homepage/./src/data.js?',
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");\n\n\n\n(0,_data__WEBPACK_IMPORTED_MODULE_1__.addHeader)();\n(0,_data__WEBPACK_IMPORTED_MODULE_1__.addMain)();\n(0,_data__WEBPACK_IMPORTED_MODULE_1__.addFooter)();\n\n\n//# sourceURL=webpack://homepage/./src/index.js?',
        );

        /***/
      },

    /***/ "./src/projects.js":
      /*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   addProjects: () => (/* binding */ addProjects),\n/* harmony export */   projImgDir: () => (/* binding */ projImgDir),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _projects_img_rps_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects_img/rps.png */ "./src/projects_img/rps.png");\n/* harmony import */ var _projects_img_Product_landing_page_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects_img/Product_landing_page_2.png */ "./src/projects_img/Product_landing_page_2.png");\n/* harmony import */ var _projects_img_arcane_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects_img/arcane.png */ "./src/projects_img/arcane.png");\n/* harmony import */ var _projects_img_library_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects_img/library.png */ "./src/projects_img/library.png");\n/* harmony import */ var _projects_img_todo_list_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects_img/todo-list.png */ "./src/projects_img/todo-list.png");\n/* harmony import */ var _projects_img_Sketchpad_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects_img/Sketchpad.png */ "./src/projects_img/Sketchpad.png");\n/* harmony import */ var _projects_img_simple_form_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects_img/simple-form.png */ "./src/projects_img/simple-form.png");\n/* harmony import */ var _projects_img_tic_tac_toe_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects_img/tic-tac-toe.png */ "./src/projects_img/tic-tac-toe.png");\n/* harmony import */ var _projects_img_weather_app_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects_img/weather-app.png */ "./src/projects_img/weather-app.png");\n/* harmony import */ var _projects_img_image_slider_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects_img/image-slider.png */ "./src/projects_img/image-slider.png");\n/* harmony import */ var _projects_img_Odin_Calculator_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects_img/Odin-Calculator.png */ "./src/projects_img/Odin-Calculator.png");\n/* harmony import */ var _projects_img_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects_img/admin-dashboard.png */ "./src/projects_img/admin-dashboard.png");\n/* harmony import */ var _projects_img_restaurant_page_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects_img/restaurant-page.png */ "./src/projects_img/restaurant-page.png");\n/* harmony import */ var _projects_img_second_sign_up_form_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects_img/second-sign-up-form.png */ "./src/projects_img/second-sign-up-form.png");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Project {\n  constructor(p) {\n    this.wrapper = document.createElement("div");\n    this.infoWrapper = document.createElement("div");\n    this.img = document.createElement("div");\n    this.name = document.createElement("h3");\n    this.description = document.createElement("p");\n    this.githubLink = document.createElement("a");\n    this.githubLogo = document.createElement("ion-icon");\n    this.projectLink = document.createElement("a");\n    this.projectLogo = document.createElement("ion-icon");\n\n    this.wrapper.className = "project-wrapper";\n    this.infoWrapper.className = "project-info-wrapper";\n\n    const image = document.createElement("img");\n    image.src = p.pictureLink;\n    this.img.appendChild(image);\n    this.img.className = "project-image";\n\n    this.name.textContent = p.name;\n    this.description.textContent = p.description;\n\n    let repoLink = p.link.split("blackbird410.github.io");\n    repoLink = `${repoLink[0]}github.com/blackbird410${repoLink[1]}`;\n    this.githubLink.className = "github-link";\n    this.githubLink.href = repoLink;\n    this.githubLink.target = "_blank";\n    this.githubLogo.className = "logo github";\n    this.githubLogo.name = "logo-github";\n    this.githubLink.appendChild(this.githubLogo);\n\n    this.projectLink.className = "project-link";\n    this.projectLink.href = p.link;\n    this.projectLink.target = "_blank";\n    this.projectLogo.className = "logo open";\n    this.projectLogo.name = "open-outline";\n    this.projectLink.appendChild(this.projectLogo);\n\n    this.wrapper.appendChild(this.img);\n    this.infoWrapper.appendChild(this.name);\n    this.infoWrapper.appendChild(this.githubLink);\n    this.infoWrapper.appendChild(this.projectLink);\n    this.infoWrapper.appendChild(this.description);\n    this.wrapper.appendChild(this.infoWrapper);\n  }\n}\nlet projImgDir = "./projects_img/";\n\nconst projects = [\n  {\n    name: "Weather App",\n    link: "https://blackbird410.github.io/weather-app/",\n    description: "A weather app",\n    pictureLink: _projects_img_weather_app_png__WEBPACK_IMPORTED_MODULE_8__,\n  },\n  {\n    name: "Todo List",\n    link: "https://blackbird410.github.io/todo-list/",\n    description: "A personal task management web application",\n    pictureLink: _projects_img_todo_list_png__WEBPACK_IMPORTED_MODULE_4__,\n  },\n  {\n    name: "Image Slider",\n    link: "https://blackbird410.github.io/image-slider/",\n    description: "An image slider",\n    pictureLink: _projects_img_image_slider_png__WEBPACK_IMPORTED_MODULE_9__,\n  },\n  {\n    name: "Tic-Tac-Toe",\n    link: "https://blackbird410.github.io/Tic-Tac-Toe/",\n    description: "A tic tac toe browser game",\n    pictureLink: _projects_img_tic_tac_toe_png__WEBPACK_IMPORTED_MODULE_7__,\n  },\n  {\n    name: "Book Library",\n    link: "https://blackbird410.github.io/Library/",\n    description: "A book library app",\n    pictureLink: _projects_img_library_png__WEBPACK_IMPORTED_MODULE_3__,\n  },\n  {\n    name: "Calculator",\n    link: "https://blackbird410.github.io/Calculator/",\n    description: "A basic calculator modeled after the IPhone calculator app",\n    pictureLink: _projects_img_Odin_Calculator_png__WEBPACK_IMPORTED_MODULE_10__,\n  },\n  {\n    name: "Etch-A-Sketch",\n    link: "https://blackbird410.github.io/Sketchpad/",\n    description:\n      "A sketchpad, when you hover the mouse on the pad, it apply colors based on the chosen mode.",\n    pictureLink: _projects_img_Sketchpad_png__WEBPACK_IMPORTED_MODULE_5__,\n  },\n  {\n    name: "Restaurant Page",\n    link: "https://blackbird410.github.io/restaurant-page/",\n    description: "A template for a restaurant website",\n    pictureLink: _projects_img_restaurant_page_png__WEBPACK_IMPORTED_MODULE_12__,\n  },\n  {\n    name: "Admin Dashboard",\n    link: "https://blackbird410.github.io/Admin-dashboard/",\n    description: "A template for an administrator dashboard website",\n    pictureLink: _projects_img_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_11__,\n  },\n  {\n    name: "Product Landing Page",\n    link: "https://blackbird410.github.io/Product-landing-page-Odin/",\n    description:\n      "An ice cream product landing webpage that present the product, and have order options.",\n    pictureLink: _projects_img_Product_landing_page_2_png__WEBPACK_IMPORTED_MODULE_1__,\n  },\n  {\n    name: "Sign-up-form",\n    link: "https://blackbird410.github.io/Sign-up-form/",\n    description: "A template for sign up form.",\n    pictureLink: _projects_img_second_sign_up_form_png__WEBPACK_IMPORTED_MODULE_13__,\n  },\n  {\n    name: "Sign-Up Form",\n    link: "https://blackbird410.github.io/Odin-Sign-up-Form/",\n    description: "A template for sign up form.",\n    pictureLink: _projects_img_arcane_png__WEBPACK_IMPORTED_MODULE_2__,\n  },\n  {\n    name: "Simple form",\n    link: "https://blackbird410.github.io/simple-form/",\n    description: "A form with built in JavaScript validation",\n    pictureLink: _projects_img_simple_form_png__WEBPACK_IMPORTED_MODULE_6__,\n  },\n  {\n    name: "Rock-Paper-Scissors",\n    link: "https://blackbird410.github.io/Rock-Paper-Scissors-/",\n    description:\n      "The basic rock paper scissors game that you can play against the computer that draws randomly his choice for each game.",\n    pictureLink: _projects_img_rps_png__WEBPACK_IMPORTED_MODULE_0__,\n  },\n];\n\nconst addProjects = () => {\n  const wrapper = document.querySelector(".projects-wrapper");\n\n  projects.forEach((p) => {\n    let project = new Project(p);\n    wrapper.appendChild(project.wrapper);\n  });\n};\n\n\n//# sourceURL=webpack://homepage/./src/projects.js?',
        );

        /***/
      },

    /***/ "./src/devPic.png":
      /*!************************!*\
  !*** ./src/devPic.png ***!
  \************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "7d95870a90686b367ac9.png";\n\n//# sourceURL=webpack://homepage/./src/devPic.png?',
        );

        /***/
      },

    /***/ "./src/profile.jpg":
      /*!*************************!*\
  !*** ./src/profile.jpg ***!
  \*************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "ec2e37676c7a287dfccb.jpg";\n\n//# sourceURL=webpack://homepage/./src/profile.jpg?',
        );

        /***/
      },

    /***/ "./src/projects_img/Odin-Calculator.png":
      /*!**********************************************!*\
  !*** ./src/projects_img/Odin-Calculator.png ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "694404d2456b05f12d06.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/Odin-Calculator.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/Product_landing_page_2.png":
      /*!*****************************************************!*\
  !*** ./src/projects_img/Product_landing_page_2.png ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "4f1c07a59166296e3a3b.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/Product_landing_page_2.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/Sketchpad.png":
      /*!****************************************!*\
  !*** ./src/projects_img/Sketchpad.png ***!
  \****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "f7aef658f7a1a2ef67a3.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/Sketchpad.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/admin-dashboard.png":
      /*!**********************************************!*\
  !*** ./src/projects_img/admin-dashboard.png ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "5be4375f3820342bd5cf.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/admin-dashboard.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/arcane.png":
      /*!*************************************!*\
  !*** ./src/projects_img/arcane.png ***!
  \*************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "255976e7a8dbd88ebe46.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/arcane.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/image-slider.png":
      /*!*******************************************!*\
  !*** ./src/projects_img/image-slider.png ***!
  \*******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "b65c9e115799dc839377.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/image-slider.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/library.png":
      /*!**************************************!*\
  !*** ./src/projects_img/library.png ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "2a94da37a6c03387cc07.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/library.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/restaurant-page.png":
      /*!**********************************************!*\
  !*** ./src/projects_img/restaurant-page.png ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "7a4d4e17bbddf26610b9.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/restaurant-page.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/rps.png":
      /*!**********************************!*\
  !*** ./src/projects_img/rps.png ***!
  \**********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "9804c7d044bb43cff8c7.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/rps.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/second-sign-up-form.png":
      /*!**************************************************!*\
  !*** ./src/projects_img/second-sign-up-form.png ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "8160aff812f8618a0494.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/second-sign-up-form.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/simple-form.png":
      /*!******************************************!*\
  !*** ./src/projects_img/simple-form.png ***!
  \******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "2ee58ee35d70a7045734.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/simple-form.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/tic-tac-toe.png":
      /*!******************************************!*\
  !*** ./src/projects_img/tic-tac-toe.png ***!
  \******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "06fe93653398aa8db341.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/tic-tac-toe.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/todo-list.png":
      /*!****************************************!*\
  !*** ./src/projects_img/todo-list.png ***!
  \****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "ad69c2694ac7b18b5683.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/todo-list.png?',
        );

        /***/
      },

    /***/ "./src/projects_img/weather-app.png":
      /*!******************************************!*\
  !*** ./src/projects_img/weather-app.png ***!
  \******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "4f1c7959f46aee3a337d.png";\n\n//# sourceURL=webpack://homepage/./src/projects_img/weather-app.png?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (
            i > -1 &&
            (!scriptUrl || !/^http(s?):/.test(scriptUrl))
          )
            scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
