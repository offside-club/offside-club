(() => {
var exports = {};
exports.id = 913;
exports.ids = [913,250];
exports.modules = {

/***/ 763:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "TestimonyCard_container__54HF4",
	"testimonyImage": "TestimonyCard_testimonyImage__UELG2",
	"testimonyName": "TestimonyCard_testimonyName__cBILD",
	"testimony": "TestimonyCard_testimony___TEpO"
};


/***/ }),

/***/ 3295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonyCard": () => (/* binding */ TestimonyCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TestimonyCard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _TestimonyCard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TestimonyCard_module_css__WEBPACK_IMPORTED_MODULE_1__);


const TestimonyCard = ({ name , testimony  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_TestimonyCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_TestimonyCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().testimonyImage)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_TestimonyCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().testimonyName),
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_TestimonyCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().testimony),
                children: testimony
            })
        ]
    });
};


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3295));
module.exports = __webpack_exports__;

})();