exports.id = 359;
exports.ids = [359,425];
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

/***/ 6526:
/***/ ((module) => {

// Exports
module.exports = {
	"testimonyContainer": "Testimonial_testimonyContainer__cfdqJ",
	"container": "Testimonial_container__7gtY8",
	"header": "Testimonial_header__voQw5",
	"star": "Testimonial_star__ZsQXa"
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

/***/ 2282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CARDS": () => (/* binding */ CARDS)
/* harmony export */ });
const CARDS = [
    {
        id: "1",
        name: "Shivam Jha",
        testimony: "Meals with my family are always extra special because of the beautiful plates I got from Custom & Nooke."
    },
    {
        id: "2",
        name: "Rishav Wow",
        testimony: "Meals with my family are always extra special because of the beautiful plates I got from Custom & Nooke."
    },
    {
        id: "3",
        name: "Abhigyan Bharati",
        testimony: "Meals with my family are always extra special because of the beautiful plates I got from Custom & Nooke."
    }, 
];


/***/ }),

/***/ 7359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Testimonial": () => (/* binding */ Testimonial)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./pages/components/body/components/testimonialCard/TestimonyCard.tsx
var TestimonyCard = __webpack_require__(3295);
// EXTERNAL MODULE: ./pages/components/body/components/testimonial/Testimonial.module.css
var Testimonial_module = __webpack_require__(6526);
var Testimonial_module_default = /*#__PURE__*/__webpack_require__.n(Testimonial_module);
;// CONCATENATED MODULE: ./pages/components/body/components/testimonial/assets/star.svg
/* harmony default export */ const star = ({"src":"/_next/static/media/star.61df168e.svg","height":322,"width":420});
// EXTERNAL MODULE: ./pages/components/body/components/testimonialCard/mockTestimony.ts
var mockTestimony = __webpack_require__(2282);
;// CONCATENATED MODULE: ./pages/components/body/components/testimonial/Testimonial.tsx






const Testimonial = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Testimonial_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Testimonial_module_default()).header,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Testimonial_module_default()).headerText,
                    children: "Testimonials"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Testimonial_module_default()).testimonyContainer,
                children: mockTestimony.CARDS.map(({ id , name , testimony  })=>/*#__PURE__*/ jsx_runtime_.jsx(TestimonyCard.TestimonyCard, {
                        name: name,
                        testimony: testimony
                    }, id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Testimonial_module_default()).star,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: star,
                    alt: "star image"
                })
            })
        ]
    });
};


/***/ })

};
;