"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ menuItem),
/* harmony export */   "L": () => (/* binding */ button)
/* harmony export */ });
var button = '_1t4ewsk1';
var menuItem = '_1t4ewsk0';

/***/ }),

/***/ 7538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$F": () => (/* binding */ linkButtonLeft),
/* harmony export */   "DK": () => (/* binding */ linkButton),
/* harmony export */   "Ok": () => (/* binding */ links),
/* harmony export */   "XO": () => (/* binding */ linkAnchor),
/* harmony export */   "Zo": () => (/* binding */ surfaceSecondary),
/* harmony export */   "i8": () => (/* binding */ version),
/* harmony export */   "nO": () => (/* binding */ socialLink),
/* harmony export */   "p4": () => (/* binding */ link),
/* harmony export */   "sg": () => (/* binding */ linkButtonRight),
/* harmony export */   "xX": () => (/* binding */ surfacePrimary),
/* harmony export */   "xs": () => (/* binding */ social)
/* harmony export */ });
var link = 'czken61';
var linkAnchor = 'czken62';
var linkButton = 'czken63';
var linkButtonLeft = 'czken64';
var linkButtonRight = 'czken65';
var links = 'czken60';
var social = 'czken66';
var socialLink = 'czken67';
var surfacePrimary = 'czken69';
var surfaceSecondary = 'czken6a';
var version = 'czken68';

/***/ }),

/***/ 9522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$6": () => (/* binding */ hiddenLGDown),
/* harmony export */   "bV": () => (/* binding */ hiddenSMDown),
/* harmony export */   "fJ": () => (/* binding */ hiddenXLDown),
/* harmony export */   "th": () => (/* binding */ hiddenLG)
/* harmony export */ });
/* unused harmony exports hiddenMD, hiddenMDDown, hiddenSM, hiddenXL, hiddenXS, hiddenXSDown */
var hiddenLG = '_1216la93';
var hiddenLGDown = '_1216la98';
var hiddenMD = '_1216la92';
var hiddenMDDown = '_1216la97';
var hiddenSM = '_1216la91';
var hiddenSMDown = '_1216la96';
var hiddenXL = '_1216la94';
var hiddenXLDown = '_1216la99';
var hiddenXS = '_1216la90';
var hiddenXSDown = '_1216la95';

/***/ }),

