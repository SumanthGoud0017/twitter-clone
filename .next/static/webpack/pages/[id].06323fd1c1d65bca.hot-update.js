"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\nfunction Comment(param) {\n    var id = param.id, comment = param.comment;\n    var ref;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 flex cursor-pointer border-b border-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: comment === null || comment === void 0 ? void 0 : comment.userImg,\n                alt: \"\",\n                className: \"h-11 w-11 rounded-full mr-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-[#6e767d]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"inline-block group\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline\",\n                                                children: comment === null || comment === void 0 ? void 0 : comment.username\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                                lineNumber: 24,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"ml-1.5 text-sm sm:text-[15px]\",\n                                                children: [\n                                                    \"@\",\n                                                    comment === null || comment === void 0 ? void 0 : comment.tag,\n                                                    ' '\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, this),\n                                    ' . ',\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"hover:underline text-sm sm:text-[15px]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            fromNow: true,\n                                            children: comment === null || comment === void 0 ? void 0 : (ref = comment.timestamp) === null || ref === void 0 ? void 0 : ref.toDate()\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-[#d9d9d9] mt-0.5 text-[15px] sm:text-base\",\n                                        children: comment === null || comment === void 0 ? void 0 : comment.comment\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"icon group flex-shrink-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.DotsHorizontalIcon, {\n                                    className: \"h-5 text-[#6e767d] group-hover:text-[#1d9bf0]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[#6e767d] flex justify-between w-10/12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"icon group\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ChatIcon, {\n                                    className: \"h-5 group-hover:text-[#1d9bf0]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-1 group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"icon group-hover:bg-pink-600/10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.HeartIcon, {\n                                            className: \"h-5 group-hover:text-pink-600\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"group-hover:text-pink-600 text-sm\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"icon group\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ShareIcon, {\n                                    className: \"h-5 group-hover:text-[#1d9bf0]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"icon group\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ChartBarIcon, {\n                                    className: \"h-5 group-hover:text-[#1d9bf0]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\components\\\\Comment.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBFLENBQUM7S0F4RFFKLE9BQU87QUEwRGhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50LmpzPzNiMjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xuaW1wb3J0IHtcbiAgQ2hhcnRCYXJJY29uLFxuICBDaGF0SWNvbixcbiAgRG90c0hvcml6b250YWxJY29uLFxuICBIZWFydEljb24sXG4gIFNoYXJlSWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5cbmZ1bmN0aW9uIENvbW1lbnQoeyBpZCwgY29tbWVudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgZmxleCBjdXJzb3ItcG9pbnRlciBib3JkZXItYiBib3JkZXItZ3JheS03MDBcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtjb21tZW50Py51c2VySW1nfVxuICAgICAgICBhbHQ9XCJcIlxuICAgICAgICBjbGFzc05hbWU9XCJoLTExIHctMTEgcm91bmRlZC1mdWxsIG1yLTRcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWyM2ZTc2N2RdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBncm91cFwiPlxuICAgICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bI2Q5ZDlkOV0gdGV4dC1bMTVweF1cbiAgICAgICAgICAgICAgc206dGV4dC1iYXNlIGlubGluZS1ibG9jayBncm91cC1ob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbW1lbnQ/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xLjUgdGV4dC1zbSBzbTp0ZXh0LVsxNXB4XVwiPlxuICAgICAgICAgICAgICAgIEB7Y29tbWVudD8udGFnfXsnICd9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeycgLiAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lIHRleHQtc20gc206dGV4dC1bMTVweF1cIj5cbiAgICAgICAgICAgICAgPE1vbWVudCBmcm9tTm93Pntjb21tZW50Py50aW1lc3RhbXA/LnRvRGF0ZSgpfTwvTW9tZW50PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI2Q5ZDlkOV0gbXQtMC41IHRleHQtWzE1cHhdIHNtOnRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICB7Y29tbWVudD8uY29tbWVudH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gZ3JvdXAgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgPERvdHNIb3Jpem9udGFsSWNvbiBjbGFzc05hbWU9XCJoLTUgdGV4dC1bIzZlNzY3ZF0gZ3JvdXAtaG92ZXI6dGV4dC1bIzFkOWJmMF1cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjNmU3NjdkXSBmbGV4IGp1c3RpZnktYmV0d2VlbiB3LTEwLzEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGdyb3VwXCI+XG4gICAgICAgICAgICA8Q2hhdEljb24gY2xhc3NOYW1lPVwiaC01IGdyb3VwLWhvdmVyOnRleHQtWyMxZDliZjBdXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xIGdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gZ3JvdXAtaG92ZXI6YmctcGluay02MDAvMTBcIj5cbiAgICAgICAgICAgICAgPEhlYXJ0SWNvbiBjbGFzc05hbWU9XCJoLTUgZ3JvdXAtaG92ZXI6dGV4dC1waW5rLTYwMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLWhvdmVyOnRleHQtcGluay02MDAgdGV4dC1zbVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBncm91cFwiPlxuICAgICAgICAgICAgPFNoYXJlSWNvbiBjbGFzc05hbWU9XCJoLTUgZ3JvdXAtaG92ZXI6dGV4dC1bIzFkOWJmMF1cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBncm91cFwiPlxuICAgICAgICAgICAgPENoYXJ0QmFySWNvbiBjbGFzc05hbWU9XCJoLTUgZ3JvdXAtaG92ZXI6dGV4dC1bIzFkOWJmMF1cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sIm5hbWVzIjpbIkNoYXJ0QmFySWNvbiIsIkNoYXRJY29uIiwiRG90c0hvcml6b250YWxJY29uIiwiSGVhcnRJY29uIiwiU2hhcmVJY29uIiwiUmVhY3QiLCJNb21lbnQiLCJDb21tZW50IiwiaWQiLCJjb21tZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwidXNlckltZyIsImFsdCIsImg0IiwidXNlcm5hbWUiLCJzcGFuIiwidGFnIiwiZnJvbU5vdyIsInRpbWVzdGFtcCIsInRvRGF0ZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Comment.js\n");

/***/ })

});