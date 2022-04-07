"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.js\");\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\NET_NINJA\\\\Projects\\\\Portfolio\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\NET_NINJA\\\\Projects\\\\Portfolio\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBb0M7QUFFckIsU0FBU0MsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEQscUJBQ0U7a0JBQ0UsNEVBQUNILHFEQUFLO3NCQUNKLDRFQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDdEI7cUJBQ1AsQ0FDSDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGhlbWU+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWU+XG4gICAgPC8+XG4gICk7XG59XG4gIl0sIm5hbWVzIjpbIlRoZW1lIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.js":
/*!*******************************!*\
  !*** ./src/styles/globals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ \"styled-normalize\");\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize};\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    font-size: 62.5%;\n    scroll-behavior: smooth;\n\n  }\n  body {\n    font-family: ${(props)=>props.theme.fonts.main\n};\n    font-size: 1.6rem;\n    background: ${(props)=>props.theme.colors.background1\n};\n    color: ${(props)=>props.theme.colors.primary1\n};\n    cursor: default;\n\n  }\n  h1,h2,h3,h4,h5,h6,button {\n    font-family: ${(props)=>props.theme.fonts.title\n};\n  }\n  a {\n    text-decoration: none;\n  }\n  li{\n    list-style: none;\n  }\n\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0Q7QUFDVDtBQUU3QyxNQUFNRSxZQUFZLEdBQUdGLGdFQUFpQixDQUFDO0VBQ3JDLEVBQUVDLHVEQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7aUJBYUcsRUFBRUUsQ0FBQUEsS0FBSyxHQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJO0FBQUEsQ0FBQzs7Z0JBRW5DLEVBQUVILENBQUFBLEtBQUssR0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNHLE1BQU0sQ0FBQ0MsV0FBVztBQUFBLENBQUM7V0FDL0MsRUFBRUwsQ0FBQUEsS0FBSyxHQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0csTUFBTSxDQUFDRSxRQUFRO0FBQUEsQ0FBQzs7Ozs7aUJBS2pDLEVBQUVOLENBQUFBLEtBQUssR0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBQ0ssS0FBSztBQUFBLENBQUM7Ozs7Ozs7OztBQVNwRCxDQUFDO0FBRUQsaUVBQWVSLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZXMvZ2xvYmFscy5qcz9kNDUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnc3R5bGVkLW5vcm1hbGl6ZSc7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAke25vcm1hbGl6ZX07XG5cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBodG1sIHtcbiAgICBmb250LXNpemU6IDYyLjUlO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuXG4gIH1cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udHMubWFpbn07XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZDF9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5MX07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gIH1cbiAgaDEsaDIsaDMsaDQsaDUsaDYsYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy50aXRsZX07XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzOyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsIm5vcm1hbGl6ZSIsIkdsb2JhbFN0eWxlcyIsInByb3BzIiwidGhlbWUiLCJmb250cyIsIm1haW4iLCJjb2xvcnMiLCJiYWNrZ3JvdW5kMSIsInByaW1hcnkxIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/globals.js\n");

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/default */ \"./src/themes/default.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ \"./src/styles/globals.js\");\n\n\n\n\nconst Theme = ({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: _themes_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_globals__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\NET_NINJA\\\\Projects\\\\Portfolio\\\\src\\\\styles\\\\theme.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\NET_NINJA\\\\Projects\\\\Portfolio\\\\src\\\\styles\\\\theme.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUVaO0FBQ0Q7QUFFckMsTUFBTUcsS0FBSyxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLGlCQUN6Qiw4REFBQ0osNERBQWE7UUFBQ0MsS0FBSyxFQUFFQSx1REFBSzs7MEJBQ3pCLDhEQUFDQyxnREFBWTs7Ozt5QkFBRztZQUNmRSxRQUFROzs7Ozs7aUJBQ0s7QUFDaEI7QUFFRixpRUFBZUQsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy90aGVtZS5qcz8xOWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVzL2RlZmF1bHRcIjtcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi9nbG9iYWxzJztcblxuY29uc3QgVGhlbWUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9UaGVtZVByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlbWU7Il0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsIkdsb2JhbFN0eWxlcyIsIlRoZW1lIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.js\n");

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    // Temp fonts\n    fonts: {\n        title: \"Space Grotesk, sans-serif\",\n        main: \"Space Grotesk, sans-serif\"\n    },\n    // Colors for layout\n    colors: {\n        primary1: \"hsl(204,23.8%,95.9%)\",\n        background1: \"#0F1624\",\n        accent1: \"hsl(34.9,98.6%,72.9%)\",\n        button: \"hsl(205.1,100%,36.1%)\",\n        background2: \"hsl(232.7,27.3%,23.7%)\"\n    },\n    // Breakpoints for responsive design\n    breakpoints: {\n        sm: \"screen and (max-width: 640px)\",\n        md: \"screen and (max-width: 768px)\",\n        lg: \"screen and (max-width: 1024px)\",\n        xl: \"screen and (max-width: 1280px)\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWVzL2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlO0lBQ2IsYUFBYTtJQUNiQSxLQUFLLEVBQUU7UUFDTEMsS0FBSyxFQUFFLDJCQUEyQjtRQUNsQ0MsSUFBSSxFQUFFLDJCQUEyQjtLQUNsQztJQUNELG9CQUFvQjtJQUNwQkMsTUFBTSxFQUFFO1FBQ05DLFFBQVEsRUFBRSxzQkFBc0I7UUFDaENDLFdBQVcsRUFBRSxTQUFTO1FBQ3RCQyxPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDQyxNQUFNLEVBQUUsdUJBQXVCO1FBQy9CQyxXQUFXLEVBQUUsd0JBQXdCO0tBQ3RDO0lBQ0Qsb0NBQW9DO0lBQ3BDQyxXQUFXLEVBQUU7UUFDWEMsRUFBRSxFQUFFLCtCQUErQjtRQUNuQ0MsRUFBRSxFQUFFLCtCQUErQjtRQUNuQ0MsRUFBRSxFQUFFLGdDQUFnQztRQUNwQ0MsRUFBRSxFQUFFLGdDQUFnQztLQUNyQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RoZW1lcy9kZWZhdWx0LmpzP2IxZTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAvLyBUZW1wIGZvbnRzXG4gIGZvbnRzOiB7XG4gICAgdGl0bGU6IFwiU3BhY2UgR3JvdGVzaywgc2Fucy1zZXJpZlwiLFxuICAgIG1haW46IFwiU3BhY2UgR3JvdGVzaywgc2Fucy1zZXJpZlwiXG4gIH0sXG4gIC8vIENvbG9ycyBmb3IgbGF5b3V0XG4gIGNvbG9yczoge1xuICAgIHByaW1hcnkxOiBcImhzbCgyMDQsMjMuOCUsOTUuOSUpXCIsXG4gICAgYmFja2dyb3VuZDE6IFwiIzBGMTYyNFwiLFxuICAgIGFjY2VudDE6IFwiaHNsKDM0LjksOTguNiUsNzIuOSUpXCIsXG4gICAgYnV0dG9uOiBcImhzbCgyMDUuMSwxMDAlLDM2LjElKVwiLFxuICAgIGJhY2tncm91bmQyOiBcImhzbCgyMzIuNywyNy4zJSwyMy43JSlcIixcbiAgfSxcbiAgLy8gQnJlYWtwb2ludHMgZm9yIHJlc3BvbnNpdmUgZGVzaWduXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgc206ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScsXG4gICAgbWQ6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KScsXG4gICAgbGc6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCknLFxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpJ1xuICB9LFxufVxuIl0sIm5hbWVzIjpbImZvbnRzIiwidGl0bGUiLCJtYWluIiwiY29sb3JzIiwicHJpbWFyeTEiLCJiYWNrZ3JvdW5kMSIsImFjY2VudDEiLCJidXR0b24iLCJiYWNrZ3JvdW5kMiIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwieGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/themes/default.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-normalize");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();