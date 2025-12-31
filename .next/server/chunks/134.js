"use strict";
exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ linkSecondary),
/* harmony export */   "p": () => (/* binding */ linkPrimary)
/* harmony export */ });
var linkPrimary = '_18fbd9g0';
var linkSecondary = '_18fbd9g1';

/***/ }),

/***/ 1316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ transition)
/* harmony export */ });
var transition = '_1pq7tdv0';

/***/ }),

/***/ 3495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fs": () => (/* binding */ header),
/* harmony export */   "Hy": () => (/* binding */ frame1),
/* harmony export */   "Jz": () => (/* binding */ root),
/* harmony export */   "Mv": () => (/* binding */ footer),
/* harmony export */   "TN": () => (/* binding */ title),
/* harmony export */   "_E": () => (/* binding */ frame2),
/* harmony export */   "d1": () => (/* binding */ body),
/* harmony export */   "iY": () => (/* binding */ frames),
/* harmony export */   "kQ": () => (/* binding */ content),
/* harmony export */   "nC": () => (/* binding */ container),
/* harmony export */   "xv": () => (/* binding */ close)
/* harmony export */ });
var body = 'jjk77a9';
var close = 'jjk77a8';
var container = 'jjk77a1';
var content = 'jjk77a5';
var footer = 'jjk77aa';
var frame1 = 'jjk77a3';
var frame2 = 'jjk77a4';
var frames = 'jjk77a2';
var header = 'jjk77a6';
var root = 'jjk77a0';
var title = 'jjk77a7';

/***/ }),

/***/ 9124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ Background)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
;// CONCATENATED MODULE: ./src/ui/Background/Background.css.ts
var layer1 = '_1hhzp0i1';
var layer1Image = '_1hhzp0i2';
var layer2 = '_1hhzp0i3';
var layer3 = '_1hhzp0i4';
var root = '_1hhzp0i0';
;// CONCATENATED MODULE: ./src/ui/Background/Background.tsx




