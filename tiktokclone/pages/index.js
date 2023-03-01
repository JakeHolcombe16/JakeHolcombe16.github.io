"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/NoResults.tsx


const NoResults = ({ text  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "NoResults"
    });
};
/* harmony default export */ const components_NoResults = (NoResults);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: external "react-icons/go"
const go_namespaceObject = require("react-icons/go");
;// CONCATENATED MODULE: ./components/VideoCard.tsx







const VideoCard = ({ post  })=>{
    const { 0: isHover , 1: setisHover  } = (0,external_react_.useState)(false);
    const { 0: playing , 1: setPlaying  } = (0,external_react_.useState)(false);
    const { 0: isVideoMuted , 1: setIsVideoMuted  } = (0,external_react_.useState)(true);
    const videoRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            setIsVideoMuted(true);
        }
    }, []);
    const onVideoPress = ()=>{
        if (playing) {
            videoRef.current?.pause();
            setPlaying(false);
        } else {
            videoRef.current?.play();
            setPlaying(true);
        }
    };
    const onMutePress = ()=>{
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsVideoMuted(video.muted);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col border-b-2 border-gray-200 pb-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex gap-3 p-2 cursor-pointer font-semibold rounded",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "md:w-16 md:h-16 w-10 h-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: 62,
                                        height: 62,
                                        className: "rounded-full",
                                        src: post.postedBy.image,
                                        alt: "profile photo",
                                        layout: "responsive"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "flex gap-2 items-center md:text-md font-bold text-primary",
                                            children: [
                                                post.postedBy.userName,
                                                ` `
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(go_namespaceObject.GoVerified, {
                                            className: "text-blue-400 text-md"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "capitalize font-medium text-xs text-gray-500 hidden md:block",
                                            children: post.postedBy.userName
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "lg:ml-20 flex gap-4 relative",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onMouseEnter: ()=>setisHover(true)
                    ,
                    onMouseLeave: ()=>setisHover(false)
                    ,
                    className: "rounded-3xl",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                loop: true,
                                ref: videoRef,
                                className: "lg:w[600px] h-[300px] md:h-[400px] lg:h-[530x] w-[200px] rounded-2xl cursor-pointer bg-gray-100",
                                src: post.video.asset.url
                            })
                        }),
                        isHover && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3",
                            children: [
                                playing ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: onVideoPress,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFillPauseFill, {
                                        className: "text-white text-2xl lg:text-4xl"
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: onVideoPress,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFillPlayFill, {
                                        className: "text-white text-2xl lg:text-4xl"
                                    })
                                }),
                                isVideoMuted ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: onMutePress,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiVolumeOff, {
                                        className: "text-white text-2xl lg:text-4xl"
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: onMutePress,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiVolumeUp, {
                                        className: "text-white text-2xl lg:text-4xl"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_VideoCard = (VideoCard);

;// CONCATENATED MODULE: ./pages/index.tsx




const Home = ({ videos  })=>{
    console.log(videos);
    setTimeout(()=>{
        window.alert("Keep Overstimulation \uD83D\uDC4D\uD83D\uDC4D\uD83D\uDC4D");
    }, 120000);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col gap-10 videos h-full",
        children: videos.length ? videos.map((video)=>/*#__PURE__*/ jsx_runtime_.jsx(components_VideoCard, {
                post: video
            }, video._id)
        ) : /*#__PURE__*/ jsx_runtime_.jsx(components_NoResults, {
            text: "No Videos"
        })
    });
};
const getServerSideProps = async ()=>{
    const { data  } = await external_axios_default().get(`http://localhost:3000/api/post`);
    return {
        props: {
            videos: data
        }
    };
};
/* harmony default export */ const pages = (Home);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,61], () => (__webpack_exec__(738)));
module.exports = __webpack_exports__;

})();