/***/ 4225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var iconoir_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9436);
/* harmony import */ var _arwes_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(183);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4073);
/* harmony import */ var _app_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9522);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5134);
/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1054);
/* harmony import */ var _ModalNavigate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4221);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_4__, iconoir_react__WEBPACK_IMPORTED_MODULE_5__, _app_utils__WEBPACK_IMPORTED_MODULE_7__, _app_ui__WEBPACK_IMPORTED_MODULE_8__, _ModalNavigate__WEBPACK_IMPORTED_MODULE_10__]);
([jotai__WEBPACK_IMPORTED_MODULE_4__, iconoir_react__WEBPACK_IMPORTED_MODULE_5__, _app_utils__WEBPACK_IMPORTED_MODULE_7__, _app_ui__WEBPACK_IMPORTED_MODULE_8__, _ModalNavigate__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Header = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [motion, setMotion] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_app_utils__WEBPACK_IMPORTED_MODULE_7__/* .atomMotion */ .RD);
    const [audio, setAudio] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_app_utils__WEBPACK_IMPORTED_MODULE_7__/* .atomAudio */ .f2);
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // The pages where the page content elements are floating instead
    // of being container by containers.
    const isFloatingRoutePath = router.asPath === "/";
    const leftItemAnimation = isFloatingRoutePath ? (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .aaOpacity */ .rn)() : [
        (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .aaVisibility */ .Wx)(),
        (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__.aa)("x", -4, 0, 0)
    ];
    const rightItemAnimation = isFloatingRoutePath ? (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .aaOpacity */ .rn)() : [
        (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .aaVisibility */ .Wx)(),
        (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__.aa)("x", 4, 0, 0)
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .HeaderLayout */ .T$, {
                ...props,
                hasFrame: !isFloatingRoutePath,
                left: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                    combine: true,
                    manager: "stagger",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .Logo */ .TR, {
                                animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .aaVisibility */ .Wx)(),
                                children: !isFloatingRoutePath && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                    merge: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .LogoType */ .nJ, {
                                        className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenSMDown */ .bV,
                                        animated: leftItemAnimation
                                    })
                                })
                            })
                        }),
                        !isFloatingRoutePath && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                            combine: true,
                            manager: "stagger",
                            duration: {
                                stagger: 0.03
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .Menu */ .v2, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                            className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__.cx)(_Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D, _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenSMDown */ .bV),
                                            active: router.asPath.startsWith("/docs"),
                                            animated: leftItemAnimation,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/docs",
                                                title: "Go to Documentation",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.Page, {}),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenXLDown */ .fJ,
                                                        children: "Docs"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                            className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__.cx)(_Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D, _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenSMDown */ .bV),
                                            active: router.asPath.startsWith("/samples"),
                                            animated: leftItemAnimation,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/samples",
                                                title: "Go to Samples",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.CollageFrame, {}),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenXLDown */ .fJ,
                                                        children: "Samples"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                            className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__.cx)(_Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D, _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenSMDown */ .bV),
                                            animated: leftItemAnimation,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "/play",
                                                title: "Go to Playground",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.Codepen, {}),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenXLDown */ .fJ,
                                                        children: "Play"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                            className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__.cx)(_Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D, _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenSMDown */ .bV),
                                            animated: leftItemAnimation,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "/perf",
                                                title: "Go to Performance",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.DashboardSpeed, {}),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenXLDown */ .fJ,
                                                        children: "Perf"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                center: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: router.asPath.startsWith("/docs") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .Menu */ .v2, {
                            className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenLGDown */ .$6,
                            animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .aaVisibility */ .Wx)(),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                    className: _Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D,
                                    active: router.asPath.includes("/docs/develop"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/docs/develop",
                                        children: "Develop"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                    className: _Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D,
                                    active: router.asPath.includes("/docs/design"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/docs/design",
                                        children: "Design"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                    className: _Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D,
                                    active: router.asPath.includes("/docs/community"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/docs/community",
                                        children: "Community"
                                    })
                                })
                            ]
                        })
                    })
                }),
                right: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                    combine: true,
                    manager: isFloatingRoutePath ? "parallel" : "staggerReverse",
                    duration: {
                        stagger: 0.03
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Version__WEBPACK_IMPORTED_MODULE_9__/* .Version */ .G, {
                                className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenLGDown */ .$6,
                                animated: rightItemAnimation
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .Menu */ .v2, {
                            className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenLGDown */ .$6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                        className: _Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D,
                                        animated: rightItemAnimation,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://github.com/sponsors/romelperez",
                                            target: "sponsor",
                                            title: "Sponsor",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.Heart, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                        className: _Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D,
                                        animated: rightItemAnimation,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://github.com/arwes/arwes",
                                            target: "github",
                                            title: "Go to GitHub",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.GitHub, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                        className: _Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D,
                                        animated: rightItemAnimation,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://discord.gg/s5sbTkw",
                                            target: "discord",
                                            title: "Go to Discord",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.Discord, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                        className: _Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D,
                                        animated: rightItemAnimation,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://twitter.com/arwesjs",
                                            target: "twitter",
                                            title: "Go to Twitter",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.Twitter, {})
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .Menu */ .v2, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                        className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__.cx)(_Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D, _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenLGDown */ .$6),
                                        animated: rightItemAnimation,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: _Header_css__WEBPACK_IMPORTED_MODULE_12__/* .button */ .L,
                                            title: motion ? "Disable motion" : "Enable motion",
                                            onClick: ()=>setMotion(!motion),
                                            children: motion ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.Keyframes, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.RemoveKeyframes, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                        className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__.cx)(_Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D, _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenLGDown */ .$6),
                                        animated: rightItemAnimation,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: _Header_css__WEBPACK_IMPORTED_MODULE_12__/* .button */ .L,
                                            title: audio ? "Disable audio" : "Enable audio",
                                            onClick: ()=>setAudio(!audio),
                                            children: audio ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.SoundHigh, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.SoundOff, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_8__/* .MenuItem */ .sN, {
                                        className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_6__.cx)(_Header_css__WEBPACK_IMPORTED_MODULE_12__/* .menuItem */ .D, _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenLG */ .th),
                                        animated: rightItemAnimation,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: _Header_css__WEBPACK_IMPORTED_MODULE_12__/* .button */ .L,
                                            title: "Navigate",
                                            onClick: ()=>setShowModal((v)=>!v),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {})
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .AnimatorGeneralProvider */ .QS, {
                duration: {
                    enter: 0.1,
                    exit: 0.1,
                    stagger: 0.05
                },
                // TODO: How to handle the rendering on Animations disabled?
                // The root parent <AnimatorGeneralProvider> disables all <Animator>
                // children components, but the modal components depend on the
                // animations enabled.
                disabled: false,
                dismissed: false,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_6__/* .Animator */ .LH, {
                    root: true,
                    active: showModal,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalNavigate__WEBPACK_IMPORTED_MODULE_10__/* .ModalNavigate */ .l, {
                        onClose: ()=>setShowModal(false)
                    })
                })
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__]);
_Header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ModalNavigate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var iconoir_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9436);
/* harmony import */ var _arwes_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(183);
/* harmony import */ var _app_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(556);
/* harmony import */ var _app_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9522);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5134);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6017);
/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1054);
/* harmony import */ var _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7538);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iconoir_react__WEBPACK_IMPORTED_MODULE_3__, _app_ui__WEBPACK_IMPORTED_MODULE_5__, _NavLink__WEBPACK_IMPORTED_MODULE_8__]);
([iconoir_react__WEBPACK_IMPORTED_MODULE_3__, _app_ui__WEBPACK_IMPORTED_MODULE_5__, _NavLink__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ModalContent = (props)=>{
    const { onClose  } = props;
    const { asPath: url  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const bleeps = (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .useBleeps */ .s0)();
    // TODO: Create configurable navigation items builder.
    // Currently, it only works with a defined set of items.
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(url.startsWith("/docs") ? "/docs" : "/");
    const close = ()=>{
        onClose();
        bleeps.click?.play();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_ui__WEBPACK_IMPORTED_MODULE_5__/* .ModalLayout */ .PW, {
        title: "Navigate",
        footer: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animator */ .LH, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .social */ .xs,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animated */ .fS, {
                                as: "a",
                                href: "https://github.com/sponsors/romelperez",
                                target: "donate",
                                className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.cx)(_app_styles__WEBPACK_IMPORTED_MODULE_10__/* .linkPrimary */ .p, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .surfacePrimary */ .xX, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .socialLink */ .nO),
                                animated: [
                                    (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("y", "1rem", 0, 0)
                                ],
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_3__.Heart, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenSMDown */ .bV,
                                        children: "Donate"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animated */ .fS, {
                                as: "a",
                                href: "https://github.com/arwes/arwes",
                                target: "github",
                                className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.cx)(_app_styles__WEBPACK_IMPORTED_MODULE_10__/* .linkPrimary */ .p, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .surfacePrimary */ .xX, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .socialLink */ .nO),
                                animated: [
                                    (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("y", "1rem", 0, 0)
                                ],
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_3__.GitHub, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenSMDown */ .bV,
                                        children: "GitHub"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animated */ .fS, {
                                as: "a",
                                href: "https://discord.gg/s5sbTkw",
                                target: "discord",
                                className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.cx)(_app_styles__WEBPACK_IMPORTED_MODULE_10__/* .linkPrimary */ .p, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .surfacePrimary */ .xX, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .socialLink */ .nO),
                                animated: [
                                    (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("y", "1rem", 0, 0)
                                ],
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_3__.Discord, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenSMDown */ .bV,
                                        children: "Discord"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animated */ .fS, {
                                as: "a",
                                href: "https://twitter.com/arwesjs",
                                target: "twitter",
                                className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.cx)(_app_styles__WEBPACK_IMPORTED_MODULE_10__/* .linkPrimary */ .p, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .surfacePrimary */ .xX, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .socialLink */ .nO),
                                animated: [
                                    (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("y", "1rem", 0, 0)
                                ],
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_3__.Twitter, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: _app_styles__WEBPACK_IMPORTED_MODULE_11__/* .hiddenSMDown */ .bV,
                                        children: "Twitter"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animator */ .LH, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Version__WEBPACK_IMPORTED_MODULE_7__/* .Version */ .G, {
                        className: _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .version */ .i8,
                        prefix: "Arwes ",
                        animated: [
                            (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .aaVisibility */ .Wx)(),
                            (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("y", "1rem", 0)
                        ]
                    })
                })
            ]
        }),
        onClose: close,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animator */ .LH, {
            manager: "switch",
            checkToSend: [
                nav
            ],
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_9__/* .links */ .Ok,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animator */ .LH, {
                        condition: ()=>nav === "/docs",
                        manager: "stagger",
                        unmountOnExited: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .O, {
                                href: "/docs",
                                active: url === "/docs",
                                animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("x", "1rem", 0),
                                onClose: close,
                                onLeft: ()=>setNav("/"),
                                children: "Docs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .O, {
                                href: "/docs/develop",
                                active: url.startsWith("/docs/develop"),
                                animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("x", "1rem", 0),
                                onClose: close,
                                children: "Develop"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .O, {
                                href: "/docs/design",
                                active: url.startsWith("/docs/design"),
                                animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("x", "1rem", 0),
                                onClose: close,
                                children: "Design"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .O, {
                                href: "/docs/community",
                                active: url.startsWith("/docs/community"),
                                animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("x", "1rem", 0),
                                onClose: close,
                                children: "Community"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animator */ .LH, {
                        condition: ()=>nav !== "/docs",
                        manager: "stagger",
                        unmountOnExited: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .O, {
                                href: "/docs",
                                active: url.startsWith("/docs"),
                                animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("x", "-1rem", 0),
                                onClose: close,
                                onRight: ()=>setNav("/docs"),
                                children: "Docs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .O, {
                                href: "/samples",
                                active: url.startsWith("/samples"),
                                animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("x", "-1rem", 0),
                                onClose: close,
                                children: "Samples"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .O, {
                                href: "/play",
                                active: url.startsWith("/play"),
                                animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("x", "-1rem", 0),
                                onClose: close,
                                children: "Play"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .O, {
                                href: "/perf",
                                active: url.startsWith("/perf"),
                                animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_4__.aa)("x", "-1rem", 0),
                                onClose: close,
                                children: "Perf"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const ModalNavigate = (props)=>{
    const { onClose  } = props;
    // TODO: Fix Animator timing calculation.
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_6__/* .Modal */ .u, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animator */ .LH, {
            merge: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .BleepsOnAnimator */ .tu, {
                    transitions: {
                        entering: "open"
                    },
                    continuous: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animator */ .LH, {
                    merge: true,
                    unmountOnExited: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContent, {
                        onClose: onClose
                    })
                })
            ]
        })
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ NavLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var iconoir_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9436);
/* harmony import */ var _arwes_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(183);
/* harmony import */ var _app_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(556);
/* harmony import */ var _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iconoir_react__WEBPACK_IMPORTED_MODULE_2__]);
iconoir_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const NavLink = (props)=>{
    const { href , active , children , animated , onClose , onLeft , onRight  } = props;
    const bleeps = (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .useBleeps */ .s0)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animator */ .LH, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animated */ .fS, {
            className: _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__/* .link */ .p4,
            animated: [
                (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .aaOpacity */ .rn)(),
                animated
            ],
            children: [
                !!onLeft && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__.cx)(_app_styles__WEBPACK_IMPORTED_MODULE_5__/* .linkPrimary */ .p, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__/* .linkButton */ .DK, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__/* .linkButtonLeft */ .$F, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__/* .surfacePrimary */ .xX),
                    onClick: ()=>{
                        onLeft();
                        bleeps.click?.play();
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_2__.NavArrowLeft, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: href,
                    className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__.cx)(active ? (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__.cx)(_app_styles__WEBPACK_IMPORTED_MODULE_5__/* .linkSecondary */ .E, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__/* .surfaceSecondary */ .Zo) : (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__.cx)(_app_styles__WEBPACK_IMPORTED_MODULE_5__/* .linkPrimary */ .p, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__/* .surfacePrimary */ .xX), _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__/* .linkAnchor */ .XO),
                    onClick: onClose,
                    children: children
                }),
                !!onRight && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__.cx)(_app_styles__WEBPACK_IMPORTED_MODULE_5__/* .linkPrimary */ .p, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__/* .linkButton */ .DK, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__/* .linkButtonRight */ .sg, _ModalNavigate_css__WEBPACK_IMPORTED_MODULE_4__/* .surfacePrimary */ .xX),
                    onClick: ()=>{
                        onRight();
                        bleeps.click?.play();
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_2__.NavArrowRight, {})
                })
            ]
        })
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4221:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* reexport safe */ _ModalNavigate__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _ModalNavigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModalNavigate__WEBPACK_IMPORTED_MODULE_0__]);
_ModalNavigate__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* reexport */ Modal)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: ./src/containers/Modal/Modal.tsx