const Background = (props)=>{
    const { className , animated  } = props;
    const router = (0,router_.useRouter)();
    const isIndex = router.asPath === "/";
    return /*#__PURE__*/ jsx_runtime.jsx(esm/* Animator */.LH, {
        merge: true,
        combine: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm/* Animated */.fS, {
            role: "presentation",
            className: (0,esm.cx)(root, className),
            animated: animated,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(esm/* Animator */.LH, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm/* Animated */.fS, {
                        as: "picture",
                        role: "presentation",
                        className: layer1,
                        style: {
                            filter: `brightness(${isIndex ? 0.4 : 0.3}) blur(${isIndex ? 0 : 10}px)`
                        },
                        animated: [
                            (0,esm.aa)("opacity", 0.8, 1),
                            (0,esm.aa)("scale", 1.05, 1)
                        ],
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                media: "(min-width:1280px)",
                                srcSet: "/assets/images/background-large.webp",
                                type: "image/webp"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                media: "(min-width:1280px)",
                                srcSet: "/assets/images/background-large.jpg",
                                type: "image/jpeg"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                media: "(min-width:768px)",
                                srcSet: "/assets/images/background-medium.webp",
                                type: "image/webp"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                media: "(min-width:768px)",
                                srcSet: "/assets/images/background-medium.jpg",
                                type: "image/jpeg"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                media: "(max-width:767px)",
                                srcSet: "/assets/images/background-small.webp",
                                type: "image/webp"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                className: layer1Image,
                                src: "/assets/images/background-small.jpg",
                                alt: "Background"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(esm/* Animator */.LH, {
                    duration: {
                        enter: 2
                    },
                    unmountOnDisabled: true,
                    children: /*#__PURE__*/ jsx_runtime.jsx(esm/* Dots */.bb, {
                        className: layer2,
                        color: "hsla(180, 29%, 72%, 0.15)",
                        size: 2,
                        distance: 40,
                        originInverted: true
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(esm/* Animator */.LH, {
                    duration: {
                        enter: 2,
                        interval: 4
                    },
                    unmountOnDisabled: true,
                    children: /*#__PURE__*/ jsx_runtime.jsx(esm/* Puffs */.Oh, {
                        className: layer3,
                        color: "hsla(180, 29%, 72%, 0.25)",
                        quantity: 20
                    })
                })
            ]
        })
    });
};


;// CONCATENATED MODULE: ./src/ui/Background/index.ts



/***/ }),

/***/ 2077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ Button)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
;// CONCATENATED MODULE: ./src/ui/Button/Button.css.ts
var content = 'th8yui2';
var frameElement = 'th8yui3';
var frameHexagon = 'th8yui6';
var frameHexagonClip = 'th8yui7';
var frameHexagonIlluminator = 'th8yui8';
var frameSimple = 'th8yui4';
var frameSimpleDeco = 'th8yui5';
var medium = 'th8yui1';
var Button_css_onHoverAnimateIcons = 'th8yui9';
var root = 'th8yui0';
;// CONCATENATED MODULE: ./src/ui/Button/Button.tsx



const Button = (props)=>{
    const { animated , className , tabIndex , title , size ="medium" , frame ="simple" , onHoverAnimateIcons , onClick , children , ...otherProps } = props;
    const bleeps = (0,esm/* useBleeps */.s0)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm/* Animated */.fS, {
        ...otherProps,
        as: "button",
        className: (0,esm.cx)(root, size === "medium" && medium, frame === "simple" && frameSimple, frame === "hexagon" && frameHexagon, onHoverAnimateIcons && Button_css_onHoverAnimateIcons, className),
        animated: animated,
        tabIndex: tabIndex,
        title: title,
        onClick: ()=>{
            onClick?.();
            bleeps.click?.play();
        },
        children: [
            frame === "simple" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (0,esm.cx)(frameElement, frameSimpleDeco)
            }),
            frame === "hexagon" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,esm.cx)(frameElement, frameHexagonClip),
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(esm/* Illuminator */.rT, {
                        className: frameHexagonIlluminator,
                        color: "hsl(60 50% 90% / 8%)",
                        size: 200
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(esm/* FrameSVGOctagon */.oG, {
                        squareSize: 12,
                        leftBottom: false,
                        rightTop: false
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: content,
                children: children
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/ui/Button/index.ts



/***/ }),

/***/ 425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Card)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
;// CONCATENATED MODULE: ./src/ui/Card/Card.css.ts
var asset = '_2uva912';
var Card_css_children = '_2uva916';
var container = '_2uva911';
var content = '_2uva914';
var Card_css_image = '_2uva913';
var root = '_2uva910';
var Card_css_title = '_2uva915';
;// CONCATENATED MODULE: ./src/ui/Card/Card.tsx



const Card = (props)=>{
    const { className , animated , src , srcAlt , title , children  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm/* Animated */.fS, {
        as: "article",
        className: (0,esm.cx)(root, className),
        animated: animated,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(esm/* FrameSVGOctagon */.oG, {
                squareSize: 16,
                leftBottom: false,
                rightTop: false
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: container,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: asset,
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            className: Card_css_image,
                            src: src,
                            alt: srcAlt
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: content,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: Card_css_title,
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: Card_css_children,
                                children: children
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/ui/Card/index.ts



/***/ }),

/***/ 5730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* reexport */ CodeBlock)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: external "prism-react-renderer"
var external_prism_react_renderer_ = __webpack_require__(7096);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
;// CONCATENATED MODULE: ./src/theme.ts

const theme = (0,esm/* createAppTheme */.Ko)({
    settings: {
        hues: {
            primary: 180,
            secondary: 60
        },
        fontFamilies: {
            title: '"Titillium Web","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
            body: '"Titillium Web","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
            cta: '"Titillium Web","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
            input: '"Titillium Web","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
            code: "JetBrains Mono,Menlo,Monaco,Consolas,Courier New,monospace"
        }
    }
});


;// CONCATENATED MODULE: ./src/ui/CodeBlock/CodeBlock.css.ts
var CodeBlock_css_line = '_99kmw2';
var pre = '_99kmw1';
var root = '_99kmw0';
;// CONCATENATED MODULE: ./src/ui/CodeBlock/CodeBlock.tsx





const CodeBlock = (props)=>{
    const { className , animated , code , ...otherProps } = props;
    // TODO: Fix type.
    return /*#__PURE__*/ jsx_runtime.jsx(esm/* Animated */.fS, {
        ...otherProps,
        animated: animated,
        className: (0,esm.cx)(root, className),
        children: /*#__PURE__*/ jsx_runtime.jsx(external_prism_react_renderer_.Highlight, {
            theme: external_prism_react_renderer_.themes.vsDark,
            code: code,
            language: "tsx",
            children: ({ className , style , tokens , getLineProps , getTokenProps  })=>/*#__PURE__*/ jsx_runtime.jsx("pre", {
                    className: (0,esm.cx)(pre, className),
                    style: {
                        ...style,
                        background: theme.dark ? `linear-gradient(
                  to right,
                  ${theme.colors.primary.text(6, {
                            alpha: 0.1
                        })},
                  ${theme.colors.primary.text(9, {
                            alpha: 0.1
                        })}
                )` : theme.colors.primary.bg(2)
                    },
                    children: tokens.map((line, i)=>{
                        // TODO: Fix overflow content parent resize.
                        const tokenProps = getLineProps({
                            line
                        });
                        return /*#__PURE__*/ jsx_runtime.jsx("div", {
                            ...tokenProps,
                            className: (0,esm.cx)(CodeBlock_css_line, tokenProps.className),
                            children: line.map((token, key)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                                    ...getTokenProps({
                                        token
                                    })
                                }, key))
                        }, i);
                    })
                })
        })
    });
};


;// CONCATENATED MODULE: ./src/ui/CodeBlock/index.ts



/***/ }),

