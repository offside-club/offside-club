exports.id = 701;
exports.ids = [701,151];
exports.modules = {

/***/ 6013:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Card_container__BK7uN",
	"imageContainer": "Card_imageContainer__QVBoW",
	"header": "Card_header___iKsP",
	"subHeader": "Card_subHeader__3IX_c"
};


/***/ }),

/***/ 2903:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Feature_container__BEsrz",
	"star": "Feature_star__w1mTV",
	"title": "Feature_title__KHBY8",
	"featureCardsContainer": "Feature_featureCardsContainer__WpE0p"
};


/***/ }),

/***/ 6460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6013);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Card = ({ header , subHeader  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().imageContainer)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().header),
                children: header
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().subHeader),
                children: subHeader
            })
        ]
    });
};


/***/ }),

/***/ 2123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CARDS": () => (/* binding */ CARDS)
/* harmony export */ });
const CARDS = [
    {
        id: "1",
        header: "Match details",
        subHeader: "Get detailed match statistics along with chat"
    },
    {
        id: "2",
        header: "Non-money predictions",
        subHeader: "Engage with your friends and match through live predictions"
    },
    {
        id: "3",
        header: "Guided chat",
        subHeader: "Tasteful elements to mix and match for an elevated look"
    }, 
];


/***/ }),

/***/ 5701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Feature": () => (/* binding */ Feature)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./pages/components/body/components/card/Card.tsx
var Card = __webpack_require__(6460);
// EXTERNAL MODULE: ./pages/components/body/components/feature/Feature.module.css
var Feature_module = __webpack_require__(2903);
var Feature_module_default = /*#__PURE__*/__webpack_require__.n(Feature_module);
;// CONCATENATED MODULE: ./pages/components/body/components/feature/assets/stars.svg
/* harmony default export */ const stars = ({"src":"/_next/static/media/stars.fe011d0d.svg","height":420,"width":420});
// EXTERNAL MODULE: ./pages/components/body/components/card/mockFeatureCards.ts
var mockFeatureCards = __webpack_require__(2123);
;// CONCATENATED MODULE: ./pages/components/body/components/feature/Feature.tsx






const Feature = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Feature_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Feature_module_default()).title,
                children: "For sports fans, created by sports fans"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Feature_module_default()).featureCardsContainer,
                children: mockFeatureCards.CARDS.map((card)=>/*#__PURE__*/ jsx_runtime_.jsx(Card.Card, {
                        header: card.header,
                        subHeader: card.subHeader
                    }, card.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Feature_module_default()).star,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: stars,
                    alt: "feature sparkle icon"
                })
            })
        ]
    });
};


/***/ })

};
;