const Modal = (props)=>{
    const { children  } = props;
    const [enabled, setEnabled] = (0,external_react_.useState)(false);
    const id = (0,external_react_.useId)();
    const isBrowser =  false && 0;
    const element = isBrowser && window.document.querySelector("#app-modal-container");
    (0,external_react_.useEffect)(()=>{
        setEnabled(true);
    }, []);
    if (!enabled || !element) {
        return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {});
    }
    return /*#__PURE__*/ (0,external_react_dom_namespaceObject.createPortal)(children, element, id);
};


;// CONCATENATED MODULE: ./src/containers/Modal/index.ts



/***/ }),

/***/ 1054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* reexport */ Version)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
;// CONCATENATED MODULE: ../../lerna.json
const lerna_namespaceObject = JSON.parse('{"i8":"1.0.0-alpha.20"}');
;// CONCATENATED MODULE: ./src/dynamics.ts
const DEPLOY_TIME = "2025-12-31T03:11:02-05:00";

// EXTERNAL MODULE: ./src/styles/motion.css.ts
var motion_css = __webpack_require__(1316);
// EXTERNAL MODULE: ./src/styles/links.css.ts
var links_css = __webpack_require__(556);
;// CONCATENATED MODULE: ./src/containers/Version/Version.css.ts
var root = 'twmqfx0';
;// CONCATENATED MODULE: ./src/containers/Version/Version.tsx