/***/ 9743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ HeaderLayout)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
// EXTERNAL MODULE: ./src/styles/motion.css.ts
var motion_css = __webpack_require__(1316);
;// CONCATENATED MODULE: ./src/ui/HeaderLayout/HeaderLayout.css.ts
var HeaderLayout_css_center = 'l9j4si5';
var container = 'l9j4si1';
var HeaderLayout_css_frame = 'l9j4si2';
var HeaderLayout_css_left = 'l9j4si4';
var HeaderLayout_css_right = 'l9j4si6';
var root = 'l9j4si0';
var section = 'l9j4si3';
;// CONCATENATED MODULE: ./src/ui/HeaderLayout/HeaderLayout.tsx




const HeaderLayout = (props)=>{
    const { className , animated , hasFrame , left , center , right  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(esm/* Animated */.fS, {
        as: "header",
        className: (0,esm.cx)(root, className),
        animated: animated,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: container,
            children: [
                hasFrame && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    role: "presentation",
                    className: (0,esm.cx)(HeaderLayout_css_frame, motion_css/* transition */.e),
                    children: /*#__PURE__*/ jsx_runtime.jsx(esm/* Illuminator */.rT, {
                        color: "hsl(180 50% 50% / 10%)",
                        size: 400
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(esm/* Animated */.fS, {
                    className: (0,esm.cx)(section, HeaderLayout_css_left),
                    animated: (0,esm.aa)("x", -12, 0),
                    children: left
                }),
                /*#__PURE__*/ jsx_runtime.jsx(esm/* Animated */.fS, {
                    className: (0,esm.cx)(section, HeaderLayout_css_center),
                    animated: (0,esm.aa)("scaleX", 0.9, 1),
                    children: center
                }),
                /*#__PURE__*/ jsx_runtime.jsx(esm/* Animated */.fS, {
                    className: (0,esm.cx)(section, HeaderLayout_css_right),
                    animated: (0,esm.aa)("x", 12, 0),
                    children: right
                })
            ]
        })
    });
};


;// CONCATENATED MODULE: ./src/ui/HeaderLayout/index.ts



/***/ }),

/***/ 3619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* reexport */ LogoType)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
;// CONCATENATED MODULE: ./src/ui/LogoType/LogoType.css.ts
var root = '_1ehj8c50';
;// CONCATENATED MODULE: ./src/ui/LogoType/LogoType.tsx



const LogoType = (props)=>{
    const { className , animated  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(esm/* Animated */.fS, {
        as: "img",
        className: (0,esm.cx)(root, className),
        animated: animated,
        src: "/logotype.png",
        role: "presentation"
    });
};


;// CONCATENATED MODULE: ./src/ui/LogoType/index.ts



/***/ }),

/***/ 7828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ Logo)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/ui/Logo/Logo.css.ts
var Logo_css_link = 'razuih2';
var logo = 'razuih4';
var root = 'razuih0';
;// CONCATENATED MODULE: ./src/ui/Logo/Logo.tsx




const Logo = (props)=>{
    const { className , animated , children  } = props;
    const bleeps = (0,esm/* useBleeps */.s0)();
    return /*#__PURE__*/ jsx_runtime.jsx(esm/* Animated */.fS, {
        as: "h1",
        className: (0,esm.cx)(root, className),
        animated: animated,
        onClick: ()=>bleeps.click?.play(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
            className: Logo_css_link,
            href: "/",
            title: "Arwes Project",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    className: logo,
                    src: "/logo.png",
                    alt: "Arwes Project"
                }),
                children
            ]
        })
    });
};


