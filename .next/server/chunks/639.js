exports.id = 639;
exports.ids = [639];
exports.modules = {

/***/ 6509:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Body_wrapper__Zm_AQ",
	"container": "Body_container__7Po5p",
	"brand": "Body_brand__UPzHb",
	"logo": "Body_logo__rUifN",
	"image1": "Body_image1__x57t6",
	"image2": "Body_image2__hwT_v",
	"brandName": "Body_brandName__5nIAU",
	"downloadOptions": "Body_downloadOptions__DUnAF",
	"starIcon": "Body_starIcon__h7__i",
	"brandDesc": "Body_brandDesc__dV2TH",
	"appStore": "Body_appStore__gu40U",
	"googlePlay": "Body_googlePlay__NzBCZ"
};


/***/ }),

/***/ 7639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Body": () => (/* binding */ Body),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./pages/components/body/components/feature/Feature.tsx + 1 modules
var Feature = __webpack_require__(5701);
// EXTERNAL MODULE: ./pages/components/body/components/benefits/Benefits.tsx
var Benefits = __webpack_require__(4619);
// EXTERNAL MODULE: ./pages/components/body/components/testimonial/Testimonial.tsx + 1 modules
var Testimonial = __webpack_require__(7359);
// EXTERNAL MODULE: ./pages/components/body/Body.module.css
var Body_module = __webpack_require__(6509);
var Body_module_default = /*#__PURE__*/__webpack_require__.n(Body_module);
;// CONCATENATED MODULE: ./pages/components/body/assets/phone1.svg
/* harmony default export */ const phone1 = ({"src":"/_next/static/media/phone1.4318552b.svg","height":1030,"width":1337});
;// CONCATENATED MODULE: ./pages/components/body/assets/phone2.svg
/* harmony default export */ const phone2 = ({"src":"/_next/static/media/phone2.af9c5349.svg","height":1030,"width":1337});
;// CONCATENATED MODULE: ./pages/components/body/assets/AppStore.svg
/* harmony default export */ const AppStore = ({"src":"/_next/static/media/AppStore.f8f59c7a.svg","height":156,"width":540});
;// CONCATENATED MODULE: ./pages/components/body/assets/GooglePlay.svg
/* harmony default export */ const GooglePlay = ({"src":"/_next/static/media/GooglePlay.bc8ee7a0.svg","height":156,"width":540});
// EXTERNAL MODULE: ./pages/components/body/assets/stars.svg
var stars = __webpack_require__(5084);
;// CONCATENATED MODULE: ./pages/components/body/Body.tsx
// libs


// components



// styles

// svg





const Body = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Body_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Body_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Body_module_default()).brand,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Body_module_default()).brandName,
                                children: "Offside"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Body_module_default()).brandDesc,
                                children: "Get offside & enjoy live matches with your friends like never before"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Body_module_default()).downloadOptions,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (Body_module_default()).appStore,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: AppStore,
                                            alt: "AppStore"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (Body_module_default()).googlePlay,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: GooglePlay,
                                            alt: "GooglePlay"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Body_module_default()).starIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: stars/* default */.Z,
                                    alt: "header_star"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Body_module_default()).logo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Body_module_default()).image1,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: phone2,
                                    alt: "Phone logo 1"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Body_module_default()).image2,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: phone1,
                                    alt: "Phone logo 2"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Feature.Feature, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Benefits.Benefits, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Testimonial.Testimonial, {})
        ]
    });
async function getServerSideProps({}) {
    return {
        props: {}
    };
}


/***/ })

};
;