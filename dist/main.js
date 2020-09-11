/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".form-radio-container.inline-item input {\\r\\n    position: relative;\\r\\n    top: 0.25em;\\r\\n    margin: 0 0.5em;\\r\\n}\\r\\n#search-button {\\r\\n    position: relative;\\r\\n    top: 1em;\\r\\n}\\r\\n#internship_filter_group {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n#student_type_filter_group {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\niframe {\\r\\n    width: 100%;\\r\\n    height: 67vh;\\r\\n}\\r\\n\\r\\n#list-container {\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n#list-container .to-top {\\r\\n    position: fixed;\\r\\n    bottom: 1em;\\r\\n    right: 5%;\\r\\n}\\r\\n\\r\\n#list:after {\\r\\n    content: \\\"\\\";\\r\\n    height: 30vh;\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n@media (min-width: 800px) {\\r\\n    .flex-container {\\r\\n        display: flex;\\r\\n        flex-wrap: wrap;\\r\\n\\r\\n        /*max-width: 97vw;*/\\r\\n    }\\r\\n\\r\\n    #list {\\r\\n        overflow: scroll;\\r\\n        height: 100%;\\r\\n        /*width: 49%;\\r\\n            min-width:320px;*/\\r\\n    }\\r\\n\\r\\n    #list-container {\\r\\n        overflow: hidden;\\r\\n    }\\r\\n\\r\\n    iframe,\\r\\n    #list-container {\\r\\n        height: 67vh;\\r\\n        flex: 1 1 300px;\\r\\n    }\\r\\n\\r\\n    #list-container .to-top {\\r\\n        position: absolute;\\r\\n        bottom: 1em;\\r\\n        right: 5%;\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n.indented {\\r\\n    margin-left: 0.5vw;\\r\\n}\\r\\n\\r\\n.details {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\nh1 {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\ndiv.main {\\r\\n    display: inline-block;\\r\\n    vertical-align: top;\\r\\n}\\r\\n\\r\\n#title {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n#filters {\\r\\n    width: 99%;\\r\\n}\\r\\n\\r\\n.details * {\\r\\n    font-family: sans-serif;\\r\\n}\\r\\n\\r\\n.organizationCard {\\r\\n    border: 5px solid #eaeaea;\\r\\n    margin: 0.5vh;\\r\\n    padding: 1vh;\\r\\n}\\r\\n\\r\\n#tabs {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n.tab {\\r\\n    padding: 1vh;\\r\\n}\\r\\n\\r\\n.details {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n#zip-filter {\\r\\n    margin: 0vw 0vw 0vw 5vw;\\r\\n}\\r\\n\\r\\n.color-dot {\\r\\n    border-radius: 0.4em;\\r\\n    width: 0.8em;\\r\\n    height: 0.8em;\\r\\n    display: inline-block;\\r\\n    margin: 0em 0.5em 0em 0.5em;\\r\\n}\\r\\n\\r\\n.label-hospitals {\\r\\n    background-color: orange;\\r\\n}\\r\\n\\r\\n.label-nonprofits {\\r\\n    background-color: blue;\\r\\n}\\r\\n\\r\\n.label-schools {\\r\\n    background-color: green;\\r\\n}\\r\\n\\r\\n.label-faith-based {\\r\\n    background-color: brown;\\r\\n}\\r\\n\\r\\n.label-government {\\r\\n    background-color: yellow;\\r\\n}\\r\\n\\r\\n.label-law {\\r\\n    background-color: pink;\\r\\n}\\r\\n\\r\\n#tabs {\\r\\n    display: flex;\\r\\n    background-color: #ccc;\\r\\n\\r\\n}\\r\\n\\r\\n.tab {\\r\\n    background-color: inherit;\\r\\n    border-width: 3px;\\r\\n    border-color: #ccc;\\r\\n    border-style: hidden;\\r\\n    height: 1em;\\r\\n    overflow: hidden;\\r\\n    white-space: nowrap;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n    overflow: visible;\\r\\n    background-color: #fff;\\r\\n    border-style: solid hidden hidden hidden;\\r\\n}\\r\\n\\r\\n.to-top {\\r\\n    padding: 0.3rem !important;\\r\\n    font-size: 1rem !important;\\r\\n}\\r\\n\\r\\n.unconfirmed {\\r\\n    color: #aaa;\\r\\n}\\r\\n.color-dot {\\r\\n    border-radius: 0.4em; width: 0.8em; height: 0.8em; display: inline-block; margin: 0em 0.5em 0em 0.5em;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var _textproc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textproc.js */ \"./src/textproc.js\");\n/* harmony import */ var _schools_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schools-list.js */ \"./src/schools-list.js\");\n/* harmony import */ var _list_build_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-build.js */ \"./src/list-build.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n/*global $, jQuery*/\r\n/*global var, SCHOOLS_LIST*/\r\n/*global var, address_list*/\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction correctSchool(school_index) {\r\n    'use strict';\r\n    return document.getElementById(_schools_list_js__WEBPACK_IMPORTED_MODULE_1__[\"SCHOOLS_LIST\"][school_index].toLowerCase() + \"-filter\").checked;\r\n}\r\n\r\nfunction correctZip(address, schools_data) {\r\n    'use strict';\r\n    var i, cell, zip = document.getElementById(\"zip-filter\").value;\r\n    if (zip.length !== 5) {\r\n        if (zip.length > 0) {\r\n            //document.getElementById(\"zip-filter\").value = \"incorrect zip code\";\r\n        }\r\n        return true;\r\n    }\r\n    cell = schools_data[address.school][address.index][\"Address\\nPhone\\nWebsite URL\"];\r\n    for (i = 0; i < cell.length - 5; i += 1) {\r\n\r\n        if (cell.substring(i, i + 5) === zip) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\n/*\r\nfunction correctEligibility(address, schools_data) {\r\n    'use strict';\r\n    var i, cell, yes = document.getElementById(\"internship-yes-filter\").checked, no = document.getElementById(\"internship-no-filter\").checked, no_but = document.getElementById(\"internship-no-but-filter\").checked, other = document.getElementById(\"internship-other-filter\").checked;\r\n\r\n    cell = schools_data[address.school][address.index][\"Confirmed Participation in Any Form\\n(yes/no and time last updated)\"];\r\n    switch (yesNoFromString(cell)) {\r\n        case \"yes\":\r\n            return yes;\r\n        case \"no\":\r\n            return no;\r\n        case \"no, but\":\r\n            return no_but;\r\n        case \"other\":\r\n            return other;\r\n    }\r\n}\r\n*/\r\nfunction correctEligibility(address, schools_data) {\r\n    var cell;\r\n    if (!document.getElementById(\"confirmed-filter\").checked)\r\n        return true;\r\n    cell = schools_data[address.school][address.index][\"Available for Internship/Volunteer Program?\\n(yes/no and explanation)\"];\r\n    return Object(_textproc_js__WEBPACK_IMPORTED_MODULE_0__[\"yesNoFromString\"])(cell) === \"yes\";\r\n}\r\n\r\nfunction correctCategory(address, schools_data) {\r\n    'use strict';\r\n    var selected, selectedId, cell, i;\r\n    selected = document.getElementsByClassName(\"selected\");\r\n    for (i = 0; i < selected.length; i += 1) {\r\n        if (selected[i].classList.contains(\"tab\")) {\r\n            selectedId = selected[i].id;\r\n            break;\r\n        }\r\n    }\r\n    if (selectedId.length === 0) {\r\n        selectedId.push(\"all\");\r\n    }\r\n    if (selectedId.includes(\"all\")) {\r\n        return true;\r\n    }\r\n    cell = schools_data[address.school][address.index][\"Pin Type\"];\r\n    var a = selectedId.toLowerCase().split(\"_\")[1];\r\n    var b = (cell.substring(0, cell.length)).toLowerCase();\r\n    return (a.includes(b) && b !== '') || (b.includes(a) && b !== '');\r\n}\r\n\r\nfunction update(address_list) {\r\n    \"use strict\";\r\n\r\n    var i, j, temp, addresses = [], schools_data = [], school_index, list;\r\n    for (i = 0; i < _schools_list_js__WEBPACK_IMPORTED_MODULE_1__[\"SCHOOLS_LIST\"].length; i += 1) {\r\n        schools_data.push(JSON.parse(localStorage.getItem(_schools_list_js__WEBPACK_IMPORTED_MODULE_1__[\"SCHOOLS_LIST\"][i])));\r\n    }\r\n\r\n    for (i = 0; i < address_list.length; i += 1) {\r\n        school_index = address_list[i].school;\r\n        if (\r\n                correctSchool(school_index)\r\n                && correctZip(address_list[i], schools_data)\r\n                && correctEligibility(address_list[i], schools_data)\r\n                && correctCategory(address_list[i], schools_data)\r\n            ) { //Check if the box corresponding with the school is checked\r\n            addresses.push(address_list[i]);\r\n        }\r\n    }\r\n\r\n    //Bubble sort I think\r\n    for (i = 0; i < addresses.length; i += 1) {\r\n        for (j = 0; j < addresses.length - 1 - i; j += 1) {\r\n            if (addresses[j].relevance > addresses[j + 1].relevance) {\r\n                temp = addresses[j];\r\n                addresses[j] = addresses[j + 1];\r\n                addresses[j + 1] = temp;\r\n            }\r\n        }\r\n    }\r\n    list = new _list_build_js__WEBPACK_IMPORTED_MODULE_2__[\"HtmlList\"](schools_data, addresses);\r\n    document.getElementById(\"list\").innerHTML = list.makeList();\r\n}\r\n\r\n$(document).ready(function () {\r\n    \"use strict\";\r\n    $(\".filter, :checkbox\").on(\"click\", function() { update(Object(_search_js__WEBPACK_IMPORTED_MODULE_3__[\"setAddressesAll\"])()) } );\r\n    $(document).keypress(function (event) {\r\n        if (event.which === 13 || (event.target.id === \"zip-filter\"/* && event.target.value.length === 4*/)) {\r\n            update(Object(_search_js__WEBPACK_IMPORTED_MODULE_3__[\"setAddressesAll\"])());\r\n        }\r\n\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/filter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list_build_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-build.js */ \"./src/list-build.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./src/init.js\");\n\r\n\r\n// import \"./filter.js\";\r\n// import \"./search.js\";\r\n// import \"./navigation.js\";\r\n\r\nwindow.openDetail = _list_build_js__WEBPACK_IMPORTED_MODULE_0__[\"openDetail\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ \"./src/filter.js\");\n/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.js */ \"./src/navigation.js\");\n\r\n\r\n\r\n\r\n// This is the URL of the no-edit public copy\r\nvar publicSpreadSheetUrl = \"https://docs.google.com/spreadsheets/d/1sR0WE-VpgvdccZWHSMWuc7j7ZqkVJavosGG5jGHdxjQ/edit#gid=1715596439\"\r\nfunction init() {\r\n    Tabletop.init({        //Singleton? //Authkey? //Parameterize?\r\n        key: publicSpreadSheetUrl,\r\n        callback: recordInfo,\r\n        debug: false\r\n    })\r\n}\r\nfunction recordInfo(data, tabletop) {\r\n    //console.log(data);\r\n    storeSchool(tabletop, \"CAMS\");\r\n    //storeSchool(tabletop, \"Jordan\");\r\n    storeSchool(tabletop, \"Lakewood\"); //The issue here is that in the original doc it got named with a space in it :(\r\n    storeSchool(tabletop, \"McBride\");\r\n    storeSchool(tabletop, \"Poly\");\r\n    Object(_filter_js__WEBPACK_IMPORTED_MODULE_1__[\"update\"])(Object(_search_js__WEBPACK_IMPORTED_MODULE_0__[\"setAddressesAll\"])());\r\n\r\n    Object(_navigation_js__WEBPACK_IMPORTED_MODULE_2__[\"toTopSetup\"])();\r\n}\r\n\r\nfunction storeSchool(tabletop, school_name) {\r\n    localStorage.setItem(school_name, JSON.stringify(tabletop.sheets(school_name).all()));\r\n}\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', init);\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ }),