;// CONCATENATED MODULE: ./src/ui/Logo/index.ts



/***/ }),

/***/ 7564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ MainLayout)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
// EXTERNAL MODULE: ./src/ui/Background/index.ts + 2 modules
var Background = __webpack_require__(9124);
;// CONCATENATED MODULE: ./src/ui/MainLayout/MainLayout.css.tsx
var container = 'bltsnn1';
var root = 'bltsnn0';
;// CONCATENATED MODULE: ./src/ui/MainLayout/MainLayout.tsx




const MainLayout = (props)=>{
    const { className , children  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        lang: "en",
        className: (0,esm.cx)(root, className),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Background/* Background */.A, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: container,
                children: children
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/ui/MainLayout/index.ts



/***/ }),

/***/ 6432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ MenuItem)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
;// CONCATENATED MODULE: ./src/ui/MenuItem/MenuItem.css.ts
var MenuItem_css_active = '_1izpm6h1';
var root = '_1izpm6h0';
;// CONCATENATED MODULE: ./src/ui/MenuItem/MenuItem.tsx



const MenuItem = (props)=>{
    const { className , animated , active , children  } = props;
    const bleeps = (0,esm/* useBleeps */.s0)();
    return /*#__PURE__*/ jsx_runtime.jsx(esm/* Animated */.fS, {
        as: "li",
        className: (0,esm.cx)(root, active && MenuItem_css_active, className),
        animated: animated,
        onClick: ()=>bleeps.click?.play(),
        children: children
    });
};


;// CONCATENATED MODULE: ./src/ui/MenuItem/index.ts



/***/ }),

/***/ 8671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* reexport */ Menu)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
;// CONCATENATED MODULE: ./src/ui/Menu/Menu.css.ts
var root = '_1l69nam0';
;// CONCATENATED MODULE: ./src/ui/Menu/Menu.tsx



const Menu = (props)=>{
    const { className , animated , children  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(esm/* Animated */.fS, {
        as: "ul",
        className: (0,esm.cx)(root, className),
        animated: animated,
        children: children
    });
};


;// CONCATENATED MODULE: ./src/ui/Menu/index.ts



/***/ }),