const Version = (props)=>{
    const { className , animated , prefix , sufix  } = props;
    const bleeps = (0,esm/* useBleeps */.s0)();
    const [isNext, setIsNext] = (0,external_react_.useState)(false);
    const date = new Date(DEPLOY_TIME);
    (0,external_react_.useEffect)(()=>{
        setIsNext(window.location.host !== "arwes.dev");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm/* Animated */.fS, {
        as: "a",
        className: (0,esm.cx)(root, motion_css/* transition */.e, links_css/* linkPrimary */.p, className),
        animated: animated,
        href: isNext ? "https://github.com/arwes/arwes/tree/next" : `https://github.com/arwes/arwes/releases/tag/v${lerna_namespaceObject.i8}`,
        target: "github",
        title: `Version ${isNext ? "@next" : lerna_namespaceObject.i8} deployed at ${date.toUTCString()}`,
        onClick: ()=>bleeps.click?.play(),
        children: [
            prefix,
            isNext ? "v@next" : `v${lerna_namespaceObject.i8}`,
            sufix
        ]
    });
};


;// CONCATENATED MODULE: ./src/containers/Version/index.ts



/***/ }),

/***/ 8396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_1__.h)
/* harmony export */ });
/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1054);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9155);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6017);
/* harmony import */ var _ModalNavigate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4221);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_1__, _ModalNavigate__WEBPACK_IMPORTED_MODULE_3__]);
([_Header__WEBPACK_IMPORTED_MODULE_1__, _ModalNavigate__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var _arwes_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(183);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5134);
/* harmony import */ var _app_containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8396);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4073);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_3__, _app_ui__WEBPACK_IMPORTED_MODULE_5__, _app_containers__WEBPACK_IMPORTED_MODULE_6__, _app_utils__WEBPACK_IMPORTED_MODULE_7__]);
([jotai__WEBPACK_IMPORTED_MODULE_3__, _app_ui__WEBPACK_IMPORTED_MODULE_5__, _app_containers__WEBPACK_IMPORTED_MODULE_6__, _app_utils__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const animatorsSettings = {
    duration: {
        enter: 0.15,
        exit: 0.15,
        stagger: 0.05
    }
};
const bleepsSettings = {
    master: {
        volume: 0.8
    },
    categories: {
        background: {
            volume: 0.3
        },
        transition: {
            volume: 0.5
        },
        interaction: {
            volume: 0.7
        },
        notification: {
            volume: 1
        }
    },
    bleeps: {
        click: {
            category: "interaction",
            sources: [
                {
                    src: "/assets/sounds/click.webm",
                    type: "audio/webm"
                },
                {
                    src: "/assets/sounds/click.mp3",
                    type: "audio/mpeg"
                }
            ]
        },
        open: {
            category: "interaction",
            sources: [
                {
                    src: "/assets/sounds/open.webm",
                    type: "audio/webm"
                },
                {
                    src: "/assets/sounds/open.mp3",
                    type: "audio/mpeg"
                }
            ]
        },
        close: {
            category: "interaction",
            sources: [
                {
                    src: "/assets/sounds/close.webm",
                    type: "audio/webm"
                },
                {
                    src: "/assets/sounds/close.mp3",
                    type: "audio/mpeg"
                }
            ]
        },
        info: {
            category: "notification",
            sources: [
                {
                    src: "/assets/sounds/info.webm",
                    type: "audio/webm"
                },
                {
                    src: "/assets/sounds/info.mp3",
                    type: "audio/mpeg"
                }
            ]
        },
        error: {
            category: "notification",
            sources: [
                {
                    src: "/assets/sounds/error.webm",
                    type: "audio/webm"
                },
                {
                    src: "/assets/sounds/error.mp3",
                    type: "audio/mpeg"
                }
            ]
        },
        intro: {
            category: "transition",
            sources: [
                {
                    src: "/assets/sounds/intro.webm",
                    type: "audio/webm"
                },
                {
                    src: "/assets/sounds/intro.mp3",
                    type: "audio/mpeg"
                }
            ]
        },
        content: {
            category: "transition",
            sources: [
                {
                    src: "/assets/sounds/content.webm",
                    type: "audio/webm"
                },
                {
                    src: "/assets/sounds/content.mp3",
                    type: "audio/mpeg"
                }
            ]
        },
        type: {
            category: "transition",
            sources: [
                {
                    src: "/assets/sounds/type.webm",
                    type: "audio/webm"
                },
                {
                    src: "/assets/sounds/type.mp3",
                    type: "audio/mpeg"
                }
            ],
            loop: true
        },
        assemble: {
            category: "transition",
            sources: [
                {
                    src: "/assets/sounds/assemble.webm",
                    type: "audio/webm"
                },
                {
                    src: "/assets/sounds/assemble.mp3",
                    type: "audio/mpeg"
                }
            ],
            loop: true
        }
    }
};
const ClientApp = (props)=>{
    const { Component , pageProps  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_app_utils__WEBPACK_IMPORTED_MODULE_7__/* .setupGoogleFonts */ .NP)();
        (0,_app_utils__WEBPACK_IMPORTED_MODULE_7__/* .setupGoogleAnalytics */ .v_)();
    }, []);
    const motion = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtomValue)(_app_utils__WEBPACK_IMPORTED_MODULE_7__/* .atomMotion */ .RD);
    const audio = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtomValue)(_app_utils__WEBPACK_IMPORTED_MODULE_7__/* .atomAudio */ .f2);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .AnimatorGeneralProvider */ .QS, {
        ...animatorsSettings,
        disabled: !motion,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .BleepsProvider */ .ix, {
            ...bleepsSettings,
            common: {
                disabled: !audio
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: "Arwes"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: "Futuristic Sci-Fi UI Web Framework."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:title",
                            content: "Arwes"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:site_name",
                            content: "Arwes"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:description",
                            content: "Futuristic Sci-Fi UI Web Framework."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:image",
                            content: "https://next.arwes.dev/arwes.jpg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:url",
                            content: "https://next.arwes.dev"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:type",
                            content: "website"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:image:alt",
                            content: "Arwes"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:site",
                            content: "@arwesjs"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_4__/* .Animator */ .LH, {
                    combine: true,
                    manager: "stagger",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_ui__WEBPACK_IMPORTED_MODULE_5__/* .MainLayout */ .Zn, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_containers__WEBPACK_IMPORTED_MODULE_6__/* .Header */ .h4, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "app-modal-container"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NP": () => (/* reexport safe */ _setupGoogleFonts__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   "RD": () => (/* reexport safe */ _useSettings__WEBPACK_IMPORTED_MODULE_2__.R),
/* harmony export */   "f2": () => (/* reexport safe */ _useSettings__WEBPACK_IMPORTED_MODULE_2__.f),
/* harmony export */   "v_": () => (/* reexport safe */ _setupGoogleAnalytics__WEBPACK_IMPORTED_MODULE_1__.v)
/* harmony export */ });
/* harmony import */ var _setupGoogleFonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1040);
/* harmony import */ var _setupGoogleAnalytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5214);
/* harmony import */ var _useSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useSettings__WEBPACK_IMPORTED_MODULE_2__]);
_useSettings__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ setupGoogleAnalytics)
});

