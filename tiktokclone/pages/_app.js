"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./utils/tiktik-logo.png
/* harmony default export */ const tiktik_logo = ({"src":"/_next/static/media/tiktik-logo.b9d3228f.png","height":512,"width":1809,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASUlEQVR4nGNcsWLFX0ZGJqbdm3aHzFk6+6q0pLTo0+dPvzIwMDACMS/jyjlL/kowGTAdW/LSr3Kf81llYX3Vu28vPgdKsgCxOAB3dxiEZNzC7gAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/Navbar.tsx





const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[100px] md:w-[130px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    className: "cursor-pointer",
                    src: tiktik_logo,
                    alt: "TikTik",
                    layout: "responsive"
                })
            })
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/im"
const im_namespaceObject = require("react-icons/im");
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: external "react-icons/gi"
const gi_namespaceObject = require("react-icons/gi");
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./utils/constants.tsx




const topics = [
    {
        name: "comedy",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsEmojiSunglasses, {})
    },
    {
        name: "gaming",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGamepad, {})
    },
    {
        name: "food",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(gi_namespaceObject.GiCakeSlice, {})
    },
    {
        name: "dance",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(gi_namespaceObject.GiGalaxy, {})
    },
    {
        name: "sports",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaMedal, {})
    },
    {
        name: "TV",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTv, {})
    }, 
];
const footerList1 = (/* unused pure expression or super */ null && ([
    "About",
    "Newsroom",
    "Store",
    "Contact",
    "Carrers",
    "ByteDance",
    "Creator Directory"
]));
const footerList2 = [
    "Targeted Advertisements",
    "Developers",
    "Stealing Your Data  \uD83D\uDC4D",
    "Rewards For Hours Spent"
];
const footerList3 = [
    "Terms of conditions",
    "Privacy",
    "Community Guidelines"
];

;// CONCATENATED MODULE: ./components/Discover.tsx





const Discover = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { topic  } = router.query;
    const activeTopicStyle = "xl:border-2 hover:bg-primary xl:border-[#00f2ea] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#000]";
    const topicStyle = "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "xl:border-b-2 xl:border-gray-200 pb-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-gray-500 font-semibold m-3 mt-4 hidden xl:block",
                children: "Popular Topics"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex gap-3 flex-wrap",
                children: topics.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/?topic=${item.name}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: topic === item.name ? activeTopicStyle : topicStyle,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-bold text-2xl xl:text-md",
                                    children: item.icon
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-medium text-md hidden xl:block capitalize",
                                    children: item.name
                                })
                            ]
                        })
                    }, item.name)
                )
            })
        ]
    });
};
/* harmony default export */ const components_Discover = (Discover);

;// CONCATENATED MODULE: ./components/Footer.tsx



const List = ({ items , mt  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `flex flex-wrap gap-2 ${mt && "mt-5"}`,
        children: items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-gray-400 text-sm hover:underline cursor-pointer",
                children: item
            }, item)
        )
    })
;
const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-6 hidden xl:block",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(List, {
                items: footerList2,
                mt: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(List, {
                items: footerList3,
                mt: true
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Sidebar.tsx







const Sidebar = ()=>{
    const { 0: showSidebar , 1: setShowSidebar  } = (0,external_react_.useState)(true);
    const userProfile = false;
    const normalLink = "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#000] rounded";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "block xl:hidden m-2 ml-4 mt-3 text-xl",
                onClick: ()=>setShowSidebar((prev)=>!prev
                    )
                ,
                children: showSidebar ? /*#__PURE__*/ jsx_runtime_.jsx(im_namespaceObject.ImCancelCircle, {}) : /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineMenu, {})
            }),
            showSidebar && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "xl:border-b-2 border-gray-200 xl:pb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: normalLink,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-2xl",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiFillHome, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xl hidden xl:block",
                                        children: "For You"
                                    })
                                ]
                            })
                        })
                    }),
                    !userProfile && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-2 py-4 hidden xl:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-gray-400",
                                children: "Log in to like and comment on videos"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: " cursor-pointer bg-white text-lg text-[#000] border-[1px] border-[#000] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-black hover:bg-gradient-to-r from-[#00f2ea] to-[#ff0050]",
                                    children: "Log in"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Discover, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Sidebar = (Sidebar);

;// CONCATENATED MODULE: external "@react-oauth/google"
const google_namespaceObject = require("@react-oauth/google");
;// CONCATENATED MODULE: ./pages/_app.tsx






const MyApp = ({ Component , pageProps  })=>{
    const { 0: isSSR , 1: setIsSSR  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setIsSSR(false);
    }, []);
    if (isSSR) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(google_namespaceObject.GoogleOAuthProvider, {
        clientId: `${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex gap-6 md:gap20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-[92vh] overflow-hidden xl:hover:overflow-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Sidebar, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61], () => (__webpack_exec__(806)));
module.exports = __webpack_exports__;

})();