/***/ "./src/list-build.js":
/*!***************************!*\
  !*** ./src/list-build.js ***!
  \***************************/
/*! exports provided: HtmlList, openDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HtmlList\", function() { return HtmlList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openDetail\", function() { return openDetail; });\n/* harmony import */ var _textproc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textproc.js */ \"./src/textproc.js\");\n\r\n\r\n// Change DETAILS_URL in final\r\n// const DETAILS_URL = 'http://www.lbusdhealthassetmap.com/internship-details.html'\r\nconst DETAILS_URL = 'C:\\\\Users\\\\pvdon\\\\Documents\\\\HAMP\\\\hamp-primary-website\\\\internship-details\\\\internship-details.html'\r\n/*\r\n* Called on each row in MakeList\r\n*/\r\nvar openDetail = function (index) {\r\n    //var display = document.getElementById('detail' + index).style.display;\r\n    if (document.getElementById('detail' + index).style.display !== 'block') {\r\n        document.getElementById('detail' + index).style.display = \"block\";\r\n    } else {\r\n        document.getElementById('detail' + index).style.display = \"none\";\r\n    }\r\n}\r\nfunction escapeDoubleQuotes(str) {\r\n    var parts = str.split(\"\\\"\");\r\n    return parts.join(\"_esc34\");\r\n}\r\nfunction unescapeDoubleQuotes(str) {\r\n    var parts = str.split(\"_esc34\");\r\n    return parts.join(\"\\\"\");\r\n}\r\n\r\nfunction HtmlList(schools_data, addresses) {\r\n    this.schools_data = schools_data;\r\n    this.addresses = addresses;\r\n    this.makeRowHtml = function (row, index) {\r\n        'use strict';\r\n        var str = \"\", color = \"\", color_dot = \"\";\r\n        color_dot = \"<div style=\\\"background-color: \" + colorFromType(row[\"Pin Type\"]) + \"\\\" class='color-dot'></div>\";\r\n        str += \"<div class='organizationCard paragraph\";\r\n        if (Object(_textproc_js__WEBPACK_IMPORTED_MODULE_0__[\"yesNoFromString\"])(row[\"Available for Internship/Volunteer Program?\\n(yes/no and explanation)\"]) !== \"yes\")\r\n            str += \" unconfirmed\";\r\n        str += \"'\";\r\n        if (index === 0) {\r\n            str += \" id = 'top'\";\r\n        }\r\n        str += \" onclick='(openDetail(\" + index + \"))' >\";\r\n        str += \"<h3>\" + color_dot + row[\"Site Name\"] + \"</h3>\";\r\n        str += \"<div class=\\\"details\\\" id=\\\"detail\" + index + \"\\\">\";\r\n        if (row[\"Brief Statement of Organization's Purpose\"]) {\r\n            str += \"<p>\" + htmlWithBreaks(row[\"Brief Statement of Organization's Purpose\"]) + \"</p>\";\r\n        }\r\n        if (row[\"Address\\nPhone\\nWebsite URL\"]) {\r\n            str += \"<div class='indented'>\" + htmlWithBreaks(urlsToLinks(row[\"Address\\nPhone\\nWebsite URL\"])) + \"</div>\";\r\n        }\r\n        if (row[\"Internship/Volunteer Program Description\"]) {\r\n            str += \"<p><strong>Internship/Volunteer Program:</strong> \" + htmlWithBreaks(row[\"Internship/Volunteer Program Description\"]) + \"</p>\";\r\n        }\r\n        var requirements = row[\"Internship/Volunteer Requirements/Logistics\\n(Eligibility requirements, application deadlines, internship term, etc.)\"];\r\n        if (requirements) {\r\n            str += \"<p><strong>Program Requirements:</strong> \" + htmlWithUl(requirements) + \"</p>\";\r\n        }\r\n        var form_link = row[\"Student Internship/Volunteer Form Link\\n(Interest Form)\"];\r\n        if (form_link) {\r\n            str += '<div style=\"position: relative; height: 1.5em;\"><div style=\"position: absolute; right: 0\"><a target=\"_blank\" href=\"'\r\n                + DETAILS_URL\r\n                + '?data=' + escapeDoubleQuotes(JSON.stringify(row))\r\n                + '\">Interest Form</a></div></div>';\r\n        }\r\n        str += \"</div>\";\r\n        str += \"</div>\";\r\n\r\n        return str;\r\n    }\r\n\r\n    var colorFromType = function (org) {\r\n        'use strict';\r\n        switch (org.toLowerCase()) {\r\n            case \"hospital/clinic\":\r\n                return \"orange\";\r\n            case \"non-profit\":\r\n                return \"blue\";\r\n            case \"school\":\r\n                return \"green\";\r\n            case \"faith-based\":\r\n                return \"brown\";\r\n            case \"government\":\r\n                return \"yellow\";\r\n            case \"health law\":\r\n                return \"pink\";\r\n        }\r\n        return \"white\";\r\n    }\r\n    /*var htmlWithUl = function(str) {\r\n        var i, out=\"<ul><li>\";\r\n        for (i = 0; i < str.length; i++) {\r\n            if (str.charCodeAt(i) === 10) out += \"</li> <li>\";\r\n            else if (str.charCodeAt(i) !== 45) out+=str.substring(i, i+1);\r\n        }\r\n        out += \"</li></ul>\"\r\n        return out;\r\n    }*/\r\n    var htmlWithUl = function (str) {\r\n        var i, out = \"<ul>\", j, is_bullet = false;\r\n        for (i = 0; i < str.length; i++) {\r\n            if (str.charCodeAt(i) === 45 && !is_bullet) {\r\n                j = i - 1;\r\n                while (true) {\r\n                    if (str.charCodeAt(j) === 10 || j <= 0) {\r\n                        is_bullet = true;\r\n                        break;\r\n                    }\r\n                    if (str.charCodeAt(j) > 32) {\r\n                        is_bullet = false;\r\n                        break;\r\n                    }\r\n                    j -= 1;\r\n                }\r\n                if (is_bullet) {\r\n                    out += \"<li>\";\r\n                }\r\n\r\n            }\r\n            else if (str.charCodeAt(i) === 10 && is_bullet) {\r\n                out += \"</li>\";\r\n                is_bullet = false;\r\n            }\r\n            else {\r\n                if (str.charCodeAt(i) === 10) out += \"<br>\";\r\n                out += str.substring(i, i + 1);\r\n            }\r\n\r\n\r\n            if (((str.length - 1) === i) && is_bullet) {\r\n                out += \"</li>\";\r\n                is_bullet = false;\r\n            }\r\n\r\n\r\n        }\r\n        out += \"</ul>\"\r\n        return out;\r\n    }\r\n    var htmlWithBreaks = function (str) {\r\n        var i, out = \"\";\r\n        for (i = 0; i < str.length; i++) {\r\n            if (str.charCodeAt(i) === 10) out += \"<br>\";\r\n            else out += str.substring(i, i + 1);\r\n        }\r\n        return out;\r\n    }\r\n    var getUrlFromString = function (str) {\r\n        'use strict';\r\n        var start, end;\r\n        start = str.indexOf(\"http\");\r\n        if (start === -1) {\r\n            start = str.indexOf(\"www\");\r\n        }\r\n        if (start === -1) {\r\n            return \"\";\r\n        }\r\n        for (end = start; end <= str.length; end += 1) {\r\n            if (end < str.length && (str.charCodeAt(end) < 33 || str.charCodeAt(end) > 126)) {\r\n                break;\r\n            }\r\n        }\r\n        return str.substring(start, end);\r\n    }\r\n    var urlsToLinks = function (str) {\r\n        'use strict';\r\n        var start, end, url;\r\n        start = str.indexOf(\"http\");\r\n        if (start === -1) {\r\n            start = str.indexOf(\"www\");\r\n        }\r\n        if (start === -1) {\r\n            start = str.indexOf(\"https\");\r\n        }\r\n        if (start === -1) {\r\n            return \"\";\r\n        }\r\n        for (end = start; end <= str.length; end += 1) {\r\n            if (end < str.length && (str.charCodeAt(end) < 33 || str.charCodeAt(end) > 126)) {\r\n                break;\r\n            }\r\n        }\r\n        url = str.substring(start, end);\r\n        return str.substring(0, start) + \"<a href = '\" + url + \"' >\" + url + \"</a>\" + str.substring(end);\r\n    }\r\n\r\n\r\n\r\n    this.makeList = function () {\r\n        'use strict';\r\n        var str = \"\", i, j;\r\n        for (i = 0; i < addresses.length; i += 1) {\r\n            /*for (j = 0; j < schools_data[addresses[i].school].length; j += 1) {\r\n            str += makeRowHtml(schools_data[addresses[i].school][j]);\r\n        }*/\r\n            str += this.makeRowHtml(schools_data[addresses[i].school][addresses[i].index], i);\r\n        }\r\n        //console.log(str);\r\n        return str;\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/list-build.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/*! exports provided: toTopSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toTopSetup\", function() { return toTopSetup; });\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ \"./src/filter.js\");\n\r\n\r\n\r\nfunction tabSetup() {\r\n    var i, tabs, selfLinks;\r\n    tabs = document.getElementsByClassName(\"tab\");\r\n    for (i = 0; i < tabs.length; i += 1) {\r\n        tabs[i].onclick = select;\r\n    }\r\n}\r\nfunction toTopSetup() {\r\n    var link = document.getElementsByClassName(\"to-top\")[0], scroll = document.getElementById(\"list\");\r\n    if (window.getComputedStyle(scroll).overflow === \"scroll\") {\r\n        link.onclick = function () {\r\n            scroll.scrollTop = 0;\r\n            return false;\r\n        };\r\n    }\r\n}\r\nfunction select() {\r\n    clearSelect();\r\n    this.classList.add(\"selected\");\r\n    Object(_filter_js__WEBPACK_IMPORTED_MODULE_1__[\"update\"])(Object(_search_js__WEBPACK_IMPORTED_MODULE_0__[\"setAddressesAll\"])());\r\n}\r\nfunction clearSelect() {\r\n    var i, tabs;\r\n    tabs = document.getElementsByClassName(\"tab\");\r\n    for (i = 0; i < tabs.length; i += 1) {\r\n        tabs[i].classList.remove(\"selected\");\r\n    }\r\n}\r\nwindow.onload = tabSetup;\r\n\r\n\n\n//# sourceURL=webpack:///./src/navigation.js?");