;// CONCATENATED MODULE: ./src/settings.ts
const GA_TRACKING_ID = "UA-50433259-2";

;// CONCATENATED MODULE: ./src/utils/setupGoogleAnalytics.ts

const setupGoogleAnalytics = ()=>{
    if ( true && window.location.host.includes("arwes.dev")) {
        const gtagScript = document.createElement("script");
        gtagScript.async = true;
        gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_TRACKING_ID;
        document.head.appendChild(gtagScript);
        /* eslint-disable */ const win = window;
        win.dataLayer = win.dataLayer || [];
        function gtag() {
            win.dataLayer.push(arguments);
        }
        win.gtag = gtag;
        // @ts-expect-error
        gtag("js", new Date());
        // @ts-expect-error
        gtag("config", GA_TRACKING_ID);
    /* eslint-enable */ }
};



/***/ }),

/***/ 1040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ setupGoogleFonts)
/* harmony export */ });
const setupGoogleFonts = ()=>{
    const gFontsElement = document.createElement("link");
    gFontsElement.rel = "stylesheet";
    gFontsElement.href = "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap";
    document.body.appendChild(gFontsElement);
};



/***/ }),

/***/ 3363:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ atomMotion),
/* harmony export */   "f": () => (/* binding */ atomAudio)
/* harmony export */ });
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai_utils__WEBPACK_IMPORTED_MODULE_0__]);
jotai_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const atomMotion = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_0__.atomWithStorage)("motion", true);
const atomAudio = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_0__.atomWithStorage)("audio", true);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 3086:
/***/ ((module) => {

module.exports = require("motion");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9436:
/***/ ((module) => {

module.exports = import("iconoir-react");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [322,97,183,134], () => (__webpack_exec__(2197)));
module.exports = __webpack_exports__;

})();