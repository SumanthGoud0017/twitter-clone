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

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../atoms/modalAtom */ \"./atoms/modalAtom.js\");\n/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Comment */ \"./components/Comment.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.js\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Widgets__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Widgets */ \"./components/Widgets.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction PostPage(param) {\n    var trendingResults = param.trendingResults, followResults = param.followResults, providers = param.providers;\n    var _this = this;\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref.data;\n    var ref1 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_8__.modalState), 2), isOpen = ref1[0], setIsOpen = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var id = router.query.id;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(), post = ref2[0], setPost = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), comments = ref3[0], setComments = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_15__.db, 'posts', id), function(snapshot) {\n            setPost(snapshot.data());\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_15__.db\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_15__.db, 'posts', id, 'comments'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('timestamp', 'desc')), function(snapshot) {\n            return setComments(snapshot.docs);\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_15__.db,\n        id\n    ]);\n    if (!session) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        providers: providers\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n        lineNumber: 51,\n        columnNumber: 24\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            post === null || post === void 0 ? void 0 : post.username,\n                            \" on Twitter: \\\"\",\n                            post === null || post === void 0 ? void 0 : post.text,\n                            \"\\\"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-[#15202b] min-h-screen flex max-w-[1500px] mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return router.push('/');\n                                        },\n                                        className: \"hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ArrowLeftIcon, {\n                                            className: \"h-5 text-white\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Tweet\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                id: id,\n                                post: post,\n                                postPage: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            comments.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pb-72\",\n                                children: comments.map(function(comment) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Comment__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        id: comment.id,\n                                        comment: comment.data()\n                                    }, comment.id, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Widgets__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                        trendingResults: trendingResults,\n                        followResults: followResults\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                        lineNumber: 97,\n                        columnNumber: 20\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\twitter-clone-main (2)\\\\twitter-clone-main\\\\pages\\\\[id].js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this));\n}\n_s(PostPage, \"bfn1jkZ/fHSKyFV3QKjPT0q8LMM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = PostPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsQ0FDSDs7Z0hBRU5ELENBQUc7d0NBQ0ZTLE9BQU8sRUFBRSxRQUFROzRDQUFGakIsTUFBTSxDQUFOQSxNQUFNLENBQUNrQixJQUFJLENBQUMsQ0FBRzs7d0NBQzlCVCxTQUFTLEVBQUMsQ0FBaUU7OEhBRTFFdEMsbUVBQWE7NENBQUNzQyxTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7Ozs7O29DQUNyQyxDQUVSOzs7Ozs7O3dHQUNDckIseURBQUk7Z0NBQUNhLEVBQUUsRUFBRUEsRUFBRTtnQ0FBRUMsSUFBSSxFQUFFQSxJQUFJO2dDQUFFaUIsUUFBUTs7Ozs7OzRCQUNqQ2YsUUFBUSxDQUFDZ0IsTUFBTSxHQUFHLENBQUMsZ0ZBQ2pCWixDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBTzswQ0FDbkJMLFFBQVEsQ0FBQ2lCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU87a0RBQ3BCLE1BQU0sK0RBQUxyQywyREFBTzt3Q0FFTmdCLEVBQUUsRUFBRXFCLE9BQU8sQ0FBQ3JCLEVBQUU7d0NBQ2RxQixPQUFPLEVBQUVBLE9BQU8sQ0FBQ3pCLElBQUk7dUNBRmhCeUIsT0FBTyxDQUFDckIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBU3hCWCw0REFBTzt3QkFDTkcsZUFBZSxFQUFFQSxlQUFlO3dCQUNoQ0MsYUFBYSxFQUFFQSxhQUFhOzs7Ozs7b0JBRzdCSSxNQUFNLGdGQUFLWCwwREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekIsQ0FBQztHQTlFUUssUUFBUTs7UUFDV2YsdURBQVU7UUFDUk0sa0RBQWM7UUFDM0JKLGtEQUFTOzs7S0FIakJhLFFBQVE7O0FBZ0ZqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0uanM/YTMwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcnJvd0xlZnRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcbmltcG9ydCB7XG4gIGNvbGxlY3Rpb24sXG4gIGRvYyxcbiAgb25TbmFwc2hvdCxcbiAgb3JkZXJCeSxcbiAgcXVlcnksXG59IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBnZXRQcm92aWRlcnMsIGdldFNlc3Npb24sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgbW9kYWxTdGF0ZSB9IGZyb20gJy4uL2F0b21zL21vZGFsQXRvbSc7XG5pbXBvcnQgQ29tbWVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1lbnQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0JztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XG5pbXBvcnQgV2lkZ2V0cyBmcm9tICcuLi9jb21wb25lbnRzL1dpZGdldHMnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XG5cbmZ1bmN0aW9uIFBvc3RQYWdlKHsgdHJlbmRpbmdSZXN1bHRzLCBmb2xsb3dSZXN1bHRzLCBwcm92aWRlcnMgfSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsU3RhdGUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT5cbiAgICAgIG9uU25hcHNob3QoZG9jKGRiLCAncG9zdHMnLCBpZCksIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICBzZXRQb3N0KHNuYXBzaG90LmRhdGEoKSk7XG4gICAgICB9KSxcbiAgICBbZGJdXG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+XG4gICAgICBvblNuYXBzaG90KFxuICAgICAgICBxdWVyeShcbiAgICAgICAgICBjb2xsZWN0aW9uKGRiLCAncG9zdHMnLCBpZCwgJ2NvbW1lbnRzJyksXG4gICAgICAgICAgb3JkZXJCeSgndGltZXN0YW1wJywgJ2Rlc2MnKVxuICAgICAgICApLFxuICAgICAgICAoc25hcHNob3QpID0+IHNldENvbW1lbnRzKHNuYXBzaG90LmRvY3MpXG4gICAgICApLFxuICAgIFtkYiwgaWRdXG4gICk7XG5cbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4gPExvZ2luIHByb3ZpZGVycz17cHJvdmlkZXJzfSAvPjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIHtwb3N0Py51c2VybmFtZX0gb24gVHdpdHRlcjogJnF1b3Q7e3Bvc3Q/LnRleHR9JnF1b3Q7XG4gICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmctWyMxNTIwMmJdIG1pbi1oLXNjcmVlbiBmbGV4IG1heC13LVsxNTAwcHhdIG14LWF1dG9cIj5cbiAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgey8qIFdpZGdldHMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IGJvcmRlci1sIGJvcmRlci1yIGJvcmRlci1ncmF5LTcwMCBtYXgtdy0yeGwgc206bWwtWzczcHhdIHhsOm1sLVszNzBweF1cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0xLjUgcHktMiBib3JkZXItYiBib3JkZXItZ3JheS03MDAgdGV4dC1bI2Q5ZDlkOV0gZm9udC1zZW1pYm9sZCB0ZXh0LXhsIGdhcC14LTQgc3RpY2t5IHRvcC0wIHotNTBcbiAgICAgICAgICBiZy1ibGFja1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlckFuaW1hdGlvbiB3LTkgaC05IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHhsOnB4LTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXJyb3dMZWZ0SWNvbiBjbGFzc05hbWU9XCJoLTUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFR3ZWV0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFBvc3QgaWQ9e2lkfSBwb3N0PXtwb3N0fSBwb3N0UGFnZSAvPlxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNzJcIj5cbiAgICAgICAgICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDb21tZW50XG4gICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuaWR9XG4gICAgICAgICAgICAgICAgICBpZD17Y29tbWVudC5pZH1cbiAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnQuZGF0YSgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFdpZGdldHNcbiAgICAgICAgICB0cmVuZGluZ1Jlc3VsdHM9e3RyZW5kaW5nUmVzdWx0c31cbiAgICAgICAgICBmb2xsb3dSZXN1bHRzPXtmb2xsb3dSZXN1bHRzfVxuICAgICAgICAvPlxuICAgICAgICB7LyogTW9kYWwgKi99XG4gICAgICAgIHtpc09wZW4gJiYgPE1vZGFsIC8+fVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHRyZW5kaW5nUmVzdWx0cyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25rZWVwZXIuY29tL2IvTktFVicpLnRoZW4oXG4gICAgKHJlcykgPT4gcmVzLmpzb24oKVxuICApO1xuICBjb25zdCBmb2xsb3dSZXN1bHRzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbmtlZXBlci5jb20vYi9XV01KJykudGhlbihcbiAgICAocmVzKSA9PiByZXMuanNvbigpXG4gICk7XG5cbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRyZW5kaW5nUmVzdWx0cyxcbiAgICAgIGZvbGxvd1Jlc3VsdHMsXG4gICAgICBwcm92aWRlcnMsXG4gICAgICBzZXNzaW9uLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQXJyb3dMZWZ0SWNvbiIsImNvbGxlY3Rpb24iLCJkb2MiLCJvblNuYXBzaG90Iiwib3JkZXJCeSIsInF1ZXJ5IiwidXNlU2Vzc2lvbiIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJtb2RhbFN0YXRlIiwiQ29tbWVudCIsIkxvZ2luIiwiTW9kYWwiLCJQb3N0IiwiU2lkZWJhciIsIldpZGdldHMiLCJkYiIsIlBvc3RQYWdlIiwidHJlbmRpbmdSZXN1bHRzIiwiZm9sbG93UmVzdWx0cyIsInByb3ZpZGVycyIsInNlc3Npb24iLCJkYXRhIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwicm91dGVyIiwiaWQiLCJwb3N0Iiwic2V0UG9zdCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJzbmFwc2hvdCIsImRvY3MiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInVzZXJuYW1lIiwidGV4dCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsIm9uQ2xpY2siLCJwdXNoIiwicG9zdFBhZ2UiLCJsZW5ndGgiLCJtYXAiLCJjb21tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ })

});