/***/ }),

/***/ "./src/schools-list.js":
/*!*****************************!*\
  !*** ./src/schools-list.js ***!
  \*****************************/
/*! exports provided: SCHOOLS_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCHOOLS_LIST\", function() { return SCHOOLS_LIST; });\nconst SCHOOLS_LIST = [\"CAMS\", /*\"Jordan\",*/ \"Lakewood\", \"McBride\", \"Poly\"];\n\n//# sourceURL=webpack:///./src/schools-list.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: setAddressesAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAddressesAll\", function() { return setAddressesAll; });\n/* harmony import */ var _schools_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schools-list.js */ \"./src/schools-list.js\");\n/*global $, jQuery*/\r\n/*global var, SCHOOLS_LIST*/\r\n\r\n// var address_list;\r\n\r\nfunction setAddressesAll() { //TERRIBLY INEFFICIENT PLEASE FIX BEFORE FINAL RELEASE\r\n    \"use strict\";\r\n    var i, j, current = [], addresses = [];\r\n    for (i = 0; i < _schools_list_js__WEBPACK_IMPORTED_MODULE_0__[\"SCHOOLS_LIST\"].length; i += 1) {\r\n        current = JSON.parse(localStorage.getItem(_schools_list_js__WEBPACK_IMPORTED_MODULE_0__[\"SCHOOLS_LIST\"][i]));\r\n\r\n        for (j = 0; j < current.length; j += 1) {\r\n            addresses.push({\r\n                school: i,\r\n                index: j,\r\n                relevance: 1\r\n            });\r\n        }\r\n    }\r\n    return addresses;\r\n}\r\n\r\nfunction keywordSearch() {\r\n    \"use strict\";\r\n    var i, j, attribute, k, relevance, current = [], addresses = [], keyword;\r\n    keyword = document.getElementById(\"keyword_search\").value;\r\n    for (i = 0; i < _schools_list_js__WEBPACK_IMPORTED_MODULE_0__[\"SCHOOLS_LIST\"].length; i += 1) {\r\n        current = JSON.parse(localStorage.getItem(_schools_list_js__WEBPACK_IMPORTED_MODULE_0__[\"SCHOOLS_LIST\"][i]));\r\n        for (j = 0; j < current.length; j += 1) {\r\n            relevance = 0;\r\n\r\n            for (attribute in current[j]) {\r\n                if (current[j].hasOwnProperty(attribute)) {\r\n                    for (k = 0; k < current[i][attribute].length - keyword.length; k += 1) {\r\n                        if (current[j][attribute].substring(k, k + keyword.length) === keyword) {\r\n                            relevance += 1;\r\n                        }\r\n                    }\r\n                    //relevance += (current[j][attribute].match(/is/g) || []).length;\r\n                }\r\n            }\r\n            if (relevance > 0) {\r\n                addresses.push({\r\n                    school: i,\r\n                    index: j,\r\n                    relevance: relevance\r\n                });\r\n            }\r\n\r\n        }\r\n    }\r\n    update(addresses);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/search.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/textproc.js":
/*!*************************!*\
  !*** ./src/textproc.js ***!
  \*************************/
/*! exports provided: yesNoFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yesNoFromString\", function() { return yesNoFromString; });\nfunction yesNoFromString(str) {\r\n    'use strict';\r\n    str = \" \" + str + \" \";\r\n    if (str.search(/ yes/i) !== -1) return \"yes\";\r\n    if (str.search(/ no/i) !== -1) {\r\n        if (str.search(/ but/i) !== -1) return \"no, but\";\r\n        return \"no\";\r\n    }\r\n    return \"other\";\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/textproc.js?");

/***/ })

/******/ });