/***/ 7662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ModalLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var iconoir_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9436);
/* harmony import */ var _arwes_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(183);
/* harmony import */ var _app_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(556);
/* harmony import */ var _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3495);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iconoir_react__WEBPACK_IMPORTED_MODULE_2__]);
iconoir_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ModalLayout = (props)=>{
    const { className , title , children , footer , onClose  } = props;
    const frame1Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const frame2Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const frame1Animation = (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .useFrameSVGAssemblingAnimation */ .EM)(frame1Ref);
    const frame2Animation = (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .useFrameSVGAssemblingAnimation */ .EM)(frame2Ref);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animator */ .LH, {
        merge: true,
        combine: true,
        manager: "sequence",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            role: "dialog",
            className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__.cx)(_ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .root */ .Jz, className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animator */ .LH, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Dots */ .bb, {
                        style: {
                            position: "fixed"
                        },
                        color: "hsla(180, 29%, 72%, 0.1)",
                        size: 2,
                        distance: 20
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animated */ .fS, {
                    className: _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .container */ .nC,
                    animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__.aa)("y", 16, 0),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animator */ .LH, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animated */ .fS, {
                                className: _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .frames */ .iY,
                                animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__.aa)("scaleY", 0.5, 1, 1),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .FrameSVGKranox */ .cA, {
                                        elementRef: frame1Ref,
                                        className: _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .frame1 */ .Hy,
                                        style: {
                                            top: 5,
                                            bottom: 5,
                                            height: "calc(100% - 10px)"
                                        },
                                        strokeWidth: 1,
                                        squareSize: 12,
                                        smallLineLength: 12,
                                        largeLineLength: 48,
                                        onRender: frame1Animation.onRender
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .FrameSVGNefrex */ .he, {
                                        elementRef: frame2Ref,
                                        className: _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .frame2 */ ._E,
                                        style: {
                                            left: 7,
                                            right: 7,
                                            width: "calc(100% - 14px)"
                                        },
                                        strokeWidth: 3,
                                        squareSize: 12,
                                        smallLineLength: 12,
                                        largeLineLength: 48,
                                        onRender: frame2Animation.onRender
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animator */ .LH, {
                            combine: true,
                            manager: "stagger",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .content */ .kQ,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                        className: _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .header */ .Fs,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animator */ .LH, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .xv, {
                                                    as: "h1",
                                                    className: _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .title */ .TN,
                                                    fixed: true,
                                                    children: title
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animator */ .LH, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animated */ .fS, {
                                                    role: "button",
                                                    className: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__.cx)(_app_styles__WEBPACK_IMPORTED_MODULE_5__/* .linkSecondary */ .E, _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .close */ .xv),
                                                    animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .aaVisibility */ .Wx)(),
                                                    onClick: onClose,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconoir_react__WEBPACK_IMPORTED_MODULE_2__.Cancel, {})
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animator */ .LH, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_arwes_react__WEBPACK_IMPORTED_MODULE_3__/* .Animated */ .fS, {
                                            as: "hr",
                                            animated: (0,_arwes_react__WEBPACK_IMPORTED_MODULE_3__.aa)("scaleX", 0, 1)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                        className: _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .body */ .d1,
                                        children: children
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                                        className: _ModalLayout_css__WEBPACK_IMPORTED_MODULE_4__/* .footer */ .Mv,
                                        children: footer
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _ModalLayout__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _ModalLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModalLayout__WEBPACK_IMPORTED_MODULE_0__]);
_ModalLayout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ PageContentLayout)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../packages/react/build/esm/index.js + 132 modules
var esm = __webpack_require__(183);
;// CONCATENATED MODULE: ./src/ui/PageContentLayout/PageContentLayout.css.ts
var container = 'mynlp64';
var content = 'mynlp65';
var PageContentLayout_css_floating = 'mynlp61';
var PageContentLayout_css_frame = 'mynlp62';
var overflow = 'mynlp63';
var root = 'mynlp60';
;// CONCATENATED MODULE: ./src/ui/PageContentLayout/PageContentLayout.tsx



const PageContentLayout = (props)=>{
    const { className , style , animated , children , frame =true , floating  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm/* Animated */.fS, {
        as: "main",
        className: (0,esm.cx)(root, floating && PageContentLayout_css_floating, className),
        style: style,
        animated: animated,
        children: [
            frame && /*#__PURE__*/ jsx_runtime.jsx(esm/* Animator */.LH, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm/* Animated */.fS, {
                    className: PageContentLayout_css_frame,
                    animated: (0,esm/* aaVisibility */.Wx)(),
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(esm/* FrameSVGOctagon */.oG, {
                            className: "page-document__svg"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(esm/* Illuminator */.rT, {
                            color: "hsl(180 50% 50% / 5%)",
                            size: 400
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: overflow,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: container,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: content,
                        children: children
                    })
                })
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/ui/PageContentLayout/index.ts



/***/ }),

/***/ 5134:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fq": () => (/* reexport safe */ _PageContentLayout__WEBPACK_IMPORTED_MODULE_8__.F),
/* harmony export */   "PW": () => (/* reexport safe */ _ModalLayout__WEBPACK_IMPORTED_MODULE_11__.P),
/* harmony export */   "T$": () => (/* reexport safe */ _HeaderLayout__WEBPACK_IMPORTED_MODULE_7__.T),
/* harmony export */   "TR": () => (/* reexport safe */ _Logo__WEBPACK_IMPORTED_MODULE_5__.T),
/* harmony export */   "Zb": () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "Zn": () => (/* reexport safe */ _MainLayout__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "dn": () => (/* reexport safe */ _CodeBlock__WEBPACK_IMPORTED_MODULE_10__.d),
/* harmony export */   "nJ": () => (/* reexport safe */ _LogoType__WEBPACK_IMPORTED_MODULE_6__.n),
/* harmony export */   "sN": () => (/* reexport safe */ _MenuItem__WEBPACK_IMPORTED_MODULE_4__.s),
/* harmony export */   "v2": () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_3__.v),
/* harmony export */   "zx": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_2__.z)
/* harmony export */ });
/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7564);
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9124);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2077);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8671);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6432);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7828);
/* harmony import */ var _LogoType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3619);
/* harmony import */ var _HeaderLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9743);
/* harmony import */ var _PageContentLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(225);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(425);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5730);
/* harmony import */ var _ModalLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModalLayout__WEBPACK_IMPORTED_MODULE_11__]);
_ModalLayout__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;