"use strict";
exports.id = 183;
exports.ids = [183];
exports.modules = {

/***/ 183:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fS": () => (/* reexport */ Animated_Animated),
  "LH": () => (/* reexport */ Animator_Animator),
  "QS": () => (/* reexport */ AnimatorGeneralProvider_AnimatorGeneralProvider),
  "tu": () => (/* reexport */ BleepsOnAnimator_BleepsOnAnimator),
  "ix": () => (/* reexport */ BleepsProvider_BleepsProvider),
  "bb": () => (/* reexport */ Dots_Dots),
  "cA": () => (/* reexport */ FrameSVGKranox_FrameSVGKranox),
  "Ex": () => (/* reexport */ FrameSVGLines_FrameSVGLines),
  "he": () => (/* reexport */ FrameSVGNefrex_FrameSVGNefrex),
  "oG": () => (/* reexport */ FrameSVGOctagon_FrameSVGOctagon),
  "rT": () => (/* reexport */ Illuminator_Illuminator),
  "Oh": () => (/* reexport */ Puffs_Puffs),
  "xv": () => (/* reexport */ Text_Text),
  "aa": () => (/* reexport */ aa),
  "rn": () => (/* reexport */ aaOpacity),
  "Wx": () => (/* reexport */ aaVisibility),
  "Ko": () => (/* reexport */ createAppTheme),
  "cx": () => (/* reexport */ cx),
  "s0": () => (/* reexport */ useBleeps),
  "EM": () => (/* reexport */ useFrameSVGAssemblingAnimation)
});

// UNUSED EXPORTS: ANIMATED_ANIMATIONS_EMPTY, ANIMATOR_ACTIONS, ANIMATOR_DEFAULT_DURATION, ANIMATOR_DEFAULT_SETTINGS, ANIMATOR_MANAGER_NAMES, ANIMATOR_STATES, APP_THEME_STRUCTURE, APP_THEME_STRUCTURE_PALETTE, ARWES_BGS, AnimatedX, BLEEPS_CATEGORIES, FrameSVG, FrameSVGCorners, FrameSVGUnderline, GridLines, IS_BROWSER, IS_BROWSER_SAFARI, IlluminatorSVG, MovingLines, STYLES_EMPTY, TEXT_CLASS, createAnimation, createAnimatorSystem, createAppStylesBaseline, createAppThemePalette, createBleep, createBleepsManager, createCreateTheme, createFrameKranoxClip, createFrameOctagonClip, createTOScheduler, createThemeBreakpoints, createThemeColor, createThemeMultiplier, createThemeStyle, createThemeUnit, easing, formatFrameSVGPath, getTransitionTextDuration, loadImage, memo, mergeRefs, randomizeList, renderFrameSVGPaths, transitionTextDecipher, transitionTextSequence, useAnimatedAnimations, useAnimator, useAnimatorGeneral, useFrameSVGRenderer, useStyles, useThemeStyles

;// CONCATENATED MODULE: ../../packages/tools/build/esm/constants.js
const IS_BROWSER = typeof window !== 'undefined';
const IS_BROWSER_SAFARI = IS_BROWSER &&
    window.navigator.userAgent.includes('Safari') &&
    !window.navigator.userAgent.includes('Chrome');

;// CONCATENATED MODULE: ../../packages/tools/build/esm/cx/cx.js
const cx = (...classNames) => {
    return classNames.filter(Boolean).join(' ');
};


;// CONCATENATED MODULE: ../../packages/tools/build/esm/cx/index.js


;// CONCATENATED MODULE: ../../packages/tools/build/esm/createTOScheduler/createTOScheduler.js
const ID_DEFAULT = '';
function createTOScheduler() {
    const ledger = new Map();
    const isPending = (id = ID_DEFAULT) => {
        return ledger.has(id);
    };
    const stop = (id = ID_DEFAULT) => {
        const cancelSchedule = ledger.get(id);
        if (cancelSchedule) {
            cancelSchedule();
        }
        ledger.delete(id);
    };
    const stopAll = () => {
        Array.from(ledger.keys()).forEach(stop);
    };
    const start = (a, b, c) => {
        const id = c ? a : ID_DEFAULT;
        const delay = (c ? b : a) * 1000;
        const callback = c || b;
        stop(id);
        const timeoutId = setTimeout(() => {
            ledger.delete(id);
            callback();
        }, delay);
        ledger.set(id, () => {
            clearTimeout(timeoutId);
        });
    };
    return Object.freeze({ isPending, stop, stopAll, start });
}


;// CONCATENATED MODULE: ../../packages/tools/build/esm/createTOScheduler/index.js


;// CONCATENATED MODULE: ../../packages/tools/build/esm/randomizeList/randomizeList.js
const randomizeList = (providedList) => {
    const list = providedList.slice(0);
    // Start from the last element and swap one by one. We don't need to run for
    // the first element, that's why i > 0.
    for (let i = list.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i inclusive.
        const j = Math.floor(Math.random() * (i + 1));
        // Swap arr[i] with the element at random index.
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
};


;// CONCATENATED MODULE: ../../packages/tools/build/esm/randomizeList/index.js


;// CONCATENATED MODULE: ../../packages/tools/build/esm/index.js







;// CONCATENATED MODULE: ../../packages/theme/build/esm/createThemeColor/createThemeColor.js
const minMax = (min, max) => (value) => Math.min(max, Math.max(min, value));
const minMax0to360 = minMax(0, 360);
const minMax0to100 = minMax(0, 100);
const minMax0to1 = minMax(0, 1);
const searchRegExp = (string, regexp) => {
    const result = string.match(regexp);
    if (Array.isArray(result)) {
        return String(result[0]);
    }
    return null;
};
const colorOptionsDefault = {};
const fromHSLAArrayToHSLAString = (src, options = colorOptionsDefault) => {
    var _a;
    const { alpha = 1 } = options;
    const alphaAdjust = minMax0to1(alpha);
    const h = minMax0to360(src[0]);
    const s = minMax0to100(src[1]);
    const l = minMax0to100(src[2]);
    const a = minMax0to1(((_a = src[3]) !== null && _a !== void 0 ? _a : 1) * alphaAdjust);
    return `hsla(${h},${s}%,${l}%,${a})`;
};
const formatColor = (color, options = colorOptionsDefault) => {
    if (typeof color !== 'string') {
        return fromHSLAArrayToHSLAString(color, options);
    }
    const { alpha } = options;
    if (alpha === undefined || alpha === null) {
        return color;
    }
    // Make sure the color format complies with:
    // - hsl, hsla, rgb, rgba color functions.
    // - Either 3 or 4 arguments.
    // - Each argument separated by either "," or "space", except fourth one.
    // - Fourth argument is optional and can be separated by either "," or "/".
    // - First argument can be an integer, floating, percentage or degree value.
    // - Each argument can be aa integer, floating, or percentage value.
    // See:
    // - https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
    // - https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
    if (!/^(hsla?|rgba?)\(\d+(\.\d+)?(%|deg)?(,\s?|\s)\d+(\.\d+)?%?(,\s?|\s)\d+(\.\d+)?%?((,\s?|\s?\/\s?)\d+(\.\d+)?%?)?\)$/.test(color)) {
        return color;
    }
    const separators = Array.from(color.matchAll(/(,\s?|\s?\/\s?|\s)/g));
    const hasCurrentAlpha = separators.length === 3;
    const isCommaSeparated = color.includes(',');
    const alphaAdjust = minMax0to1(alpha);
    if (hasCurrentAlpha) {
        const alphaCurrentMatch = searchRegExp(color, /\d+(\.\d+)?%?\)$/);
        const isPercentage = alphaCurrentMatch.includes('%');
        const alphaCurrent = Number(alphaCurrentMatch.replace(/%?\)$/g, ''));
        return color.replace(/\d+(\.\d+)?%?\)$/, `${alphaCurrent * alphaAdjust}${isPercentage ? '%' : ''})`);
    }
    return color.replace(/\)$/, isCommaSeparated ? `,${alphaAdjust})` : ` / ${alphaAdjust})`);
};
const createThemeColor = (settings) => {
    if (typeof settings === 'function') {
        const createColor = settings;
        return (indexProvided, options) => {
            const index = Math.round(indexProvided);
            const color = createColor(index);
            return formatColor(color, options);
        };
    }
    const series = settings;
    return (indexProvided, options) => {
        if (!series.length) {
            return '';
        }
        const index = Math.round(indexProvided);
        const color = series[index > series.length - 1 ? series.length - 1 : index];
        return formatColor(color, options);
    };
};


;// CONCATENATED MODULE: ../../packages/theme/build/esm/createThemeColor/index.js


;// CONCATENATED MODULE: ../../packages/theme/build/esm/createThemeMultiplier/createThemeMultiplier.js
const createThemeMultiplier = (settings) => (index) => {
    if (Number.isFinite(settings)) {
        const baseValue = settings;
        return baseValue * index;
    }
    if (Array.isArray(settings)) {
        if (!settings.length) {
            return 0;
        }
        const series = settings;
        const seriesIndex = Math.round(index);
        return series[seriesIndex > series.length - 1 ? series.length - 1 : seriesIndex];
    }
    const multiplier = settings;
    return multiplier(index);
};


;// CONCATENATED MODULE: ../../packages/theme/build/esm/createThemeUnit/createThemeUnit.js
const getSeriesItem = (list, indexProvided) => {
    const index = Math.round(indexProvided);
    return list[index > list.length - 1 ? list.length - 1 : index];
};
const createThemeUnit = (settings) => index => {
    if (typeof index === 'string') {
        return index;
    }
    const indexes = Array.isArray(index) ? index : [index];
    if (Array.isArray(settings)) {
        if (!settings.length) {
            return '';
        }
        return indexes
            .map((subIndex) => {
            if (typeof subIndex === 'string') {
                return subIndex;
            }
            return getSeriesItem(settings, subIndex);
        })
            .join(' ');
    }
    return indexes
        .map(subIndex => {
        if (typeof subIndex === 'string') {
            return subIndex;
        }
        return settings(subIndex);
    })
        .join(' ');
};


;// CONCATENATED MODULE: ../../packages/theme/build/esm/createThemeStyle/createThemeStyle.js
const createThemeStyle = (series) => {
    return (indexProvided) => {
        if (!series.length) {
            return {};
        }
        const index = Math.round(indexProvided);
        return series[index] || series[series.length - 1];
    };
};


;// CONCATENATED MODULE: ../../packages/theme/build/esm/createThemeBreakpoints/createThemeBreakpoints.js
const createThemeBreakpoints = (settings = []) => {
    const getBreakpointValue = (key) => {
        if (typeof key === 'string') {
            for (const item of settings) {
                if (typeof item !== 'string' && item.key === key) {
                    return item.value;
                }
            }
            return key;
        }
        const item = settings[key > settings.length - 1 ? settings.length - 1 : key];
        return typeof item === 'string' ? item : item.value;
    };
    const up = (key, opts) => {
        const media = (opts === null || opts === void 0 ? void 0 : opts.strip) ? '' : '@media ';
        return `${media}(min-width: ${getBreakpointValue(key)})`;
    };
    const down = (key, opts) => {
        const media = (opts === null || opts === void 0 ? void 0 : opts.strip) ? '' : '@media ';
        return `${media}(max-width: calc(${getBreakpointValue(key)} - 1px))`;
    };
    const between = (startKey, endKey, opts) => {
        const media = (opts === null || opts === void 0 ? void 0 : opts.strip) ? '' : '@media ';
        const min = getBreakpointValue(startKey);
        const max = getBreakpointValue(endKey);
        return `${media}(min-width: ${min}) and (max-width: calc(${max} - 1px))`;
    };
    return Object.freeze({
        settings,
        up,
        down,
        between
    });
};


;// CONCATENATED MODULE: ../../packages/theme/build/esm/createCreateTheme/createCreateTheme.js





// TODO: Set typing.
const extendDeepObject = (structure, defaults, extension) => {
    const newObject = {};
    Object.keys(structure).forEach(key => {
        var _a;
        if (typeof structure[key] === 'object') {
            if (structure[key] === null) {
                throw new Error('Theme structure values can not be null.');
            }
            if (!defaults[key] || typeof defaults[key] !== 'object') {
                throw new Error('Theme default value should match theme structure object.');
            }
            newObject[key] = extendDeepObject(structure[key], defaults[key], extension === null || extension === void 0 ? void 0 : extension[key]);
        }
        else {
            newObject[key] = (_a = extension === null || extension === void 0 ? void 0 : extension[key]) !== null && _a !== void 0 ? _a : defaults[key];
        }
    });
    return newObject;
};
// TODO: Set typing.
const createDeepThemeSetup = (structure, settings) => {
    const newObject = {};
    Object.keys(structure).forEach(key => {
        if (typeof structure[key] === 'object') {
            newObject[key] = createDeepThemeSetup(structure[key], settings[key]);
        }
        else {
            switch (structure[key]) {
                case 'multiplier':
                    newObject[key] = createThemeMultiplier(settings[key]);
                    break;
                case 'unit':
                    newObject[key] = createThemeUnit(settings[key]);
                    break;
                case 'color':
                    newObject[key] = createThemeColor(settings[key]);
                    break;
                case 'style':
                    newObject[key] = createThemeStyle(settings[key]);
                    break;
                case 'breakpoints':
                    newObject[key] = createThemeBreakpoints(settings[key]);
                    break;
                case 'other':
                    newObject[key] = settings[key];
                    break;
                default: throw new Error(`Invalid theme structure key "${structure[key]}" provided.`);
            }
        }
    });
    return newObject;
};
const createCreateTheme = (themeStructure, themeSettingsDefaults) => {
    const createTheme = (themeSettingsExtensions = {}) => {
        let themeSettings;
        if (Array.isArray(themeSettingsExtensions)) {
            // @ts-expect-error TODO.
            themeSettings = themeSettingsExtensions.reduce((settingsTotal, settingsItem) => {
                if (!settingsItem) {
                    return settingsTotal;
                }
                return extendDeepObject(themeStructure, settingsTotal, settingsItem);
            }, themeSettingsDefaults);
        }
        else {
            themeSettings = extendDeepObject(themeStructure, themeSettingsDefaults, themeSettingsExtensions);
        }
        return createDeepThemeSetup(themeStructure, themeSettings);
    };
    return createTheme;
};


;// CONCATENATED MODULE: ../../packages/theme/build/esm/createCreateTheme/index.js


;// CONCATENATED MODULE: ../../packages/theme/build/esm/createAppTheme/deepExtend.js
// TODO: Set typing.
function deepExtend(target = {}, extension = {}) {
    for (const key in extension) {
        if (typeof extension[key] === 'object' && !Array.isArray(extension[key]) && extension[key] !== null) {
            if (target[key] === undefined || target[key] === null) {
                target[key] = {};
            }
            deepExtend(target[key], extension[key]);
        }
        else {
            target[key] = extension[key];
        }
    }
    return target;
}


;// CONCATENATED MODULE: ../../packages/theme/build/esm/createAppTheme/createAppTheme.js


// THEME STRUCTURE
const APP_THEME_STRUCTURE_PALETTE = {
    main: 'color',
    text: 'color',
    deco: 'color',
    bg: 'color',
    ol: 'color'
};
const APP_THEME_STRUCTURE = {
    dark: 'other',
    space: 'unit',
    spaceN: 'multiplier',
    hues: {
        primary: 'other',
        secondary: 'other',
        success: 'other',
        info: 'other',
        warning: 'other',
        error: 'other'
    },
    colors: {
        primary: APP_THEME_STRUCTURE_PALETTE,
        secondary: APP_THEME_STRUCTURE_PALETTE,
        success: APP_THEME_STRUCTURE_PALETTE,
        info: APP_THEME_STRUCTURE_PALETTE,
        warning: APP_THEME_STRUCTURE_PALETTE,
        error: APP_THEME_STRUCTURE_PALETTE
    },
    fontFamilies: {
        title: 'other',
        body: 'other',
        cta: 'other',
        input: 'other',
        code: 'other'
    },
    typography: {
        title: 'style',
        body: 'style',
        cta: 'style',
        input: 'style',
        code: 'style'
    },
    transitions: {
        duration: 'unit',
        durationN: 'multiplier'
    }
};
const createAppThemePalette = (hue, dark = true) => ({
    main: (i) => [hue, 80 + i, 92.5 - i * 9.44],
    text: (i) => [hue, 40 + i, 92.5 - i * 9.44],
    deco: (i) => [hue, 80 + i, 50, 0.05 + i * 0.05],
    bg: (i) => [hue, 40 + i, dark ? 2 + i * 2 : 98 - i * 2],
    ol: (i) => [hue, 80 + i, dark ? 2 + i * 2 : 98 - i * 2]
});
const createAppTheme = (props = {}) => {
    var _a, _b, _c, _d;
    const dark = ((_a = props.settings) === null || _a === void 0 ? void 0 : _a.dark) === undefined ? true : !!((_b = props.settings) === null || _b === void 0 ? void 0 : _b.dark);
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const hues = {
        primary: 200,
        secondary: 80,
        success: 120,
        info: 220,
        warning: 40,
        error: 0,
        ...(_c = props.settings) === null || _c === void 0 ? void 0 : _c.hues
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const fontFamilies = {
        title: '"Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
        body: '"Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
        cta: '"Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
        input: '"Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
        code: 'JetBrains Mono,Menlo,Monaco,Consolas,Courier New,monospace',
        ...(_d = props.settings) === null || _d === void 0 ? void 0 : _d.fontFamilies
    };
    const appThemeSettingsBase = {
        dark,
        space: index => `${index * 0.25}rem`,
        spaceN: index => index * 4,
        hues,
        colors: {
            primary: createAppThemePalette(hues.primary, dark),
            secondary: createAppThemePalette(hues.secondary, dark),
            success: createAppThemePalette(hues.success, dark),
            info: createAppThemePalette(hues.info, dark),
            warning: createAppThemePalette(hues.warning, dark),
            error: createAppThemePalette(hues.error, dark)
        },
        fontFamilies,
        typography: {
            title: [
                { fontFamily: fontFamilies.title, fontWeight: '600', fontSize: '1.75rem' },
                { fontFamily: fontFamilies.title, fontWeight: '600', fontSize: '1.625rem' },
                { fontFamily: fontFamilies.title, fontWeight: '600', fontSize: '1.5rem' },
                { fontFamily: fontFamilies.title, fontWeight: '600', fontSize: '1.375rem' },
                { fontFamily: fontFamilies.title, fontWeight: '600', fontSize: '1.25rem' },
                { fontFamily: fontFamilies.title, fontWeight: '600', fontSize: '1.125rem' }
            ],
            body: [
                { fontFamily: fontFamilies.body, fontWeight: '400', fontSize: '1.125rem' },
                { fontFamily: fontFamilies.body, fontWeight: '400', fontSize: '1rem' },
                { fontFamily: fontFamilies.body, fontWeight: '400', fontSize: '0.875rem' }
            ],
            cta: [
                { fontFamily: fontFamilies.cta, fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase' },
                { fontFamily: fontFamilies.cta, fontWeight: '500', fontSize: '0.875rem', textTransform: 'uppercase' },
                { fontFamily: fontFamilies.cta, fontWeight: '500', fontSize: '0.75rem', textTransform: 'uppercase' }
            ],
            input: [
                { fontFamily: fontFamilies.input, fontWeight: '400', fontSize: '1rem' },
                { fontFamily: fontFamilies.input, fontWeight: '400', fontSize: '0.875rem' },
                { fontFamily: fontFamilies.input, fontWeight: '400', fontSize: '0.75rem' }
            ],
            code: [
                { fontFamily: fontFamilies.code, fontWeight: '400', fontSize: '1rem' },
                { fontFamily: fontFamilies.code, fontWeight: '400', fontSize: '0.875rem' },
                { fontFamily: fontFamilies.code, fontWeight: '400', fontSize: '0.75rem' }
            ]
        },
        transitions: {
            duration: index => `${index * 0.15}s`,
            durationN: index => index * 0.15
        }
    };
    const createTheme = createCreateTheme(deepExtend(APP_THEME_STRUCTURE, props.structure), deepExtend(appThemeSettingsBase, props.settings));
    const theme = createTheme();
    return theme;
};


;// CONCATENATED MODULE: ../../packages/theme/build/esm/createAppTheme/index.js


;// CONCATENATED MODULE: ../../packages/theme/build/esm/index.js









;// CONCATENATED MODULE: ../../packages/animator/build/esm/constants.js
// States
const ANIMATOR_STATES = Object.freeze({
    entered: 'entered',
    entering: 'entering',
    exiting: 'exiting',
    exited: 'exited'
});
// Actions
const ANIMATOR_ACTIONS = Object.freeze({
    setup: 'setup',
    enter: 'enter',
    enterEnd: 'enterEnd',
    exit: 'exit',
    exitEnd: 'exitEnd',
    update: 'update',
    refresh: 'refresh'
});
// Managers
const ANIMATOR_MANAGER_NAMES = Object.freeze({
    parallel: 'parallel',
    stagger: 'stagger',
    staggerReverse: 'staggerReverse',
    sequence: 'sequence',
    sequenceReverse: 'sequenceReverse',
    switch: 'switch'
});
const ANIMATOR_DEFAULT_DURATION = Object.freeze({
    enter: 0.4,
    exit: 0.4,
    delay: 0,
    offset: 0,
    stagger: 0.04
});
const ANIMATOR_DEFAULT_SETTINGS = Object.freeze({
    active: true,
    duration: ANIMATOR_DEFAULT_DURATION,
    manager: ANIMATOR_MANAGER_NAMES.parallel,
    merge: false,
    combine: false,
    initialState: 'exited'
});

;// CONCATENATED MODULE: ../../packages/animator/build/esm/internal/createAnimatorManager/createAnimatorManager.js

const createAnimatorManagerParallel = node => {
    const getChildren = (childrenProvided) => {
        const children = (childrenProvided !== null && childrenProvided !== void 0 ? childrenProvided : Array.from(node.children));
        return children.filter(child => {
            const { condition } = child.control.getSettings();
            return condition ? condition(child) : true;
        });
    };
    const getDurationEnter = (childrenProvided) => {
        const children = getChildren(childrenProvided);
        return children.reduce((total, child) => Math.max(total, child.duration.enter), 0);
    };
    const enterChildren = (childrenProvided) => {
        const children = getChildren(childrenProvided);
        for (const child of children) {
            child.send(ANIMATOR_ACTIONS.enter);
        }
    };
    return Object.freeze({
        name: ANIMATOR_MANAGER_NAMES.parallel,
        getDurationEnter,
        enterChildren
    });
};
const createAnimatorManagerStagger = (node, name) => {
    let reservedUntilTime = 0;
    const getChildren = (childrenProvided) => {
        const children = (childrenProvided !== null && childrenProvided !== void 0 ? childrenProvided : Array.from(node.children));
        return children.filter(child => {
            const { condition } = child.control.getSettings();
            return condition ? condition(child) : true;
        });
    };
    const getDurationEnter = (childrenProvided) => {
        const children = getChildren(childrenProvided);
        if (!children.length) {
            return 0;
        }
        const { duration } = node.control.getSettings();
        const lastChild = children[children.length - 1];
        // TODO: If any of the children has a longer enter duration which surpasses
        // the accumulated + last child enter duration value, the total duration should
        // be greater.
        return (duration.stagger * (children.length - 1)) + lastChild.duration.enter;
    };
    const enterChildren = (childrenProvided) => {
        let children = getChildren(childrenProvided);
        const parentSettings = node.control.getSettings();
        const stagger = (parentSettings.duration.stagger || 0) * 1000; // seconds to ms
        if (name === ANIMATOR_MANAGER_NAMES.staggerReverse) {
            children = children.reverse();
        }
        const now = Date.now();
        reservedUntilTime = Math.max(reservedUntilTime, now);
        for (const child of children) {
            const childSettings = child.control.getSettings();
            const offset = (childSettings.duration.offset || 0) * 1000; // seconds to ms
            reservedUntilTime = reservedUntilTime + offset;
            const time = (reservedUntilTime - now) / 1000; // ms to seconds
            const delay = childSettings.duration.delay || 0;
            reservedUntilTime = reservedUntilTime + stagger;
            child.scheduler.start(time + delay, () => child.send(ANIMATOR_ACTIONS.enter));
        }
    };
    return Object.freeze({
        name,
        getDurationEnter,
        enterChildren
    });
};
const createAnimatorManagerSequence = (node, name) => {
    let reservedUntilTime = 0;
    const getChildren = (childrenProvided) => {
        const children = (childrenProvided !== null && childrenProvided !== void 0 ? childrenProvided : Array.from(node.children));
        return children.filter(child => {
            const { condition } = child.control.getSettings();
            return condition ? condition(child) : true;
        });
    };
    const getDurationEnter = (childrenProvided) => {
        const children = getChildren(childrenProvided);
        return children.reduce((total, child) => total + child.duration.enter, 0);
    };
    const enterChildren = (childrenProvided) => {
        let children = getChildren(childrenProvided);
        const now = Date.now();
        if (name === ANIMATOR_MANAGER_NAMES.sequenceReverse) {
            children = children.reverse();
        }
        reservedUntilTime = Math.max(reservedUntilTime, now);
        for (const child of children) {
            const childSettings = child.control.getSettings();
            const offset = (childSettings.duration.offset || 0) * 1000; // seconds to ms
            const durationEnter = child.duration.enter * 1000; // seconds to ms
            reservedUntilTime = reservedUntilTime + offset;
            const time = (reservedUntilTime - now) / 1000; // ms to seconds
            const delay = childSettings.duration.delay || 0;
            reservedUntilTime += durationEnter;
            child.scheduler.start(time + delay, () => child.send(ANIMATOR_ACTIONS.enter));
        }
    };
    return Object.freeze({
        name,
        getDurationEnter,
        enterChildren
    });
};
const createAnimatorManagerSwitch = node => {
    let nodeHiding;
    let nodeVisible;
    let nodeSubscriberUnsubscribe;
    const getDurationEnter = () => {
        if (nodeVisible) {
            return nodeVisible.duration.enter;
        }
        const nodeVisibleCurrent = Array.from(node.children).find(child => {
            const { condition } = child.control.getSettings();
            return condition ? condition(child) : true;
        });
        if (nodeVisibleCurrent) {
            return nodeVisibleCurrent.duration.enter;
        }
        return 0;
    };
    const enterChildren = () => {
        nodeSubscriberUnsubscribe === null || nodeSubscriberUnsubscribe === void 0 ? void 0 : nodeSubscriberUnsubscribe();
        nodeSubscriberUnsubscribe = undefined;
        const children = Array.from(node.children);
        const nodeVisibleNew = children.find(child => {
            const { condition } = child.control.getSettings();
            return condition ? condition(child) : true;
        });
        const onNextEnter = () => {
            if (nodeVisibleNew) {
                if (nodeVisibleNew === nodeVisible) {
                    nodeVisibleNew.send(ANIMATOR_ACTIONS.enter);
                }
                else {
                    if (nodeVisible) {
                        nodeHiding = nodeVisible;
                        nodeSubscriberUnsubscribe = nodeHiding.subscribe(nodeHidingSubscribed => {
                            if (nodeHidingSubscribed.state === ANIMATOR_STATES.exited) {
                                nodeSubscriberUnsubscribe === null || nodeSubscriberUnsubscribe === void 0 ? void 0 : nodeSubscriberUnsubscribe();
                                nodeSubscriberUnsubscribe = undefined;
                                nodeHiding = undefined;
                                nodeVisibleNew.send(ANIMATOR_ACTIONS.enter);
                            }
                        });
                        nodeHiding === null || nodeHiding === void 0 ? void 0 : nodeHiding.send(ANIMATOR_ACTIONS.exit);
                    }
                    else {
                        nodeVisibleNew.send(ANIMATOR_ACTIONS.enter);
                        nodeHiding = undefined;
                    }
                    nodeVisible = nodeVisibleNew;
                }
            }
            else {
                nodeHiding = nodeVisible;
                nodeVisible = undefined;
            }
        };
        if (nodeHiding) {
            nodeSubscriberUnsubscribe = nodeHiding.subscribe(nodeHiding => {
                if (nodeHiding.state === ANIMATOR_STATES.exited) {
                    onNextEnter();
                }
            });
        }
        else {
            onNextEnter();
        }
        children
            .filter(child => child !== nodeVisibleNew)
            .forEach(child => child.send(ANIMATOR_ACTIONS.exit));
    };
    const destroy = () => {
        nodeHiding = undefined;
        nodeVisible = undefined;
        nodeSubscriberUnsubscribe === null || nodeSubscriberUnsubscribe === void 0 ? void 0 : nodeSubscriberUnsubscribe();
        nodeSubscriberUnsubscribe = undefined;
    };
    return Object.freeze({
        name: ANIMATOR_MANAGER_NAMES["switch"],
        getDurationEnter,
        enterChildren,
        destroy
    });
};
const createAnimatorManager = (node, manager) => {
    switch (manager) {
        case ANIMATOR_MANAGER_NAMES.stagger: return createAnimatorManagerStagger(node, ANIMATOR_MANAGER_NAMES.stagger);
        case ANIMATOR_MANAGER_NAMES.staggerReverse: return createAnimatorManagerStagger(node, ANIMATOR_MANAGER_NAMES.staggerReverse);
        case ANIMATOR_MANAGER_NAMES.sequence: return createAnimatorManagerSequence(node, ANIMATOR_MANAGER_NAMES.sequence);
        case ANIMATOR_MANAGER_NAMES.sequenceReverse: return createAnimatorManagerSequence(node, ANIMATOR_MANAGER_NAMES.sequenceReverse);
        case ANIMATOR_MANAGER_NAMES["switch"]: return createAnimatorManagerSwitch(node, ANIMATOR_MANAGER_NAMES["switch"]);
        default: return createAnimatorManagerParallel(node, ANIMATOR_MANAGER_NAMES.parallel);
    }
};


;// CONCATENATED MODULE: ../../packages/animator/build/esm/internal/createAnimatorManager/index.js


;// CONCATENATED MODULE: ../../packages/animator/build/esm/internal/createAnimatorMachine/createAnimatorMachine.js



const createAnimatorMachine = (node, initialState) => {
    let state = initialState;
    const statesMap = {
        [ANIMATOR_STATES.exited]: {
            onActions: {
                [ANIMATOR_ACTIONS.enter]: ANIMATOR_STATES.entering,
                [ANIMATOR_ACTIONS.setup]: () => {
                    const settings = node.control.getSettings();
                    if (node.parent) {
                        const parentSettings = node.parent.control.getSettings();
                        switch (node.parent.state) {
                            case ANIMATOR_STATES.entering: {
                                if (parentSettings.combine || settings.merge) {
                                    node.parent.manager.enterChildren([node]);
                                }
                                break;
                            }
                            // If the parent has already entered, enter the incoming children whether
                            // they have "merge" setting or the parent is in "combine" setting.
                            case ANIMATOR_STATES.entered: {
                                node.parent.manager.enterChildren([node]);
                                break;
                            }
                        }
                    }
                    else {
                        const isActive = settings.active === undefined || settings.active;
                        if (isActive) {
                            return ANIMATOR_STATES.entering;
                        }
                    }
                }
            }
        },
        [ANIMATOR_STATES.entering]: {
            onEntry: {
                execute: () => {
                    const { combine } = node.control.getSettings();
                    const children = combine
                        ? Array.from(node.children)
                        : Array.from(node.children).filter(child => child.control.getSettings().merge);
                    node.manager.enterChildren(children);
                },
                schedule: () => {
                    const { duration } = node.control.getSettings();
                    return {
                        duration: (duration.delay + duration.enter) || 0,
                        action: ANIMATOR_ACTIONS.enterEnd
                    };
                }
            },
            onActions: {
                [ANIMATOR_ACTIONS.enterEnd]: ANIMATOR_STATES.entered,
                [ANIMATOR_ACTIONS.exit]: ANIMATOR_STATES.exiting,
                [ANIMATOR_ACTIONS.refresh]: () => {
                    const settings = node.control.getSettings();
                    const childrenExited = Array
                        .from(node.children)
                        .filter(child => child.state === ANIMATOR_STATES.exited);
                    if (settings.combine) {
                        node.manager.enterChildren(childrenExited);
                    }
                    else {
                        const childrenMerged = childrenExited
                            .filter(child => child.control.getSettings().merge);
                        node.manager.enterChildren(childrenMerged);
                    }
                }
            }
        },
        [ANIMATOR_STATES.entered]: {
            onEntry: {
                execute: () => {
                    const { combine } = node.control.getSettings();
                    if (combine) {
                        return;
                    }
                    const children = Array
                        .from(node.children)
                        .filter(child => !child.control.getSettings().merge);
                    node.manager.enterChildren(children);
                }
            },
            onActions: {
                [ANIMATOR_ACTIONS.exit]: ANIMATOR_STATES.exiting,
                [ANIMATOR_ACTIONS.refresh]: () => {
                    const childrenExited = Array
                        .from(node.children)
                        .filter(child => child.state === ANIMATOR_STATES.exited);
                    node.manager.enterChildren(childrenExited);
                }
            }
        },
        [ANIMATOR_STATES.exiting]: {
            onEntry: {
                execute: () => {
                    Array.from(node.children).forEach(child => {
                        if (child.state === ANIMATOR_STATES.entering || child.state === ANIMATOR_STATES.entered) {
                            child.send(ANIMATOR_ACTIONS.exit);
                        }
                        else if (child.state === ANIMATOR_STATES.exited) {
                            child.scheduler.stopAll();
                        }
                        // If the child is EXITING, it will go to EXITED soon.
                    });
                },
                schedule: () => ({
                    duration: node.control.getSettings().duration.exit || 0,
                    action: ANIMATOR_ACTIONS.exitEnd
                })
            },
            onActions: {
                [ANIMATOR_ACTIONS.exitEnd]: ANIMATOR_STATES.exited,
                [ANIMATOR_ACTIONS.enter]: ANIMATOR_STATES.entering
            }
        },
        '*': {
            onActions: {
                [ANIMATOR_ACTIONS.update]: () => {
                    var _a, _b;
                    const settings = node.control.getSettings();
                    if (settings.manager !== node.manager.name) {
                        (_b = (_a = node.manager).destroy) === null || _b === void 0 ? void 0 : _b.call(_a);
                        node.manager = createAnimatorManager(node, settings.manager);
                    }
                    if (!node.parent) {
                        const isActive = settings.active === true ||
                            settings.active === undefined;
                        if ((state === ANIMATOR_STATES.exited || state === ANIMATOR_STATES.exiting) && isActive) {
                            return ANIMATOR_STATES.entering;
                        }
                        else if ((state === ANIMATOR_STATES.entered || state === ANIMATOR_STATES.entering) && !isActive) {
                            return ANIMATOR_STATES.exiting;
                        }
                    }
                }
            }
        }
    };
    const transition = (newState) => {
        if (!newState || state === newState) {
            return;
        }
        state = newState;
        const { onEntry } = statesMap[state] || {};
        const { onTransition } = node.control.getSettings();
        node.scheduler.stopAll();
        if (onEntry === null || onEntry === void 0 ? void 0 : onEntry.execute) {
            onEntry.execute();
        }
        if (onEntry === null || onEntry === void 0 ? void 0 : onEntry.schedule) {
            const task = onEntry.schedule();
            node.scheduler.start(task.duration, () => send(task.action));
        }
        onTransition === null || onTransition === void 0 ? void 0 : onTransition(node);
        for (const subscriber of node.subscribers) {
            subscriber(node);
        }
    };
    const processAction = (procedure) => {
        if (procedure === undefined) {
            return;
        }
        if (typeof procedure === 'string') {
            transition(procedure);
        }
        else {
            const newState = procedure();
            if (newState) {
                transition(newState);
            }
        }
    };
    const getState = () => state;
    const send = (action) => {
        var _a, _b, _c, _d;
        // In non-browser environments, there are no transitions.
        if (!IS_BROWSER) {
            return;
        }
        processAction((_b = (_a = statesMap[state]) === null || _a === void 0 ? void 0 : _a.onActions) === null || _b === void 0 ? void 0 : _b[action]);
        processAction((_d = (_c = statesMap['*']) === null || _c === void 0 ? void 0 : _c.onActions) === null || _d === void 0 ? void 0 : _d[action]);
    };
    const machine = Object.freeze({ getState, send });
    return machine;
};


;// CONCATENATED MODULE: ../../packages/animator/build/esm/internal/createAnimatorMachine/index.js


;// CONCATENATED MODULE: ../../packages/animator/build/esm/createAnimatorSystem/createAnimatorSystem.js



const createAnimatorSystem = () => {
    const systemId = `s${Math.random()}`.replace('.', '');
    let nodeIdCounter = 0;
    let root;
    const createNode = (parent, control) => {
        const nodeId = `${systemId}-n${nodeIdCounter++}`;
        // The node object reference is passed around in multiple places with some
        // circular references, so this is an object base and later is modified
        // with specific readonly and writable properties.
        const node = { id: nodeId };
        const settings = control.getSettings();
        const machine = createAnimatorMachine(node, settings.initialState);
        const manager = createAnimatorManager(node, settings.manager);
        const nodeProps = {
            id: {
                value: nodeId,
                enumerable: true
            },
            control: {
                value: control,
                enumerable: true
            },
            parent: {
                value: parent,
                enumerable: true
            },
            children: {
                value: new Set(),
                enumerable: true
            },
            subscribers: {
                value: new Set(),
                enumerable: true
            },
            scheduler: {
                value: createTOScheduler(),
                enumerable: true
            },
            duration: {
                get: () => {
                    const { duration, combine } = node.control.getSettings();
                    const enter = combine
                        ? node.manager.getDurationEnter(Array.from(node.children))
                        : duration.enter || 0;
                    const exit = duration.exit || 0;
                    return { enter, exit };
                },
                enumerable: true
            },
            state: {
                get: () => machine.getState(),
                enumerable: true
            },
            subscribe: {
                value: (subscriber) => {
                    node.subscribers.add(subscriber);
                    subscriber(node);
                    return () => node.subscribers.delete(subscriber);
                },
                enumerable: true
            },
            unsubscribe: {
                value: (subscriber) => {
                    node.subscribers.delete(subscriber);
                },
                enumerable: true
            },
            send: {
                value: machine.send,
                enumerable: true
            },
            manager: {
                value: manager,
                enumerable: true,
                writable: true
            }
        };
        Object.defineProperties(node, nodeProps);
        if (parent) {
            parent.children.add(node);
        }
        return node;
    };
    const removeNode = (node) => {
        node.scheduler.stopAll();
        for (const child of node.children) {
            removeNode(child);
        }
        if (node.parent) {
            node.parent.children.delete(node);
        }
        node.children.clear();
        node.subscribers.clear();
    };
    const register = (parentNode, control) => {
        if (parentNode === undefined || parentNode === null) {
            if (root) {
                throw new Error('The root node must be unregistered before registering another root node.');
            }
            root = createNode(undefined, control);
            return root;
        }
        if (!root) {
            throw new Error('A root node needs to be registered first in the system before registering children nodes.');
        }
        return createNode(parentNode, control);
    };
    const unregister = (node) => {
        if (!root) {
            return;
        }
        removeNode(node);
        if (root.id === node.id) {
            root = undefined;
        }
    };
    // System object reference so it can have dynamic object properties setup later.
    const system = {};
    const systemProps = {
        id: {
            value: systemId,
            enumerable: true
        },
        root: {
            get: () => root,
            enumerable: true
        },
        register: {
            value: register,
            enumerable: true
        },
        unregister: {
            value: unregister,
            enumerable: true
        }
    };
    Object.defineProperties(system, systemProps);
    return system;
};


;// CONCATENATED MODULE: ../../packages/animator/build/esm/createAnimatorSystem/index.js


;// CONCATENATED MODULE: ../../packages/animator/build/esm/index.js




;// CONCATENATED MODULE: ../../packages/animated/build/esm/easing/easing.js
const pow = Math.pow;
const sqrt = Math.sqrt;
const sin = Math.sin;
const cos = Math.cos;
const PI = Math.PI;
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = (2 * PI) / 3;
const c5 = (2 * PI) / 4.5;
const bounceOut = (x) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) {
        return n1 * x * x;
    }
    else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    }
    else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    }
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
};
const easing = {
    linear: (x) => x,
    inQuad: (x) => {
        return x * x;
    },
    outQuad: (x) => {
        return 1 - (1 - x) * (1 - x);
    },
    inOutQuad: (x) => {
        return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    inCubic: (x) => {
        return x * x * x;
    },
    outCubic: (x) => {
        return 1 - pow(1 - x, 3);
    },
    inOutCubic: (x) => {
        return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    inQuart: (x) => {
        return x * x * x * x;
    },
    outQuart: (x) => {
        return 1 - pow(1 - x, 4);
    },
    inOutQuart: (x) => {
        return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    inQuint: (x) => {
        return x * x * x * x * x;
    },
    outQuint: (x) => {
        return 1 - pow(1 - x, 5);
    },
    inOutQuint: (x) => {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    inSine: (x) => {
        return 1 - cos((x * PI) / 2);
    },
    outSine: (x) => {
        return sin((x * PI) / 2);
    },
    inOutSine: (x) => {
        return -(cos(PI * x) - 1) / 2;
    },
    inExpo: (x) => {
        return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    outExpo: (x) => {
        return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    inOutExpo: (x) => {
        return x === 0
            ? 0
            : x === 1
                ? 1
                : x < 0.5
                    ? pow(2, 20 * x - 10) / 2
                    : (2 - pow(2, -20 * x + 10)) / 2;
    },
    inCirc: (x) => {
        return 1 - sqrt(1 - pow(x, 2));
    },
    outCirc: (x) => {
        return sqrt(1 - pow(x - 1, 2));
    },
    inOutCirc: (x) => {
        return x < 0.5
            ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
            : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    inBack: (x) => {
        return c3 * x * x * x - c1 * x * x;
    },
    outBack: (x) => {
        return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    inOutBack: (x) => {
        return x < 0.5
            ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
            : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    inElastic: (x) => {
        return x === 0
            ? 0
            : x === 1
                ? 1
                : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    outElastic: (x) => {
        return x === 0
            ? 0
            : x === 1
                ? 1
                : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    inOutElastic: (x) => {
        return x === 0
            ? 0
            : x === 1
                ? 1
                : x < 0.5
                    ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
                    : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
    },
    inBounce: (x) => {
        return 1 - bounceOut(1 - x);
    },
    outBounce: bounceOut,
    inOutBounce: (x) => {
        return x < 0.5
            ? (1 - bounceOut(1 - 2 * x)) / 2
            : (1 + bounceOut(2 * x - 1)) / 2;
    }
};


;// CONCATENATED MODULE: ../../packages/animated/build/esm/easing/index.js


;// CONCATENATED MODULE: ../../packages/animated/build/esm/createAnimation/createAnimation.js

const createAnimation = (props) => {
    const { duration: durationProvided, easing: easingName = 'outSine', direction = 'normal', onUpdate, onComplete, onCancel } = props;
    const ease = typeof easingName === 'function' ? easingName : easing[easingName];
    const duration = durationProvided * 1000; // seconds to ms
    let currentAnimationFrame = null;
    let start = window.performance.now();
    let slapsed = 0;
    const nextAnimation = (timestamp) => {
        if (!start) {
            start = timestamp;
        }
        slapsed = Math.max(timestamp - start, 0);
        if (direction === 'reverse') {
            slapsed = duration - slapsed;
        }
        const progress = Math.min(1, Math.max(0, ease(slapsed / duration)));
        const continueAnimation = direction === 'normal' ? slapsed < duration : slapsed > 0;
        onUpdate(progress);
        if (continueAnimation) {
            currentAnimationFrame = window.requestAnimationFrame(nextAnimation);
        }
        else {
            currentAnimationFrame = null;
            onComplete === null || onComplete === void 0 ? void 0 : onComplete();
        }
    };
    currentAnimationFrame = window.requestAnimationFrame(nextAnimation);
    const isPending = () => {
        return currentAnimationFrame !== null;
    };
    const cancel = () => {
        if (currentAnimationFrame !== null) {
            window.cancelAnimationFrame(currentAnimationFrame);
            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
        }
    };
    return { isPending, cancel };
};


;// CONCATENATED MODULE: ../../packages/animated/build/esm/createAnimation/index.js


;// CONCATENATED MODULE: ../../packages/animated/build/esm/index.js



;// CONCATENATED MODULE: ../../packages/bleeps/build/esm/constants.js
const BLEEPS_CATEGORIES = {
    background: 'background',
    transition: 'transition',
    interaction: 'interaction',
    notification: 'notification'
};

;// CONCATENATED MODULE: ../../packages/bleeps/build/esm/createBleep/createBleep.js

const createBleep = (props) => {
    var _a;
    if (!IS_BROWSER) {
        return null;
    }
    const { sources, preload = true, loop = false, volume = 1.0, fetchHeaders, masterGain } = props;
    let isBufferLoading = false;
    let isBufferError = false;
    let isBufferPlaying = false;
    let source = null;
    let buffer = null;
    let duration = 0;
    const context = (_a = props.context) !== null && _a !== void 0 ? _a : new window.AudioContext();
    const gain = context.createGain();
    const callersAccount = new Set();
    const fetchAudioBuffer = () => {
        if (buffer || isBufferLoading || isBufferError) {
            return;
        }
        if (!sources.length) {
            isBufferError = true;
            console.error('Every bleep must have at least one source with a valid audio file URL and type.');
            return;
        }
        const audioTest = new window.Audio();
        const source = sources.find(source => {
            // "webm" and "weba" file formats are not supported on Safari.
            if (IS_BROWSER_SAFARI && source.type.includes('audio/webm')) {
                return false;
            }
            const support = audioTest.canPlayType(source.type || '');
            return support === 'probably' || support === 'maybe';
        });
        if (!source) {
            isBufferError = true;
            console.error(`The bleep sources "${JSON.stringify(sources)}" are not supported on this navigator.`);
            return;
        }
        const { src, type } = source;
        isBufferLoading = true;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        window.fetch(src, {
            method: 'GET',
            headers: fetchHeaders
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Bleep source could not be fetched.');
            }
            return response;
        })
            .then(response => response.arrayBuffer())
            .then(audioArrayBuffer => context.decodeAudioData(audioArrayBuffer))
            .then(audioBuffer => {
            buffer = audioBuffer;
            duration = buffer.duration;
        })
            .catch(err => {
            isBufferError = true;
            console.error(`The bleep with source URL "${src}" and type "${type}" could not be used:`, err);
        })
            .then(() => (isBufferLoading = false));
    };
    const getDuration = () => duration;
    const getIsPlaying = () => isBufferPlaying;
    const getIsLoaded = () => !!buffer;
    const play = (caller) => {
        if (!buffer) {
            fetchAudioBuffer();
            return;
        }
        if (loop && isBufferPlaying) {
            return;
        }
        // If the user has not yet interacted with the browser, audio is locked
        // so try to unlock it.
        if (context.state === 'suspended') {
            let isResumeError = false;
            context.resume().catch((err) => {
                isResumeError = true;
                console.error(`The bleep audio context with sources "${JSON.stringify(sources)}" could not be resumed to be played:`, err);
            });
            if (isResumeError) {
                return;
            }
        }
        if (caller) {
            callersAccount.add(caller);
        }
        isBufferPlaying = true;
        if (source) {
            source.stop();
            source.disconnect(gain);
            source = null;
        }
        source = context.createBufferSource();
        source.buffer = buffer;
        source.loop = loop;
        if (loop) {
            source.loopStart = 0;
            source.loopEnd = buffer.duration;
        }
        source.connect(gain);
        source.start();
        source.onended = () => {
            isBufferPlaying = false;
        };
    };
    const stop = (caller) => {
        if (!buffer) {
            return;
        }
        if (caller) {
            callersAccount.delete(caller);
        }
        const canStop = loop ? !callersAccount.size : true;
        if (canStop) {
            if (source) {
                source.stop();
                source.disconnect(gain);
                source = null;
            }
            isBufferPlaying = false;
        }
    };
    const load = () => {
        fetchAudioBuffer();
    };
    const unload = () => {
        if (source) {
            source.stop();
            source.disconnect(gain);
            source = null;
        }
        // Remove audio buffer from memory.
        buffer = null;
        isBufferLoading = false;
        isBufferError = false;
    };
    const update = (props) => {
        if (props.volume !== undefined) {
            const bleepVolume = Math.max(0, Math.min(1, props.volume));
            gain.gain.setValueAtTime(bleepVolume, context.currentTime);
        }
    };
    const bleep = {};
    const bleepAPI = {
        duration: {
            get: getDuration,
            enumerable: true
        },
        isPlaying: {
            get: getIsPlaying,
            enumerable: true
        },
        isLoaded: {
            get: getIsLoaded,
            enumerable: true
        },
        play: {
            value: play,
            enumerable: true
        },
        stop: {
            value: stop,
            enumerable: true
        },
        load: {
            value: load,
            enumerable: true
        },
        unload: {
            value: unload,
            enumerable: true
        },
        update: {
            value: update,
            enumerable: true
        }
    };
    Object.defineProperties(bleep, bleepAPI);
    // If there is a master GainNode provided, subscribe to it so a global volume
    // can be set from there. Otherwise, subscribe to the context directly.
    if (masterGain) {
        gain.connect(masterGain);
    }
    else {
        gain.connect(context.destination);
    }
    // Set initial bleep volume.
    update({ volume });
    if (preload) {
        fetchAudioBuffer();
    }
    return bleep;
};


;// CONCATENATED MODULE: ../../packages/bleeps/build/esm/createBleep/index.js


;// CONCATENATED MODULE: ../../packages/bleeps/build/esm/createBleepsManager/createBleepsManager.js


const createBleepsManager = (props) => {
    var _a, _b;
    // In non-browser environments, the bleeps manager is still created but without
    // actual functionalities.
    const context = IS_BROWSER ? new window.AudioContext() : null;
    const masterGain = IS_BROWSER ? context.createGain() : null;
    const bleeps = {};
    const bleepNames = Object.keys(props.bleeps);
    bleepNames.forEach(bleepName => {
        var _a;
        const bleepProps = props.bleeps[bleepName];
        const categoryProps = bleepProps.category
            ? (_a = props.categories) === null || _a === void 0 ? void 0 : _a[bleepProps.category]
            : null;
        const generalProps = {
            ...props.common,
            ...categoryProps
        };
        bleeps[bleepName] = generalProps.disabled
            ? null
            : createBleep({
                ...generalProps,
                ...bleepProps,
                context,
                masterGain
            });
    });
    if (IS_BROWSER) {
        masterGain.connect(context.destination);
        // Set initial master gain value.
        const globalVolume = Math.max(0, Math.min(1, (_b = (_a = props === null || props === void 0 ? void 0 : props.master) === null || _a === void 0 ? void 0 : _a.volume) !== null && _b !== void 0 ? _b : 1));
        masterGain.gain.setValueAtTime(globalVolume, context.currentTime);
    }
    const unload = () => {
        bleepNames.forEach(bleepName => {
            var _a;
            (_a = bleeps[bleepName]) === null || _a === void 0 ? void 0 : _a.unload();
        });
    };
    const update = (newProps) => {
        // Global settings.
        var _a;
        if (((_a = newProps.master) === null || _a === void 0 ? void 0 : _a.volume) !== undefined) {
            const globalVolume = Math.max(0, Math.min(1, newProps.master.volume));
            masterGain.gain.setValueAtTime(globalVolume, context.currentTime);
        }
        // Bleep settings.
        bleepNames.forEach(bleepName => {
            var _a, _b, _c, _d;
            const baseBleepProps = props.bleeps[bleepName];
            const category = baseBleepProps === null || baseBleepProps === void 0 ? void 0 : baseBleepProps.category;
            const newCategoryProps = category
                ? (_a = newProps.categories) === null || _a === void 0 ? void 0 : _a[category]
                : null;
            const generalProps = {
                ...newProps.common,
                ...newCategoryProps
            };
            if (generalProps.disabled) {
                (_b = bleeps[bleepName]) === null || _b === void 0 ? void 0 : _b.unload();
                bleeps[bleepName] = null;
            }
            else {
                if (bleeps[bleepName]) {
                    (_c = bleeps[bleepName]) === null || _c === void 0 ? void 0 : _c.update({
                        ...generalProps,
                        ...(_d = newProps.bleeps) === null || _d === void 0 ? void 0 : _d[bleepName]
                    });
                }
                else {
                    bleeps[bleepName] = createBleep({
                        ...generalProps,
                        ...baseBleepProps,
                        context,
                        masterGain
                    });
                }
            }
        });
    };
    return Object.freeze({ bleeps, unload, update });
};


;// CONCATENATED MODULE: ../../packages/bleeps/build/esm/createBleepsManager/index.js


;// CONCATENATED MODULE: ../../packages/bleeps/build/esm/index.js





// EXTERNAL MODULE: external "motion"
var external_motion_ = __webpack_require__(3086);
;// CONCATENATED MODULE: ../../packages/text/build/esm/internal/walkTextNodes/walkTextNodes.js
const walkTextNodes = (node, callback) => {
    Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
            callback(child);
        }
        else if (child.nodeType === Node.ELEMENT_NODE) {
            walkTextNodes(child, callback);
        }
    });
};


;// CONCATENATED MODULE: ../../packages/text/build/esm/internal/setTextNodesContent/setTextNodesContent.js
const setTextNodesContent = (textNodes, texts, contentLength) => {
    let markerLength = 0;
    for (let index = 0; index < textNodes.length; index++) {
        const textNode = textNodes[index];
        const text = texts[index];
        const newMarkerLength = markerLength + text.length;
        if (newMarkerLength <= contentLength) {
            if (textNode.textContent !== text) {
                textNode.textContent = text;
            }
        }
        else if (markerLength <= contentLength) {
            const currentTextNodeLengthPortion = contentLength - markerLength;
            const currentTextNodeText = text.substring(0, currentTextNodeLengthPortion);
            if (textNode.textContent !== currentTextNodeText) {
                textNode.textContent = currentTextNodeText;
            }
        }
        else {
            if (textNode.textContent !== '') {
                textNode.textContent = '';
            }
        }
        markerLength = newMarkerLength;
    }
};


;// CONCATENATED MODULE: ../../packages/text/build/esm/transitionTextSequence/transitionTextSequence.js




const transitionTextSequence = (props) => {
    const { rootElement, contentElement, duration, easing = 'linear', isEntering = true, hideOnExited = true, hideOnEntered } = props;
    // If no valid elements are provided, return an void animation for type safety.
    if (!rootElement || !contentElement) {
        return {
            isPending: () => false,
            cancel: () => { }
        };
    }
    const cloneElement = contentElement.cloneNode(true);
    Object.assign(cloneElement.style, {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        visibility: 'visible',
        opacity: 1
    });
    const blinkElement = document.createElement('span');
    blinkElement.classList.add('arwes-text__blink');
    blinkElement.innerHTML = '&#9614;';
    Object.assign(blinkElement.style, {
        position: 'relative',
        display: 'inline-block',
        width: 0,
        height: 0,
        lineHeight: '0',
        color: 'inherit'
    });
    const textNodes = [];
    const texts = [];
    walkTextNodes(cloneElement, child => {
        textNodes.push(child);
        texts.push(child.textContent || '');
        if (isEntering) {
            child.textContent = '';
        }
    });
    const length = texts.join('').length;
    rootElement.appendChild(cloneElement);
    cloneElement.appendChild(blinkElement);
    contentElement.style.visibility = 'hidden';
    const blinkAnimation = (0,external_motion_.animate)(blinkElement, { color: ['transparent', 'inherit', 'transparent'] }, { duration: 0.1, easing: 'steps(2, end)', repeat: Infinity });
    return createAnimation({
        duration,
        easing,
        direction: isEntering ? 'normal' : 'reverse',
        onUpdate: progress => {
            const newLength = Math.round(progress * length);
            setTextNodesContent(textNodes, texts, newLength);
        },
        onComplete: () => {
            contentElement.style.visibility = (isEntering && hideOnEntered) || (!isEntering && hideOnExited)
                ? 'hidden'
                : 'visible';
            cloneElement.remove();
            blinkAnimation.cancel();
        },
        onCancel: () => {
            contentElement.style.visibility = '';
            cloneElement.remove();
            blinkAnimation.cancel();
        }
    });
};


;// CONCATENATED MODULE: ../../packages/text/build/esm/transitionTextSequence/index.js


;// CONCATENATED MODULE: ../../packages/text/build/esm/transitionTextDecipher/transitionTextDecipher.js




const LETTERS = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ>!·$%&/()=?¿≤|@#';
const transitionTextDecipher = (props) => {
    const { rootElement, contentElement, duration, easing = 'linear', isEntering = true, hideOnExited = true, hideOnEntered } = props;
    // If no valid elements are provided, return an void animation for type safety.
    if (!rootElement || !contentElement) {
        return {
            isPending: () => false,
            cancel: () => { }
        };
    }
    const cloneElement = contentElement.cloneNode(true);
    Object.assign(cloneElement.style, {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        visibility: 'visible',
        opacity: 1
    });
    const textNodes = [];
    const textsReal = [];
    walkTextNodes(cloneElement, child => {
        textNodes.push(child);
        textsReal.push(child.textContent || '');
    });
    const length = textsReal.join('').length;
    // A list of all the characters indexes in random positions.
    const indexes = randomizeList(Array(length).fill(null).map((_, i) => i));
    // A record of all characters indexes with `true` to know if their character
    // is now deciphered/visible.
    const deciphered = {};
    rootElement.appendChild(cloneElement);
    contentElement.style.visibility = 'hidden';
    return createAnimation({
        duration,
        easing,
        direction: isEntering ? 'normal' : 'reverse',
        onUpdate: progress => {
            // When entering, the animation decipher characters over time.
            // When exiting, the animation will cipher characters over time.
            const newPositionsLength = Math.round(length * progress);
            for (let index = 0; index < length; index++) {
                deciphered[indexes[index]] = index < newPositionsLength;
            }
            const textsCurrent = textsReal.map(text => text
                .split('')
                .map((char, index) => {
                if (char === ' ')
                    return ' ';
                if (deciphered[index])
                    return char;
                return LETTERS[Math.round(Math.random() * (LETTERS.length - 1))];
            })
                .join(''));
            setTextNodesContent(textNodes, textsCurrent, length);
        },
        onComplete: () => {
            contentElement.style.visibility = (isEntering && hideOnEntered) || (!isEntering && hideOnExited)
                ? 'hidden'
                : 'visible';
            cloneElement.remove();
        },
        onCancel: () => {
            contentElement.style.visibility = '';
            cloneElement.remove();
        }
    });
};


;// CONCATENATED MODULE: ../../packages/text/build/esm/transitionTextDecipher/index.js


;// CONCATENATED MODULE: ../../packages/text/build/esm/getTransitionTextDuration/getTransitionTextDuration.js
const getTransitionTextDuration = (props) => {
    const { length, maxDuration = 4, cps = 400 } = props;
    // The time it will take to add/remove a character per frame multiplied by
    // the total characters length.
    const realDuration = ((1000 / cps) * length) / 1000;
    return Math.min(realDuration, maxDuration);
};


;// CONCATENATED MODULE: ../../packages/text/build/esm/getTransitionTextDuration/index.js


;// CONCATENATED MODULE: ../../packages/text/build/esm/index.js





;// CONCATENATED MODULE: ../../packages/standalone/build/esm/index.js










// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../packages/react-tools/build/esm/memo/memo.js

const memo = (component, comparator) => {
    return (0,external_react_.memo)(component, comparator);
};


;// CONCATENATED MODULE: ../../packages/react-tools/build/esm/memo/index.js


;// CONCATENATED MODULE: ../../packages/react-tools/build/esm/mergeRefs/mergeRefs.js
const mergeRefs = (...refs) => {
    return (value) => {
        refs.filter(Boolean).forEach(ref => {
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref && typeof ref === 'object') {
                ref.current = value;
            }
        });
    };
};


;// CONCATENATED MODULE: ../../packages/react-tools/build/esm/mergeRefs/index.js


;// CONCATENATED MODULE: ../../packages/react-tools/build/esm/index.js



;// CONCATENATED MODULE: ../../packages/react-styles/build/esm/constants.js
const constants_STYLES_EMPTY = Object.freeze({});

;// CONCATENATED MODULE: ../../packages/react-styles/build/esm/useStyles/useStyles.js



const useStyles = (stylesList, props, dependencies) => {
    const [createBaseStyles, createUserStyles] = stylesList;
    const userStylesType = typeof createUserStyles === 'boolean'
        ? 'boolean'
        : typeof (createUserStyles || undefined);
    return useMemo(() => {
        if (typeof createUserStyles === 'boolean') {
            return STYLES_EMPTY;
        }
        const baseStyles = createBaseStyles(props);
        if (typeof createUserStyles === 'function') {
            const userStyles = createUserStyles(props);
            return mergeThemeStyles(baseStyles, userStyles);
        }
        if (typeof createUserStyles === 'object' && createUserStyles !== null) {
            return mergeThemeStyles(baseStyles, createUserStyles);
        }
        return baseStyles;
    }, [userStylesType, ...dependencies]);
};


;// CONCATENATED MODULE: ../../packages/react-styles/build/esm/useStyles/index.js


// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ../../packages/react-styles/build/esm/useThemeStyles/useThemeStyles.js




const useThemeStyles = (styleCreators, props, dependencies) => {
    const [createBaseStyles, createUserStyles] = styleCreators;
    const createUserStylesType = typeof createUserStyles === 'boolean'
        ? 'boolean'
        : typeof (createUserStyles || undefined);
    const theme = useTheme();
    return useMemo(() => {
        if (createUserStyles === false) {
            return STYLES_EMPTY;
        }
        const baseStyles = createBaseStyles(theme, props);
        if (typeof createUserStyles === 'function') {
            const userStyles = createUserStyles(theme, props);
            return mergeThemeStyles(baseStyles, userStyles);
        }
        if (typeof createUserStyles === 'object' && createUserStyles !== null) {
            return mergeThemeStyles(baseStyles, createUserStyles);
        }
        return baseStyles;
    }, [createUserStylesType, theme, ...dependencies]);
};


;// CONCATENATED MODULE: ../../packages/react-styles/build/esm/useThemeStyles/index.js


;// CONCATENATED MODULE: ../../packages/react-styles/build/esm/index.js





;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/internal/AnimatorContext/AnimatorContext.js

const AnimatorContext = (0,external_react_.createContext)(undefined);


;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/internal/AnimatorContext/index.js


;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/internal/AnimatorGeneralContext/AnimatorGeneralContext.js

const AnimatorGeneralContext_AnimatorGeneralContext = (0,external_react_.createContext)(undefined);


;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/internal/AnimatorGeneralContext/index.js


;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/Animator/Animator.js




const setNodeRefValue = (nodeRef, node) => {
    if (typeof nodeRef === 'function') {
        nodeRef(node);
    }
    else if (nodeRef) {
        nodeRef.current = node;
    }
};
const Animator = (props) => {
    // It is responsibility of the <Animator> to register, setup, update, and unregister
    // the new node every time there is a change in it, since they happen on UI events.
    const { root, disabled, dismissed, unmountOnExited, unmountOnEntered, unmountOnDisabled, checkToSendAction, checkToSend, nodeRef, children, ...settings } = props;
    const parentAnimatorInterface = (0,external_react_.useContext)(AnimatorContext);
    const animatorGeneralInterface = (0,external_react_.useContext)(AnimatorGeneralContext_AnimatorGeneralContext);
    const settingsRef = (0,external_react_.useRef)(settings);
    const dynamicSettingsRef = (0,external_react_.useRef)(null);
    const foreignRef = (0,external_react_.useRef)(null);
    const prevAnimatorRef = (0,external_react_.useRef)(undefined);
    const isFirstRender1Ref = (0,external_react_.useRef)(true);
    const isFirstRender2Ref = (0,external_react_.useRef)(true);
    settingsRef.current = settings;
    const animatorGeneralSettings = animatorGeneralInterface === null || animatorGeneralInterface === void 0 ? void 0 : animatorGeneralInterface.getSettings();
    const isRoot = !!root || !parentAnimatorInterface;
    const isDismissed = dismissed !== undefined ? !!dismissed : !!(animatorGeneralSettings === null || animatorGeneralSettings === void 0 ? void 0 : animatorGeneralSettings.dismissed);
    const isDisabled = disabled !== undefined ? !!disabled : !!(animatorGeneralSettings === null || animatorGeneralSettings === void 0 ? void 0 : animatorGeneralSettings.disabled);
    const animatorInterface = (0,external_react_.useMemo)(() => {
        if (prevAnimatorRef.current) {
            prevAnimatorRef.current.system.unregister(prevAnimatorRef.current.node);
        }
        if (isDismissed) {
            setNodeRefValue(nodeRef, null);
            return parentAnimatorInterface;
        }
        if (isDisabled) {
            setNodeRefValue(nodeRef, null);
            return undefined;
        }
        const system = isRoot
            ? createAnimatorSystem()
            : parentAnimatorInterface.system;
        const getSettings = () => {
            var _a, _b;
            const animatorGeneralSettings = animatorGeneralInterface === null || animatorGeneralInterface === void 0 ? void 0 : animatorGeneralInterface.getSettings();
            return {
                ...ANIMATOR_DEFAULT_SETTINGS,
                ...animatorGeneralSettings,
                ...settingsRef.current,
                ...dynamicSettingsRef.current,
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                duration: {
                    ...ANIMATOR_DEFAULT_SETTINGS.duration,
                    ...animatorGeneralSettings === null || animatorGeneralSettings === void 0 ? void 0 : animatorGeneralSettings.duration,
                    ...(_a = settingsRef.current) === null || _a === void 0 ? void 0 : _a.duration,
                    ...(_b = dynamicSettingsRef.current) === null || _b === void 0 ? void 0 : _b.duration
                },
                onTransition: (node) => {
                    var _a, _b, _c, _d;
                    (_b = (_a = settingsRef.current) === null || _a === void 0 ? void 0 : _a.onTransition) === null || _b === void 0 ? void 0 : _b.call(_a, node);
                    (_d = (_c = dynamicSettingsRef.current) === null || _c === void 0 ? void 0 : _c.onTransition) === null || _d === void 0 ? void 0 : _d.call(_c, node);
                }
            };
        };
        const setDynamicSettings = (newSettings) => {
            dynamicSettingsRef.current = newSettings;
        };
        const getDynamicSettings = () => {
            return dynamicSettingsRef.current;
        };
        const getForeignRef = () => {
            return foreignRef.current;
        };
        const setForeignRef = (ref) => {
            foreignRef.current = ref;
        };
        const control = Object.freeze({
            getSettings,
            setDynamicSettings,
            getDynamicSettings,
            getForeignRef,
            setForeignRef
        });
        const node = isRoot
            ? system.register(undefined, control)
            : system.register(parentAnimatorInterface.node, control);
        setNodeRefValue(nodeRef, node);
        return Object.freeze({ system, node });
    }, [parentAnimatorInterface, isRoot, isDisabled, isDismissed]);
    prevAnimatorRef.current = animatorInterface;
    const [isEnabledToUnmount, setIsEnabledToUnmount] = (0,external_react_.useState)(() => (unmountOnExited && (animatorInterface === null || animatorInterface === void 0 ? void 0 : animatorInterface.node.state) === ANIMATOR_STATES.exited) ||
        (unmountOnEntered && (animatorInterface === null || animatorInterface === void 0 ? void 0 : animatorInterface.node.state) === ANIMATOR_STATES.entered) ||
        (unmountOnDisabled && isDisabled));
    (0,external_react_.useEffect)(() => {
        return () => {
            if (prevAnimatorRef.current) {
                prevAnimatorRef.current.system.unregister(prevAnimatorRef.current.node);
            }
        };
    }, []);
    // Setup on mounted and in case animator is disabled and then re-enabled,
    // trigger the setup once is created again.
    (0,external_react_.useEffect)(() => {
        animatorInterface === null || animatorInterface === void 0 ? void 0 : animatorInterface.node.send(ANIMATOR_ACTIONS.setup);
    }, [!!animatorInterface]);
    // Trigger updates on animator only after first render, since in the first render
    // the setup event would take care of the initial data procedore.
    (0,external_react_.useEffect)(() => {
        if (isFirstRender1Ref.current) {
            isFirstRender1Ref.current = false;
            return;
        }
        animatorInterface === null || animatorInterface === void 0 ? void 0 : animatorInterface.node.send(ANIMATOR_ACTIONS.update);
    }, [settings.active, settings.manager, settings.merge, settings.combine]);
    (0,external_react_.useEffect)(() => {
        if (animatorInterface) {
            const cancelSubscription = animatorInterface.node.subscribe(node => {
                setIsEnabledToUnmount((unmountOnExited && node.state === ANIMATOR_STATES.exited) ||
                    (unmountOnEntered && node.state === ANIMATOR_STATES.entered));
            });
            return () => cancelSubscription();
        }
        else {
            setIsEnabledToUnmount(unmountOnDisabled);
        }
    }, [animatorInterface, unmountOnExited, unmountOnEntered, unmountOnDisabled]);
    (0,external_react_.useEffect)(() => {
        if (isFirstRender2Ref.current) {
            isFirstRender2Ref.current = false;
            return;
        }
        if (animatorInterface) {
            animatorInterface.node.send(checkToSendAction !== null && checkToSendAction !== void 0 ? checkToSendAction : ANIMATOR_ACTIONS.refresh);
        }
    }, checkToSend !== null && checkToSend !== void 0 ? checkToSend : []);
    return (0,external_react_.createElement)(AnimatorContext.Provider, { value: animatorInterface }, isEnabledToUnmount ? null : children);
};


;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/Animator/index.js


// TODO: Optimize props comparision.
const Animator_Animator = memo(Animator);



;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/useAnimator/useAnimator.js


const useAnimator = () => {
    return (0,external_react_.useContext)(AnimatorContext);
};


;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/useAnimator/index.js


;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/AnimatorGeneralProvider/AnimatorGeneralProvider.js


const AnimatorGeneralProvider = (props) => {
    const { children, ...animatorGeneralSettings } = props;
    const animatorGeneralSettingsRef = (0,external_react_.useRef)(animatorGeneralSettings);
    animatorGeneralSettingsRef.current = animatorGeneralSettings;
    const animatorGeneralInterface = (0,external_react_.useMemo)(() => {
        // TODO: Merge with existing parent general animator settings.
        const getSettings = () => animatorGeneralSettingsRef.current;
        return Object.freeze({ getSettings });
    }, []);
    // TODO: Shouldn't there be a dependencies check for updates?
    return (0,external_react_.createElement)(AnimatorGeneralContext_AnimatorGeneralContext.Provider, { value: animatorGeneralInterface }, children);
};


;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/AnimatorGeneralProvider/index.js


// TODO: Optimize props comparision.
const AnimatorGeneralProvider_AnimatorGeneralProvider = memo(AnimatorGeneralProvider);



;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/useAnimatorGeneral/useAnimatorGeneral.js


const useAnimatorGeneral = () => {
    return useContext(AnimatorGeneralContext);
};


;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/useAnimatorGeneral/index.js


;// CONCATENATED MODULE: ../../packages/react-animator/build/esm/index.js






;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/constants.js
const constants_ANIMATED_ANIMATIONS_EMPTY = Object.freeze({});

;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/internal/formatAnimatedCSSPropsShorthands/formatAnimatedCSSPropsShorthands.js
const propsTransformDistances = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ'
};
const propsTransformAngles = {
    rotate: 'rotate',
    rotateX: 'rotateX',
    rotateY: 'rotateY',
    rotateZ: 'rotateZ',
    skew: 'skew',
    skewX: 'skewX',
    skewY: 'skewY'
};
const propsTransformUnitless = {
    scale: 'scale',
    scaleX: 'scaleX',
    scaleY: 'scaleY',
    scaleZ: 'scaleZ'
};
const formatAnimatedCSSPropsShorthands = (cssPropertiesEnhanced) => {
    if (!cssPropertiesEnhanced) {
        return;
    }
    const cssProperties = {};
    let transform = '';
    Object.keys(cssPropertiesEnhanced).forEach(key => {
        const raw = cssPropertiesEnhanced[key];
        if (propsTransformDistances[key]) {
            const name = propsTransformDistances[key];
            const value = Number.isFinite(raw) ? `${raw}px` : String(raw);
            transform += ` ${name}(${value})`;
        }
        else if (propsTransformAngles[key]) {
            const name = propsTransformAngles[key];
            const value = Number.isFinite(raw) ? `${raw}deg` : String(raw);
            transform += ` ${name}(${value})`;
        }
        else if (propsTransformUnitless[key]) {
            const name = propsTransformUnitless[key];
            transform += ` ${name}(${raw})`;
        }
        else {
            cssProperties[key] = raw;
        }
    });
    transform = transform.trim();
    if (transform) {
        cssProperties.transform = transform;
    }
    return cssProperties;
};


;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/internal/formatAnimatedCSSPropsShorthands/index.js


;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/Animated/Animated.js






const Animated = (props) => {
    const { as: asProvided, animated, className, style, elementRef: externalElementRef, hideOnExited = true, hideOnEntered, ...otherProps } = props;
    const animator = useAnimator();
    const as = (0,external_react_.useMemo)(() => asProvided || 'div', []);
    const elementRef = (0,external_react_.useRef)(null);
    const animatedSettingsRef = (0,external_react_.useRef)([]);
    const animationControlsRef = (0,external_react_.useRef)([]);
    const [isExited, setIsExited] = (0,external_react_.useState)(() => (animator === null || animator === void 0 ? void 0 : animator.node.state) === ANIMATOR_STATES.exited);
    const [isEntered, setIsEntered] = (0,external_react_.useState)(() => (animator === null || animator === void 0 ? void 0 : animator.node.state) === ANIMATOR_STATES.entered);
    const animatedSettingsListReceived = Array.isArray(animated) ? animated : [animated];
    const animatedSettingsList = animatedSettingsListReceived.filter(Boolean);
    // The animations list is passed as a reference so the Animator node subscription
    // and its respective functionalities are only initialized once for performance.
    animatedSettingsRef.current = animatedSettingsList;
    (0,external_react_.useEffect)(() => {
        if (!animator) {
            return;
        }
        const cancelSubscription = animator.node.subscribe(node => {
            setIsExited(node.state === ANIMATOR_STATES.exited);
            setIsEntered(node.state === ANIMATOR_STATES.entered);
            animationControlsRef.current = [];
            const element = elementRef.current;
            // Weird case if the element is removed and the subscription is not cancelled.
            if (!element) {
                return;
            }
            const settingsList = animatedSettingsRef.current;
            const { duration } = node;
            const durationTransition = node.state === ANIMATOR_STATES.entering || node.state === ANIMATOR_STATES.entered
                ? duration.enter
                : duration.exit;
            settingsList
                .map(settingsItem => { var _a; return (_a = settingsItem.transitions) === null || _a === void 0 ? void 0 : _a[node.state]; })
                .filter(Boolean)
                .map(transitions => Array.isArray(transitions) ? transitions : [transitions])
                .flat(1)
                .forEach(transition => {
                if (typeof transition === 'function') {
                    const control = transition({
                        element,
                        duration: durationTransition
                    });
                    if (control) {
                        animationControlsRef.current.push(control);
                    }
                }
                else {
                    const { duration, delay, easing, options, ...definition } = transition;
                    const control = (0,external_motion_.animate)(element, definition, { duration: duration || durationTransition, delay, easing, ...options });
                    animationControlsRef.current.push(control);
                }
            });
        });
        return () => {
            cancelSubscription();
            animationControlsRef.current.forEach(control => control.stop());
        };
    }, [animator]);
    let initialAttributes;
    if (animator) {
        // TODO: Fix type.
        initialAttributes = animatedSettingsList
            .map(item => item === null || item === void 0 ? void 0 : item.initialAttributes)
            .reduce((total, item) => ({ ...total, ...item }), {});
    }
    let dynamicStyles;
    if (animator) {
        dynamicStyles = animatedSettingsList
            .map(item => formatAnimatedCSSPropsShorthands(item === null || item === void 0 ? void 0 : item.initialStyle))
            .reduce((total, item) => ({ ...total, ...item }), {});
    }
    return (0,external_react_.createElement)(as, {
        ...otherProps,
        ...initialAttributes,
        className,
        style: {
            ...style,
            ...dynamicStyles,
            visibility: animator && ((hideOnExited && isExited) || (hideOnEntered && isEntered)) ? 'hidden' : 'visible'
        },
        ref: mergeRefs(externalElementRef, elementRef)
    });
};


;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/Animated/index.js


const Animated_Animated = (0,external_react_.memo)((0,external_react_.forwardRef)((props, forwardedRef) => ((0,external_react_.createElement)(Animated, {
    elementRef: forwardedRef,
    ...props
}))));



;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/AnimatedX/AnimatedX.js




const AnimatedX = (props) => {
    const { as: asProvided, state: animatedState, animated, className, style, elementRef: externalElementRef, ...otherProps } = props;
    const hasState = animatedState !== undefined && animatedState !== null;
    const as = (0,external_react_.useMemo)(() => asProvided || 'div', []);
    const elementRef = (0,external_react_.useRef)(null);
    const animatedSettingsRef = (0,external_react_.useRef)([]);
    const animationControlsRef = (0,external_react_.useRef)([]);
    const animatedSettingsListReceived = Array.isArray(animated) ? animated : [animated];
    const animatedSettingsList = animatedSettingsListReceived.filter(Boolean);
    // The animations list is passed as a reference so the Animator node subscription
    // and its respective functionalities are only initialized once for performance.
    animatedSettingsRef.current = animatedSettingsList;
    (0,external_react_.useEffect)(() => {
        if (!hasState) {
            return;
        }
        animationControlsRef.current = [];
        const element = elementRef.current;
        const settingsList = animatedSettingsRef.current;
        // Weird case if the element is removed and the subscription is not cancelled.
        if (!element) {
            return;
        }
        settingsList
            .map(settingsItem => { var _a; return (_a = settingsItem.transitions) === null || _a === void 0 ? void 0 : _a[animatedState]; })
            .filter(Boolean)
            .map(transitions => Array.isArray(transitions) ? transitions : [transitions])
            .flat(1)
            .forEach(transition => {
            if (typeof transition === 'function') {
                const control = transition({ element, duration: 0 });
                if (control) {
                    animationControlsRef.current.push(control);
                }
            }
            else {
                const { duration, delay, easing, options, ...definition } = transition;
                const control = (0,external_motion_.animate)(element, definition, { duration, delay, easing, ...options });
                animationControlsRef.current.push(control);
            }
        });
        return () => {
            animationControlsRef.current.forEach(control => control.stop());
        };
    }, [hasState, animatedState]);
    let initialAttributes;
    if (hasState) {
        // TODO: Fix type.
        initialAttributes = animatedSettingsList
            .map(item => item === null || item === void 0 ? void 0 : item.initialAttributes)
            .reduce((total, item) => ({ ...total, ...item }), {});
    }
    let dynamicStyles;
    if (hasState) {
        dynamicStyles = animatedSettingsList
            .map(item => formatAnimatedCSSPropsShorthands(item === null || item === void 0 ? void 0 : item.initialStyle))
            .reduce((total, item) => ({ ...total, ...item }), {});
    }
    return (0,external_react_.createElement)(as, {
        ...otherProps,
        ...initialAttributes,
        className,
        style: {
            ...style,
            ...dynamicStyles
        },
        ref: mergeRefs(externalElementRef, elementRef)
    });
};


;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/AnimatedX/index.js


const AnimatedX_AnimatedX = (0,external_react_.memo)((0,external_react_.forwardRef)((props, forwardedRef) => ((0,external_react_.createElement)(AnimatedX, {
    elementRef: forwardedRef,
    ...props
}))));



;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/useAnimatedAnimations/useAnimatedAnimations.js


const useAnimatedAnimations = (animationsList, props, dependencies) => {
    const [createBaseAnimatedAnimations, createUserAnimatedAnimations] = animationsList;
    const createUserAnimatedAnimationsType = typeof createUserAnimatedAnimations === 'boolean'
        ? 'boolean'
        : typeof (createUserAnimatedAnimations || undefined);
    return useMemo(() => {
        if (createUserAnimatedAnimations === false) {
            return ANIMATED_ANIMATIONS_EMPTY;
        }
        if (createUserAnimatedAnimations) {
            const userAnimatedAnimations = typeof createUserAnimatedAnimations === 'function'
                ? createUserAnimatedAnimations(props)
                : createUserAnimatedAnimations;
            return {
                ...createBaseAnimatedAnimations(props),
                ...userAnimatedAnimations
            };
        }
        return createBaseAnimatedAnimations(props);
    }, [createUserAnimatedAnimationsType, ...dependencies]);
};


;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/useAnimatedAnimations/index.js


;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/animations/animations.js

const aa = (prop, from, to, back) => ({
    transitions: {
        entering: { [prop]: [from, to] },
        exiting: { [prop]: [to, back !== null && back !== void 0 ? back : from] }
    }
});
const aaOpacity = () => aa('opacity', 0, 1);
const aaVisibility = () => {
    return {
        transitions: {
            entering: ({ element, duration }) => (0,external_motion_.timeline)([
                [element, { opacity: [0, 1] }],
                [element, { opacity: [1, 0.7] }],
                [element, { opacity: [0.7, 1] }]
            ], { duration }),
            exiting: ({ element, duration }) => (0,external_motion_.timeline)([
                [element, { opacity: [1, 0] }],
                [element, { opacity: [0, 0.3] }],
                [element, { opacity: [0.3, 0] }]
            ], { duration })
        }
    };
};


;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/animations/index.js


;// CONCATENATED MODULE: ../../packages/react-animated/build/esm/index.js







;// CONCATENATED MODULE: ../../packages/react-bleeps/build/esm/internal/BleepsManagerContext.js

const BleepsManagerContext = (0,external_react_.createContext)(null);


;// CONCATENATED MODULE: ../../packages/react-bleeps/build/esm/BleepsProvider/BleepsProvider.js



const BleepsProvider = (props) => {
    const { master, common, categories, bleeps, children } = props;
    // The bleeps is created once with the provided bleep names.
    const bleepsManager = (0,external_react_.useMemo)(() => createBleepsManager({ master, common, categories, bleeps }), []);
    (0,external_react_.useEffect)(() => {
        bleepsManager === null || bleepsManager === void 0 ? void 0 : bleepsManager.update({ master, common, categories, bleeps });
    }, [master, common, categories, bleeps]);
    (0,external_react_.useEffect)(() => {
        return () => {
            bleepsManager === null || bleepsManager === void 0 ? void 0 : bleepsManager.unload();
        };
    }, []);
    return (external_react_.createElement(BleepsManagerContext.Provider, { value: bleepsManager }, children));
};


;// CONCATENATED MODULE: ../../packages/react-bleeps/build/esm/BleepsProvider/index.js


const BleepsProvider_BleepsProvider = memo(BleepsProvider);



;// CONCATENATED MODULE: ../../packages/react-bleeps/build/esm/useBleeps/useBleeps.js


const defaultProps = {};
const useBleeps = (props = defaultProps) => {
    var _a;
    if (props.disabled) {
        return {};
    }
    const bleepsManager = (0,external_react_.useContext)(BleepsManagerContext);
    return (_a = bleepsManager === null || bleepsManager === void 0 ? void 0 : bleepsManager.bleeps) !== null && _a !== void 0 ? _a : {};
};


;// CONCATENATED MODULE: ../../packages/react-bleeps/build/esm/useBleeps/index.js


;// CONCATENATED MODULE: ../../packages/react-bleeps/build/esm/index.js



;// CONCATENATED MODULE: ../../packages/react-text/build/esm/Text/Text.js







const TEXT_CLASS = 'arwes-react-text-text';
const Text = (props) => {
    const { as: asProvided = 'p', className, contentClassName, children, manager, easing, fixed, hideOnExited = true, hideOnEntered, elementRef: elementRefProvided, ...otherProps } = props;
    const as = (0,external_react_.useMemo)(() => asProvided, []);
    const [childrenText, setChildrenText] = (0,external_react_.useState)('');
    const elementRef = (0,external_react_.useRef)(null);
    const contentElementRef = (0,external_react_.useRef)(null);
    const transitionControl = (0,external_react_.useRef)(null);
    const animator = useAnimator();
    const [isExited, setIsExited] = (0,external_react_.useState)(() => (animator === null || animator === void 0 ? void 0 : animator.node.state) === ANIMATOR_STATES.exited);
    const [isEntered, setIsEntered] = (0,external_react_.useState)(() => (animator === null || animator === void 0 ? void 0 : animator.node.state) === ANIMATOR_STATES.entered);
    (0,external_react_.useEffect)(() => {
        var _a, _b;
        setChildrenText((_b = (_a = contentElementRef.current) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : '');
    }, [children]);
    (0,external_react_.useEffect)(() => {
        if (!animator) {
            if (contentElementRef.current) {
                contentElementRef.current.style.visibility = 'visible';
            }
            return;
        }
        // If there is no text, there is nothing to animate.
        if (!childrenText.length) {
            return;
        }
        if (!fixed) {
            const settings = animator.node.control.getSettings();
            const durationEnter = getTransitionTextDuration({
                length: childrenText.length,
                maxDuration: settings.duration.enter
            });
            const durationExit = getTransitionTextDuration({
                length: childrenText.length,
                maxDuration: settings.duration.exit
            });
            animator.node.control.setDynamicSettings({
                duration: { enter: durationEnter, exit: durationExit }
            });
        }
        const transitioner = manager === 'decipher'
            ? transitionTextDecipher
            : transitionTextSequence;
        const transition = (duration, isEntering) => {
            var _a;
            (_a = transitionControl.current) === null || _a === void 0 ? void 0 : _a.cancel();
            transitionControl.current = transitioner({
                rootElement: elementRef.current,
                contentElement: contentElementRef.current,
                duration,
                isEntering,
                easing,
                hideOnExited,
                hideOnEntered
            });
        };
        const cancelSubscription = animator.node.subscribe(node => {
            setIsEntered(node.state === ANIMATOR_STATES.entered);
            setIsExited(node.state === ANIMATOR_STATES.exited);
            switch (node.state) {
                case 'entered': {
                    if (!transitionControl.current) {
                        transition(node.duration.enter, true);
                    }
                    break;
                }
                case 'entering': {
                    transition(node.duration.enter, true);
                    break;
                }
                case 'exiting': {
                    transition(node.duration.exit, false);
                    break;
                }
            }
        });
        return () => {
            var _a;
            cancelSubscription();
            (_a = transitionControl.current) === null || _a === void 0 ? void 0 : _a.cancel();
            transitionControl.current = null;
        };
    }, [animator, childrenText]);
    return (0,react_.jsx)(as, {
        ...otherProps,
        className: cx(TEXT_CLASS, className),
        css: {
            position: 'relative'
        },
        ref: mergeRefs(elementRefProvided, elementRef)
    }, (0,react_.jsx)('span', {
        ref: contentElementRef,
        className: cx(`${TEXT_CLASS}__content`, contentClassName),
        css: {
            position: 'relative',
            zIndex: 1,
            display: 'inline-block',
            visibility: animator && ((hideOnEntered && isEntered) || (hideOnExited && isExited)) ? 'hidden' : 'visible'
        }
    }, children));
};


;// CONCATENATED MODULE: ../../packages/react-text/build/esm/Text/index.js


const Text_Text = memo(Text);



;// CONCATENATED MODULE: ../../packages/react-text/build/esm/index.js


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/useFrameSVGRenderer/useFrameSVGRenderer.js

const useFrameSVGRenderer = (svgRef, onRenderExternal) => {
    (0,external_react_.useEffect)(() => {
        if (!svgRef.current) {
            return;
        }
        const svg = svgRef.current;
        const onRender = () => {
            const { width, height } = svg.getBoundingClientRect();
            svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
            onRenderExternal === null || onRenderExternal === void 0 ? void 0 : onRenderExternal(svg, width, height);
        };
        // Resize only once initially and synchronously.
        onRender();
        // If ResizeObserver is available, allow rerenders on element resize.
        if (window.ResizeObserver) {
            let isFirstRender = true;
            const observer = new window.ResizeObserver(() => {
                // The observer triggers and initial observation call asynchronously,
                // but the first render was already executed before, so skip it.
                if (isFirstRender) {
                    isFirstRender = false;
                    return;
                }
                onRender();
            });
            observer.observe(svg);
            return () => observer.disconnect();
        }
    }, [onRenderExternal]);
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/useFrameSVGRenderer/index.js


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/useFrameSVGAssemblingAnimation/useFrameSVGAssemblingAnimation.js




const useFrameSVGAssemblingAnimation = (svgRef) => {
    const animator = useAnimator();
    const animationControlRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(() => {
        const svg = svgRef.current;
        if (!svg) {
            return;
        }
        const bgs = Array.from(svg.querySelectorAll('[data-name=bg]'));
        const lines = Array.from(svg.querySelectorAll('[data-name=line]'));
        bgs.concat(lines).forEach(path => {
            path.style.opacity = '1';
            path.style.strokeDasharray = '';
            path.style.strokeDashoffset = '';
        });
        if (!animator) {
            return;
        }
        const unsubscribe = animator.node.subscribe(node => {
            var _a;
            const { duration } = node;
            (_a = animationControlRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
            switch (node.state) {
                case 'exited': {
                    bgs.concat(lines).forEach(path => {
                        path.style.opacity = '0';
                        path.style.strokeDasharray = '';
                        path.style.strokeDashoffset = '';
                    });
                    break;
                }
                case 'entering': {
                    for (const polyline of lines) {
                        const length = polyline.getTotalLength();
                        polyline.style.opacity = '1';
                        polyline.style.strokeDasharray = String(length);
                        polyline.dataset.length = String(length);
                    }
                    animationControlRef.current = (0,external_motion_.animate)(progress => {
                        for (const shape of bgs) {
                            shape.style.opacity = String(progress);
                        }
                        for (const polyline of lines) {
                            const length = Number(polyline.dataset.length);
                            polyline.style.strokeDashoffset = String((1 - progress) * length);
                        }
                    }, { duration: duration.enter });
                    break;
                }
                case 'entered': {
                    bgs.concat(lines).forEach(path => {
                        path.style.opacity = '1';
                        path.style.strokeDasharray = '';
                        path.style.strokeDashoffset = '';
                    });
                    break;
                }
                case 'exiting': {
                    for (const polyline of lines) {
                        const length = polyline.getTotalLength();
                        polyline.style.strokeDasharray = String(length);
                        polyline.dataset.length = String(length);
                    }
                    animationControlRef.current = (0,external_motion_.animate)(progress => {
                        for (const shape of bgs) {
                            shape.style.opacity = String(1 - progress);
                        }
                        for (const polyline of lines) {
                            const length = Number(polyline.dataset.length);
                            polyline.style.strokeDashoffset = String(progress * length);
                        }
                    }, { duration: duration.exit });
                    break;
                }
            }
        });
        return () => {
            var _a;
            (_a = animationControlRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
            unsubscribe();
        };
    }, [animator]);
    const onRender = (0,external_react_.useCallback)(() => {
        var _a;
        if (!animator || !svgRef.current) {
            return;
        }
        const svg = svgRef.current;
        const bgs = Array.from(svg.querySelectorAll('[data-name=bg]'));
        const lines = Array.from(svg.querySelectorAll('[data-name=line]'));
        const isVisible = animator.node.state === ANIMATOR_STATES.entering || animator.node.state === ANIMATOR_STATES.entered;
        (_a = animationControlRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
        bgs.concat(lines).forEach(path => {
            path.style.opacity = isVisible ? '1' : '0';
            path.style.strokeDasharray = '';
            path.style.strokeDashoffset = '';
        });
    }, [animator]);
    return { onRender };
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/useFrameSVGAssemblingAnimation/index.js


;// CONCATENATED MODULE: ../../packages/frames/build/esm/formatFrameSVGPath/formatFrameSVGPath.js
const formatDimension = (size, dimension) => {
    if (typeof dimension === 'number') {
        return String(dimension);
    }
    const dimensionNumber = String(dimension)
        .trim()
        .replace(/- /g, '-')
        .replace(/\+ /g, '+')
        .replace(/\s{2,}/g, ' ')
        .split(' ')
        .reduce((total, item) => {
        const n = Number(item.replace(/[+\-%]/g, ''));
        if (n === 0) {
            return total;
        }
        const isMinus = item.startsWith('-');
        const isPercentage = item.endsWith('%');
        const value = isPercentage ? size * (n / 100) : n;
        return isMinus ? total - value : total + value;
    }, 0);
    return String(dimensionNumber);
};
const formatCommand = (width, height, command) => {
    if (Array.isArray(command)) {
        const [name, ...dimensions] = command;
        // One dimension horizontal commands.
        if (name === 'H' || name === 'h') {
            return `${name} ${formatDimension(width, dimensions[0])}`;
        }
        // One dimension vertical commands.
        if (name === 'V' || name === 'v') {
            return `${name} ${formatDimension(height, dimensions[0])}`;
        }
        // Elliptical Arc Curve commands.
        if (name === 'A' || name === 'a') {
            const [rx, ry, angle, largeArcFlag, sweepFlag, x, y] = dimensions;
            const values = [
                formatDimension(width, rx),
                formatDimension(height, ry),
                angle,
                largeArcFlag,
                sweepFlag,
                formatDimension(width, x),
                formatDimension(height, y)
            ].join(',');
            return name + ' ' + values;
        }
        // Multiple (x,y)+ dimensions.
        const values = dimensions
            .map((dimension, index) => {
            const isEven = index % 2 === 0;
            const size = isEven ? width : height;
            return formatDimension(size, dimension);
        })
            .join(',');
        return name + ' ' + values;
    }
    // No dimensions commands.
    return command;
};
const formatFrameSVGPath = (width, height, path) => {
    return path
        .map((command) => formatCommand(width, height, command))
        .join(' ');
};


;// CONCATENATED MODULE: ../../packages/frames/build/esm/renderFrameSVGPaths/renderFrameSVGPaths.js

const renderFrameSVGPaths = (parentElement, width, height, pathsCustom) => {
    if (width <= 0 || height <= 0) {
        return;
    }
    const pathElementsCurrent = Array.from(parentElement.querySelectorAll('path[data-frame]'));
    for (let index = 0; index < pathsCustom.length; index++) {
        const pathCustom = pathsCustom[index];
        const pathElementCurrent = pathElementsCurrent[index];
        const pathElement = pathElementCurrent !== null && pathElementCurrent !== void 0 ? pathElementCurrent : document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const isCommands = Array.isArray(pathCustom);
        const path = isCommands ? pathCustom : pathCustom.path;
        pathElement.dataset.frame = '';
        Object.assign(pathElement.style, {
            vectorEffect: 'non-scaling-stroke'
        });
        if (!isCommands) {
            const { name, id, className, style } = pathCustom;
            if (pathElement.dataset.name !== name) {
                pathElement.dataset.name = name;
            }
            if (pathElement.id !== id) {
                pathElement.id = id || '';
            }
            if (pathElement.classList.value !== className) {
                pathElement.classList.value = className || '';
            }
            Object.assign(pathElement.style, style);
        }
        pathElement.setAttribute('d', formatFrameSVGPath(width, height, path));
        if (pathElement.parentNode !== parentElement) {
            parentElement.appendChild(pathElement);
        }
    }
    // TODO: If the number of polygons change, remove the excess unneeded elements.
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVG/FrameSVG.js





const FrameSVG = (props) => {
    const { paths, onRender: onRenderExternal, className, style, elementRef, children, ...otherProps } = props;
    const svgRef = (0,external_react_.useRef)(null);
    const onRender = (0,external_react_.useCallback)((svg, width, height) => {
        if (paths) {
            renderFrameSVGPaths(svg, width, height, paths);
        }
        onRenderExternal === null || onRenderExternal === void 0 ? void 0 : onRenderExternal(svg, width, height);
    }, [paths]);
    useFrameSVGRenderer(svgRef, onRender);
    return (external_react_.createElement("svg", { role: 'presentation', ref: mergeRefs(svgRef, elementRef), className: cx('arwes-react-frames-framesvg', className), xmlns: 'http://www.w3.org/2000/svg', 
        // Even if it is still resized automatically, in case there is a delay
        // or the ResizeObserver API is not available, the SVG should be resized.
        preserveAspectRatio: 'none', style: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'block',
            border: 0,
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            ...style
        }, ...otherProps }, children));
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVG/index.js


const FrameSVG_FrameSVG = memo(FrameSVG);



;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGOctagon/FrameSVGOctagon.js



const toPath = (points) => points.map((p, i) => [i === 0 ? 'M' : 'L', ...p]);
const FrameSVGOctagon = (props) => {
    const { leftTop = true, rightTop = true, rightBottom = true, leftBottom = true, squareSize: ss = 16, strokeWidth = 1, padding: p = 0, className, ...otherProps } = props;
    const paths = (0,external_react_.useMemo)(() => {
        const so = strokeWidth / 2;
        const polylineStyle = {
            stroke: 'currentcolor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: String(strokeWidth),
            fill: 'none'
        };
        const leftTopPoints = leftTop
            ? [
                [ss + so + p, so + p],
                [so + p, ss + so + p]
            ]
            : [
                [so + p, so + p]
            ];
        const leftBottomPoints = leftBottom
            ? [
                [so + p, `100% - ${ss + p}`],
                [ss + so + p, `100% - ${so + p}`]
            ]
            : [
                [so + p, `100% - ${so + p}`]
            ];
        const rightBottomPoints = rightBottom
            ? [
                [`100% - ${ss + so + p}`, `100% - ${so + p}`],
                [`100% - ${so + p}`, `100% - ${ss + so + p}`]
            ]
            : [
                [`100% - ${so + p}`, `100% - ${so + p}`]
            ];
        const rightTopPoints = rightTop
            ? [
                [`100% - ${so + p}`, ss - so + p],
                [`100% - ${ss - so + p}`, so + p]
            ]
            : [
                [`100% - ${so + p}`, so + p]
            ];
        // leftTop > leftBottom > rightBottom
        const polyline1 = toPath([
            ...leftTopPoints,
            ...leftBottomPoints,
            rightBottomPoints[0]
        ]);
        // rightBottom > rightTop > leftTop
        const polyline2 = toPath([
            ...rightBottomPoints,
            ...rightTopPoints,
            leftTopPoints[0]
        ]);
        const paths = [
            {
                name: 'bg',
                style: {
                    strokeWidth: 0,
                    fill: 'currentcolor'
                },
                path: polyline1.concat(polyline2)
            },
            {
                name: 'line',
                style: polylineStyle,
                path: polyline1
            },
            {
                name: 'line',
                style: polylineStyle,
                path: polyline2
            }
        ];
        return paths;
    }, [leftTop, rightTop, rightBottom, leftBottom, ss, strokeWidth, p]);
    return (external_react_.createElement(FrameSVG_FrameSVG, { ...otherProps, className: cx('arwes-react-frames-framesvgoctagon', className), paths: paths }));
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGOctagon/index.js


const FrameSVGOctagon_FrameSVGOctagon = memo(FrameSVGOctagon);



;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGUnderline/FrameSVGUnderline.js



const FrameSVGUnderline = (props) => {
    const { squareSize: ss = 16, strokeWidth: sw = 1, inverted, className, ...otherProps } = props;
    const paths = (0,external_react_.useMemo)(() => {
        const so = sw / 2;
        return [
            {
                name: 'bg',
                style: {
                    strokeWidth: 0,
                    fill: 'currentcolor'
                },
                path: [
                    ['M', 0, 0],
                    ['L', 0, '100%'],
                    ['L', `100% - ${ss}`, '100%'],
                    ['L', '100%', `100% - ${ss}`],
                    ['L', '100%', 0]
                ]
            },
            {
                name: 'line',
                style: {
                    stroke: 'currentcolor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: String(sw),
                    fill: 'none'
                },
                path: [
                    ['M', so, `100% - ${so}`],
                    ['L', `100% - ${ss}`, `100% - ${so}`],
                    ['L', `100% - ${so}`, `100% - ${ss - so}`]
                ]
            }
        ];
    }, [ss, sw, inverted]);
    return (external_react_.createElement(FrameSVG_FrameSVG, { ...otherProps, className: cx('arwes-react-frames-framesvgunderline', className), paths: paths }));
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGUnderline/index.js


const FrameSVGUnderline_FrameSVGUnderline = memo(FrameSVGUnderline);



;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGCorners/FrameSVGCorners.js



const FrameSVGCorners = (props) => {
    const { strokeWidth: cw = 1, cornerLength: cl = 16, className, ...otherProps } = props;
    const paths = (0,external_react_.useMemo)(() => {
        const co = cw / 2;
        const bg = {
            name: 'bg',
            style: {
                strokeWidth: 0,
                fill: 'currentcolor'
            },
            path: [
                ['M', cw, cw],
                ['L', cw, `100% - ${cw}`],
                ['L', `100% - ${cw}`, `100% - ${cw}`],
                ['L', `100% - ${cw}`, cw]
            ]
        };
        const linesPaths = [
            // Left top.
            [['M', co, co], ['L', co, cl]],
            [['M', co, co], ['L', cl, co]],
            // Right top.
            [['M', `100% - ${co}`, co], ['L', `100% - ${cl}`, co]],
            [['M', `100% - ${co}`, co], ['L', `100% - ${co}`, cl]],
            // Right bottom.
            [['M', `100% - ${co}`, `100% - ${co}`], ['L', `100% - ${cl}`, `100% - ${co}`]],
            [['M', `100% - ${co}`, `100% - ${co}`], ['L', `100% - ${co}`, `100% - ${cl}`]],
            // Left bottom.
            [['M', co, `100% - ${co}`], ['L', co, `100% - ${cl}`]],
            [['M', co, `100% - ${co}`], ['L', cl, `100% - ${co}`]]
        ];
        const lines = linesPaths.map(path => ({
            name: 'line',
            style: {
                stroke: 'currentcolor',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: String(cw),
                fill: 'none'
            },
            path
        }));
        return [bg, ...lines];
    }, [cw, cl]);
    return (external_react_.createElement(FrameSVG_FrameSVG, { ...otherProps, className: cx('arwes-react-frames-framesvgcorners', className), paths: paths }));
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGCorners/index.js


const FrameSVGCorners_FrameSVGCorners = memo(FrameSVGCorners);



;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGLines/FrameSVGLines.js



const FrameSVGLines = (props) => {
    const { largeLineWidth: llw = 1, smallLineWidth: slw = 1, smallLineLength: sll = 16, className, ...otherProps } = props;
    const paths = (0,external_react_.useMemo)(() => {
        const polylineStyle = {
            strokeLinecap: 'square',
            stroke: 'currentcolor',
            fill: 'none'
        };
        const llo = llw / 2;
        const slo = slw / 2;
        const largePolylines = [
            // Top
            [
                ['M', llo, llo],
                ['L', '50% + 0.1', llo]
            ],
            [
                ['M', `100% - ${llo}`, llo],
                ['L', '50% - 0.1', llo]
            ],
            // Bottom
            [
                ['M', llo, `100% - ${llo}`],
                ['L', '50% + 0.1', `100% - ${llo}`]
            ],
            [
                ['M', `100% - ${llo}`, `100% - ${llo}`],
                ['L', '50% - 0.1', `100% - ${llo}`]
            ]
        ];
        const smallPolylines = [
            // Top
            [
                ['M', slo, llw + slo],
                ['L', sll + slo, llw + slo]
            ],
            [
                ['M', `100% - ${slo}`, llw + slo],
                ['L', `100% - ${sll + slo}`, llw + slo]
            ],
            // Bottom
            [
                ['M', slo, `100% - ${llw + slo}`],
                ['L', sll + slo, `100% - ${llw + slo}`]
            ],
            [
                ['M', `100% - ${slo}`, `100% - ${llw + slo}`],
                ['L', `100% - ${sll + slo}`, `100% - ${llw + slo}`]
            ]
        ];
        return [
            {
                name: 'bg',
                style: {
                    strokeWidth: 0,
                    fill: 'currentcolor'
                },
                path: [
                    ['M', 0, 0],
                    ['L', 0, '100%'],
                    ['L', '100%', '100%'],
                    ['L', '100%', 0]
                ]
            },
            ...largePolylines.map(polyline => ({
                name: 'line',
                style: {
                    ...polylineStyle,
                    strokeWidth: String(llw)
                },
                path: polyline
            })),
            ...smallPolylines.map(polyline => ({
                name: 'line',
                style: {
                    ...polylineStyle,
                    strokeWidth: String(slw)
                },
                path: polyline
            }))
        ];
    }, [llw, slw, sll]);
    return (external_react_.createElement(FrameSVG_FrameSVG, { ...otherProps, className: cx('arwes-react-frames-framesvglines', className), paths: paths }));
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGLines/index.js


const FrameSVGLines_FrameSVGLines = memo(FrameSVGLines);



;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGNefrex/FrameSVGNefrex.js



const FrameSVGNefrex_toPath = (points) => points.map((p, i) => [i === 0 ? 'M' : 'L', ...p]);
const FrameSVGNefrex = (props) => {
    const { squareSize: ss = 16, strokeWidth = 1, smallLineLength: sll = 16, largeLineLength: lll = 64, padding: p = 0, className, ...otherProps } = props;
    const paths = (0,external_react_.useMemo)(() => {
        const so = strokeWidth / 2; // Stroke offset.
        const polylineStyle = {
            stroke: 'currentcolor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: String(strokeWidth),
            fill: 'none'
        };
        const leftTopLine = [
            [so + p, sll + ss + so + p],
            [so + p, ss + so + p],
            [ss + so + p, so + p],
            [ss + lll + so + p, so + p]
        ];
        const rightBottomLine = [
            [`100% - ${so + p}`, `100% - ${sll + ss + so + p}`],
            [`100% - ${so + p}`, `100% - ${ss + so + p}`],
            [`100% - ${ss + so + p}`, `100% - ${so + p}`],
            [`100% - ${ss + lll + so + p}`, `100% - ${so + p}`]
        ];
        const paths = [
            {
                name: 'bg',
                style: {
                    strokeWidth: 0,
                    fill: 'currentcolor'
                },
                path: FrameSVGNefrex_toPath(leftTopLine
                    .concat([
                    [`100% - ${so + p}`, so + p]
                ])
                    .concat(rightBottomLine)
                    .concat([
                    [so + p, `100% - ${so + p}`]
                ]))
            },
            {
                name: 'line',
                style: polylineStyle,
                path: FrameSVGNefrex_toPath(leftTopLine)
            },
            {
                name: 'line',
                style: polylineStyle,
                path: FrameSVGNefrex_toPath(rightBottomLine)
            }
        ];
        return paths;
    }, [sll, lll, ss, strokeWidth, p]);
    return (external_react_.createElement(FrameSVG_FrameSVG, { ...otherProps, className: cx('arwes-react-frames-framesvgnefrex', className), paths: paths }));
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGNefrex/index.js


const FrameSVGNefrex_FrameSVGNefrex = memo(FrameSVGNefrex);



;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGKranox/FrameSVGKranox.js



const FrameSVGKranox_toPath = (points) => points.map((p, i) => [i === 0 ? 'M' : 'L', ...p]);
const FrameSVGKranox = (props) => {
    const { squareSize: ss = 16, strokeWidth = 1, smallLineLength: sll = 16, largeLineLength: lll = 64, padding: p = 0, className, ...otherProps } = props;
    const paths = (0,external_react_.useMemo)(() => {
        const so = strokeWidth / 2; // Stroke offset.
        const polylineStyle = {
            stroke: 'currentcolor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: String(strokeWidth),
            fill: 'none'
        };
        // Left-bottom > left-top > right-top.
        const leftTopLine = [
            // Left-bottom.
            [so + p + ss * 2, `100% - ${so + p}`],
            [so + p + ss, `100% - ${so + p + ss}`],
            // Left.
            [so + p + ss, so + p + lll + ss * 3 + sll],
            [so + p, so + p + lll + ss * 2 + sll],
            [so + p, so + p + ss * 2 + sll],
            [so + p + ss, so + p + sll + ss],
            // Left-top.
            [so + p + ss, so + p + ss],
            [so + p + ss * 2, so + p],
            // Right-top.
            [`100% - ${so + p + ss * 2}`, so + p]
        ];
        // Right-top > Right-bottom > Left-bottom.
        const rightBottomLine = [
            // Right-top.
            [`100% - ${so + p + ss * 2}`, so + p],
            [`100% - ${so + p + ss}`, so + p + ss],
            // Right.
            [`100% - ${so + p + ss}`, `100% - ${so + p + ss * 3 + sll + lll}`],
            [`100% - ${so + p}`, `100% - ${so + p + ss * 2 + sll + lll}`],
            [`100% - ${so + p}`, `100% - ${so + p + ss * 2 + sll}`],
            [`100% - ${so + p + ss}`, `100% - ${so + p + ss + sll}`],
            // Right-bottom.
            [`100% - ${so + p + ss}`, `100% - ${so + p + ss}`],
            [`100% - ${so + p + ss * 2}`, `100% - ${so + p}`],
            // Left-bottom.
            [so + p + ss * 2, `100% - ${so + p}`]
        ];
        const paths = [
            {
                name: 'bg',
                style: {
                    strokeWidth: 0,
                    fill: 'currentcolor'
                },
                path: FrameSVGKranox_toPath(leftTopLine.concat(rightBottomLine))
            },
            {
                name: 'line',
                style: polylineStyle,
                path: FrameSVGKranox_toPath(leftTopLine)
            },
            {
                name: 'line',
                style: polylineStyle,
                path: FrameSVGKranox_toPath(rightBottomLine)
            }
        ];
        return paths;
    }, [sll, lll, ss, strokeWidth, p]);
    return (external_react_.createElement(FrameSVG_FrameSVG, { ...otherProps, className: cx('arwes-react-frames-framesvgkranox', className), paths: paths }));
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/FrameSVGKranox/index.js


const FrameSVGKranox_FrameSVGKranox = memo(FrameSVGKranox);



;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/IlluminatorSVG/IlluminatorSVG.js


const IlluminatorSVG = (props) => {
    const { color = 'hsl(0 0% 50% / 5%)', size = 300, className, style } = props;
    const gradientId = (0,external_react_.useId)();
    const circleElementRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(() => {
        var _a;
        const element = circleElementRef.current;
        const svg = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement; // TODO:
        element.style.transform = `translate(-${size / 2}px, -${size / 2}px)`;
        const onMove = (event) => {
            const bounds = svg.getBoundingClientRect();
            const x = event.clientX - bounds.left + (size / 2);
            const y = event.clientY - bounds.top + (size / 2);
            element.style.opacity = '1';
            element.setAttribute('cx', String(x));
            element.setAttribute('cy', String(y));
        };
        const onHide = () => {
            element.style.opacity = '0';
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseleave', onHide);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onHide);
        };
    }, [color, size]);
    return (external_react_.createElement("g", { className: cx('arwes-react-frames-illuminatorsvg', className), style: {
            pointerEvents: 'none',
            ...style
        } },
        external_react_.createElement("defs", null,
            external_react_.createElement("radialGradient", { id: gradientId },
                external_react_.createElement("stop", { offset: '0%', stopColor: color }),
                external_react_.createElement("stop", { offset: '100%', stopColor: 'transparent' }))),
        external_react_.createElement("circle", { ref: circleElementRef, r: size / 2, style: {
                position: 'absolute',
                transition: 'opacity 200ms ease-out',
                opacity: 0
            }, fill: `url(#${gradientId})` })));
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/IlluminatorSVG/index.js


const IlluminatorSVG_IlluminatorSVG = memo(IlluminatorSVG);



;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/Illuminator/Illuminator.js


const Illuminator = (props) => {
    const { color = 'hsl(0 0% 50% / 5%)', size = 300, className, style } = props;
    const elementRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(() => {
        const element = elementRef.current;
        const parentElement = element.parentElement;
        const onMove = (event) => {
            const bounds = parentElement.getBoundingClientRect();
            const x = event.clientX - bounds.left;
            const y = event.clientY - bounds.top;
            element.style.opacity = '1';
            element.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
        };
        const onHide = () => {
            element.style.opacity = '0';
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseleave', onHide);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onHide);
        };
    }, []);
    return (external_react_.createElement("div", { role: 'presentation', className: cx('arwes-react-frames-illuminator', className), style: {
            position: 'absolute',
            width: size,
            height: size,
            transition: 'opacity 200ms ease-out',
            opacity: 0,
            pointerEvents: 'none',
            borderRadius: '50%',
            background: `radial-gradient(${color} 0%, transparent 70%)`,
            ...style
        }, ref: elementRef }));
};


;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/Illuminator/index.js


const Illuminator_Illuminator = memo(Illuminator);



;// CONCATENATED MODULE: ../../packages/react-frames/build/esm/index.js












;// CONCATENATED MODULE: ../../packages/react-bgs/build/esm/Dots/getDistanceFromOriginToCornerProgress.js
const getDistanceBetweenTwoPoints = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};
const getDistanceFromOriginToCornerProgress = (width, height, x1, y1, origin) => {
    switch (origin) {
        case 'left': return x1 / width;
        case 'right': return 1 - x1 / width;
        case 'top': return y1 / height;
        case 'bottom': return 1 - y1 / height;
        case 'center':
            origin = [0.5, 0.5];
            break;
    }
    const [x2Percentage, y2Percentage] = origin;
    const x2 = width * x2Percentage;
    const y2 = height * y2Percentage;
    const distanceFromOrigin = getDistanceBetweenTwoPoints(x1, y1, x2, y2);
    const x3 = x2 < width / 2 ? width : 0;
    const y3 = y2 < height / 2 ? height : 0;
    const maxDistanceToCorner = getDistanceBetweenTwoPoints(x2, y2, x3, y3);
    return distanceFromOrigin / maxDistanceToCorner;
};


;// CONCATENATED MODULE: ../../packages/react-bgs/build/esm/Dots/Dots.js







const { entering, exiting } = ANIMATOR_STATES;
const Dots_defaultProps = {
    color: '#777',
    type: 'box',
    distance: 30,
    size: 4,
    origin: 'center'
};
const Dots = (props) => {
    const propsFull = { ...Dots_defaultProps, ...props };
    const { elementRef: elementRefExternal, className, style } = propsFull;
    const animator = useAnimator();
    const elementRef = (0,external_react_.useRef)(null);
    const propsFullRef = (0,external_react_.useRef)(propsFull);
    propsFullRef.current = propsFull;
    (0,external_react_.useEffect)(() => {
        if (!animator) {
            return;
        }
        let animationControl;
        let resizeObserver;
        const cancelAnimationSubscriptions = () => {
            animationControl === null || animationControl === void 0 ? void 0 : animationControl.cancel();
            resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
        };
        const animatorSubscription = (node) => {
            if (node.state !== entering && node.state !== exiting) {
                return;
            }
            cancelAnimationSubscriptions();
            const active = node.state === entering;
            const { duration } = node.control.getSettings();
            const transitionDuration = (active ? duration === null || duration === void 0 ? void 0 : duration.enter : duration === null || duration === void 0 ? void 0 : duration.exit) || 0;
            const canvas = elementRef.current;
            const ctx = canvas.getContext('2d');
            const draw = (progress) => {
                const { color, type, distance, size, origin, originInverted } = propsFullRef.current;
                const width = canvas.clientWidth;
                const height = canvas.clientHeight;
                const xLength = 1 + Math.floor(width / distance);
                const yLength = 1 + Math.floor(height / distance);
                const xMargin = width % distance;
                const yMargin = height % distance;
                // Only assign size if they changed.
                if (canvas.width !== width || canvas.height !== height) {
                    canvas.width = width;
                    canvas.height = height;
                }
                ctx.clearRect(0, 0, width, height);
                for (let xIndex = 0; xIndex < xLength; xIndex++) {
                    const x = (xMargin / 2) + (xIndex * distance);
                    for (let yIndex = 0; yIndex < yLength; yIndex++) {
                        const y = (yMargin / 2) + (yIndex * distance);
                        const distanceFromOriginProgress = getDistanceFromOriginToCornerProgress(width, height, x, y, origin);
                        const distancePercentage = (active && originInverted) || (!active && !originInverted)
                            ? 1 - distanceFromOriginProgress
                            : distanceFromOriginProgress;
                        const alphaProgress = progress / distancePercentage;
                        const alpha = Math.max(0, Math.min(1, alphaProgress));
                        ctx.beginPath();
                        ctx.globalAlpha = active ? alpha : 1 - alpha;
                        if (type === 'box') {
                            ctx.rect(x - (size / 2), y - (size / 2), size, size);
                        }
                        else {
                            ctx.arc(x, y, size, 0, 2 * Math.PI);
                        }
                        ctx.fillStyle = color;
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            };
            animationControl = (0,external_motion_.animate)(draw, {
                duration: transitionDuration,
                easing: 'ease-in-out'
            });
            if (window.ResizeObserver) {
                resizeObserver = new window.ResizeObserver(() => {
                    const currentTime = (animationControl === null || animationControl === void 0 ? void 0 : animationControl.currentTime) || 0;
                    if (active && currentTime >= transitionDuration) {
                        draw(1);
                    }
                });
                resizeObserver.observe(canvas);
            }
        };
        animator.node.subscribers.add(animatorSubscription);
        return () => {
            animator.node.subscribers.delete(animatorSubscription);
            cancelAnimationSubscriptions();
        };
    }, [animator]);
    return (external_react_.createElement("canvas", { role: 'presentation', ref: mergeRefs(elementRef, elementRefExternal), className: cx('arwes-react-bgs-dots', className), style: {
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'block',
            border: 0,
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            ...style
        } }));
};


;// CONCATENATED MODULE: ../../packages/react-bgs/build/esm/Dots/index.js


const Dots_Dots = memo(Dots);



;// CONCATENATED MODULE: ../../packages/react-bgs/build/esm/Puffs/Puffs.js







const { entering: Puffs_entering, entered, exiting: Puffs_exiting, exited } = ANIMATOR_STATES;
const minmaxOverflow01 = (value) => Math.min(1, Math.max(0, value === 1 ? 1 : value % 1));
const Puffs_defaultProps = {
    padding: 50,
    xOffset: [0, 0],
    yOffset: [-10, -100],
    radiusInitial: 4,
    radiusOffset: [4, 40],
    sets: 5
};
const Puffs = (props) => {
    const propsFull = { ...Puffs_defaultProps, ...props };
    const { elementRef: elementRefExternal, className, style } = propsFull;
    const animator = useAnimator();
    const elementRef = (0,external_react_.useRef)(null);
    const propsFullRef = (0,external_react_.useRef)(propsFull);
    propsFullRef.current = propsFull;
    (0,external_react_.useEffect)(() => {
        if (!animator) {
            return;
        }
        const canvas = elementRef.current;
        const ctx = canvas.getContext('2d');
        let canvasControl;
        let puffsControl;
        let puffsEmptyTimeoutId;
        const cancelAnimationSubscriptions = () => {
            canvasControl === null || canvasControl === void 0 ? void 0 : canvasControl.cancel();
            puffsControl === null || puffsControl === void 0 ? void 0 : puffsControl.cancel();
            window.clearTimeout(puffsEmptyTimeoutId);
        };
        const animatorSubscription = (node) => {
            const state = node.state;
            const { duration } = node.control.getSettings();
            switch (state) {
                case Puffs_entering: {
                    cancelAnimationSubscriptions();
                    const { color, quantity, padding, xOffset, yOffset, radiusInitial, radiusOffset, sets } = propsFullRef.current;
                    const puffsSetQuantity = Math.round(quantity / sets);
                    const puffsSetOffset = 1 / sets;
                    const createPuff = (width, height) => {
                        const x = padding + (Math.random() * (width - (padding * 2)));
                        const y = padding + (Math.random() * (height - (padding * 2)));
                        const r = radiusInitial;
                        const xo = xOffset[0] + (Math.random() * xOffset[1]);
                        const yo = yOffset[0] + (Math.random() * yOffset[1]);
                        const ro = radiusOffset[0] + (Math.random() * radiusOffset[1]);
                        return { x, y, r, xo, yo, ro };
                    };
                    const createPuffsSets = (width, height) => {
                        return Array(sets)
                            .fill(null)
                            .map(() => Array(puffsSetQuantity)
                            .fill(null)
                            .map(() => createPuff(width, height)));
                    };
                    const drawPuffs = (puffs, progress) => {
                        // From: 0 at 0%, 1 at 50%, 0 at 100%.
                        ctx.globalAlpha = progress <= 0.5
                            ? progress * 2
                            : -2 * progress + 2;
                        puffs.forEach(puff => {
                            const x = puff.x + (progress * puff.xo);
                            const y = puff.y + (progress * puff.yo);
                            const r = puff.r + (progress * puff.ro);
                            const grd = ctx.createRadialGradient(x, y, 0, x, y, r);
                            grd.addColorStop(0, color);
                            grd.addColorStop(1, 'transparent');
                            ctx.beginPath();
                            ctx.fillStyle = grd;
                            ctx.arc(x, y, r, 0, 2 * Math.PI);
                            ctx.fill();
                            ctx.closePath();
                        });
                    };
                    let puffsSets = [];
                    const draw = (intervalProgress) => {
                        const width = canvas.clientWidth;
                        const height = canvas.clientHeight;
                        const isResized = canvas.width !== width || canvas.height !== height;
                        if (isResized || !puffsSets.length) {
                            puffsSets = createPuffsSets(width, height);
                        }
                        canvas.width = width;
                        canvas.height = height;
                        ctx.clearRect(0, 0, width, height);
                        puffsSets.forEach((puffs, index) => {
                            const puffsOffset = puffsSetOffset * index;
                            const puffsProgress = minmaxOverflow01(intervalProgress + puffsOffset);
                            drawPuffs(puffs, easing.outSine(puffsProgress));
                        });
                    };
                    canvasControl = (0,external_motion_.animate)(canvas, { opacity: [0, 1] }, { duration: duration === null || duration === void 0 ? void 0 : duration.enter });
                    const runPuffsAnimation = () => {
                        puffsControl = (0,external_motion_.animate)((progress) => {
                            draw(progress);
                            if (progress >= 1) {
                                const emptyDuration = ((duration === null || duration === void 0 ? void 0 : duration.intervalPause) || 0) * 1000;
                                window.clearTimeout(puffsEmptyTimeoutId);
                                window.setTimeout(runPuffsAnimation, emptyDuration);
                            }
                        }, { duration: duration === null || duration === void 0 ? void 0 : duration.interval, easing: 'linear' });
                    };
                    runPuffsAnimation();
                    break;
                }
                case entered: {
                    break;
                }
                case Puffs_exiting: {
                    canvasControl === null || canvasControl === void 0 ? void 0 : canvasControl.cancel();
                    canvasControl = (0,external_motion_.animate)(canvas, { opacity: [1, 0] }, { duration: duration === null || duration === void 0 ? void 0 : duration.exit });
                    break;
                }
                case exited: {
                    cancelAnimationSubscriptions();
                    canvas.style.opacity = '0';
                    break;
                }
            }
        };
        animator.node.subscribers.add(animatorSubscription);
        return () => {
            animator.node.subscribers.delete(animatorSubscription);
            cancelAnimationSubscriptions();
        };
    }, [animator]);
    return (external_react_.createElement("canvas", { role: 'presentation', ref: mergeRefs(elementRef, elementRefExternal), className: cx('arwes-react-bgs-puffs', className), style: {
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'block',
            border: 0,
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            ...style
        } }));
};


;// CONCATENATED MODULE: ../../packages/react-bgs/build/esm/Puffs/index.js


const Puffs_Puffs = memo(Puffs);



;// CONCATENATED MODULE: ../../packages/react-bgs/build/esm/GridLines/GridLines.js






const { entering: GridLines_entering, exiting: GridLines_exiting } = ANIMATOR_STATES;
const GridLines_defaultProps = {
    lineWidth: 1,
    lineColor: '#777',
    horizontalLineDash: [4],
    verticalLineDash: [],
    distance: 30
};
const GridLines = (props) => {
    const propsFull = { ...GridLines_defaultProps, ...props };
    const { elementRef: elementRefExternal, className, style } = propsFull;
    const animator = useAnimator();
    const elementRef = (0,external_react_.useRef)(null);
    const propsFullRef = (0,external_react_.useRef)(propsFull);
    propsFullRef.current = propsFull;
    (0,external_react_.useEffect)(() => {
        if (!animator) {
            return;
        }
        const canvas = elementRef.current;
        const ctx = canvas.getContext('2d');
        let transitionControl;
        let resizeObserver;
        const draw = () => {
            const { lineWidth, lineColor, horizontalLineDash, verticalLineDash, distance } = propsFullRef.current;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const xLength = 1 + Math.floor(width / distance);
            const yLength = 1 + Math.floor(height / distance);
            const xMargin = width % distance;
            const yMargin = height % distance;
            canvas.width = width;
            canvas.height = height;
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = lineColor;
            // Horizontal lines.
            ctx.setLineDash(horizontalLineDash);
            for (let yIndex = 0; yIndex < yLength; yIndex++) {
                const y = (yMargin / 2) + (yIndex * distance);
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
                ctx.closePath();
            }
            // Vertical lines.
            ctx.setLineDash(verticalLineDash);
            for (let xIndex = 0; xIndex < xLength; xIndex++) {
                const x = (xMargin / 2) + (xIndex * distance);
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
                ctx.closePath();
            }
        };
        const animatorSubscription = (node) => {
            const state = node.state;
            const { duration } = node.control.getSettings();
            switch (state) {
                case GridLines_entering: {
                    draw();
                    transitionControl = (0,external_motion_.animate)(canvas, { opacity: [0, 1] }, { duration: duration === null || duration === void 0 ? void 0 : duration.enter, easing: 'ease-out' });
                    break;
                }
                case GridLines_exiting: {
                    transitionControl = (0,external_motion_.animate)(canvas, { opacity: [1, 0] }, { duration: duration === null || duration === void 0 ? void 0 : duration.exit, easing: 'ease-out' });
                    break;
                }
            }
        };
        animator.node.subscribers.add(animatorSubscription);
        if (window.ResizeObserver && !resizeObserver) {
            resizeObserver = new window.ResizeObserver(() => draw());
            resizeObserver.observe(canvas);
        }
        return () => {
            animator.node.subscribers.delete(animatorSubscription);
            transitionControl === null || transitionControl === void 0 ? void 0 : transitionControl.cancel();
            resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
        };
    }, [animator]);
    return (external_react_.createElement("canvas", { role: 'presentation', ref: mergeRefs(elementRef, elementRefExternal), className: cx('arwes-react-bgs-gridlines', className), style: {
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'block',
            border: 0,
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            ...style
        } }));
};


;// CONCATENATED MODULE: ../../packages/react-bgs/build/esm/GridLines/index.js


const GridLines_GridLines = memo(GridLines);



;// CONCATENATED MODULE: ../../packages/react-bgs/build/esm/MovingLines/MovingLines.js







const { entering: MovingLines_entering, exiting: MovingLines_exiting, exited: MovingLines_exited } = ANIMATOR_STATES;
const random = (min, max) => (max - min) * Math.random();
const MovingLines_minmaxOverflow01 = (value) => Math.min(1, Math.max(0, value === 1 ? 1 : value % 1));
// Create a list of lines in the given available canvas axis size.
// The lines are placed at random positions in the grid.
const createLinesSet = (config) => {
    const { distance, positionsLength, margin, size } = config;
    const linesLength = Math.floor(random(0.1, 0.5) * positionsLength);
    const positions = Array(positionsLength).fill(0).map((_, i) => i);
    const positionsRandom = randomizeList(positions);
    const positionsSelected = positionsRandom.slice(0, linesLength);
    return positionsSelected.map(position => {
        const axis1 = (margin / 2) + (position * distance);
        const axis2Initial = Math.random() * (size / 2);
        const length = Math.floor(random(0.1, 0.5) * size);
        return { axis1, axis2Initial, length };
    });
};
const MovingLines_defaultProps = {
    lineWidth: 1,
    lineColor: '#777',
    distance: 30,
    sets: 5
};
const MovingLines = (props) => {
    const propsFull = { ...MovingLines_defaultProps, ...props };
    const { elementRef: elementRefExternal, className, style } = propsFull;
    const animator = useAnimator();
    const elementRef = (0,external_react_.useRef)(null);
    const propsFullRef = (0,external_react_.useRef)(propsFull);
    propsFullRef.current = propsFull;
    (0,external_react_.useEffect)(() => {
        if (!animator) {
            return;
        }
        const canvas = elementRef.current;
        const ctx = canvas.getContext('2d');
        let transitionControl;
        let intervalControl;
        let linesSets = [];
        const draw = (intervalProgress) => {
            const { lineWidth, lineColor, distance, sets: linesSetsLength } = propsFullRef.current;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const isResized = canvas.width !== width || canvas.height !== height;
            const axis1Size = width;
            const axis2Size = height;
            const positionsLength = 1 + Math.floor(axis1Size / distance);
            const margin = axis1Size % distance;
            canvas.width = width;
            canvas.height = height;
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = lineColor;
            ctx.shadowBlur = lineWidth;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowColor = lineColor;
            if (linesSets.length === 0 || isResized) {
                linesSets = Array(linesSetsLength).fill(null).map(() => createLinesSet({ positionsLength, margin, distance, size: axis2Size }));
            }
            linesSets.forEach((linesSet, linesSetIndex) => {
                // "intervalProgress" goes from 0 to 1 repeatedly indicating each interval.
                // Every set of lines will have an progress offset so the its animation
                // starts/ends at different times than each other.
                // Since those sets will start later in time, they will end faster, so
                // when they do, they extra progress offset will start from the beginning.
                // So if one set ends at 1.23 in the animation progress, it overflows
                // and becomes 0.23.
                const linesSetProgressOffset = ((1 / linesSetsLength) * linesSetIndex);
                const progress = MovingLines_minmaxOverflow01(intervalProgress + linesSetProgressOffset);
                const progressEase = easing.inOutCubic(progress);
                linesSet.forEach(line => {
                    const { axis1, axis2Initial, length } = line;
                    // Move the line from before to after the visible space.
                    const axis2Move = ((axis2Size * 2) * progressEase) - axis2Size;
                    ctx.beginPath();
                    ctx.moveTo(axis1, axis2Size - (axis2Initial + axis2Move));
                    ctx.lineTo(axis1, axis2Size - (axis2Initial + length + axis2Move));
                    ctx.stroke();
                    ctx.closePath();
                });
            });
        };
        const animatorSubscription = (node) => {
            const state = node.state;
            const { duration } = node.control.getSettings();
            switch (state) {
                case MovingLines_entering: {
                    transitionControl = (0,external_motion_.animate)(canvas, { opacity: [0, 1] }, { duration: duration.enter, easing: 'ease-out' });
                    intervalControl = (0,external_motion_.animate)(draw, { duration: duration.interval || 10, easing: 'linear', repeat: Infinity });
                    break;
                }
                case MovingLines_exiting: {
                    transitionControl = (0,external_motion_.animate)(canvas, { opacity: [1, 0] }, { duration: duration.exit, easing: 'ease-out' });
                    break;
                }
                case MovingLines_exited: {
                    intervalControl === null || intervalControl === void 0 ? void 0 : intervalControl.cancel();
                    break;
                }
            }
        };
        animator.node.subscribers.add(animatorSubscription);
        return () => {
            animator.node.subscribers.delete(animatorSubscription);
            transitionControl === null || transitionControl === void 0 ? void 0 : transitionControl.cancel();
            intervalControl === null || intervalControl === void 0 ? void 0 : intervalControl.cancel();
        };
    }, [animator]);
    return (external_react_.createElement("canvas", { role: 'presentation', ref: mergeRefs(elementRef, elementRefExternal), className: cx('arwes-react-bgs-movinglines', className), style: {
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'block',
            border: 0,
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            ...style
        } }));
};


;// CONCATENATED MODULE: ../../packages/react-bgs/build/esm/MovingLines/index.js


const MovingLines_MovingLines = memo(MovingLines);



;// CONCATENATED MODULE: ../../packages/react-bgs/build/esm/index.js





;// CONCATENATED MODULE: ../../packages/react-core/build/esm/BleepsOnAnimator/BleepsOnAnimator.js




const BleepsOnAnimator = (props) => {
    const { id: externalId, transitions, continuous } = props;
    const internalId = (0,external_react_.useId)();
    const transitionsRef = (0,external_react_.useRef)(transitions);
    const animator = useAnimator();
    const bleeps = useBleeps();
    // To prevent multiple executions of the useEffect to check for Animator node updates.
    transitionsRef.current = transitions;
    const id = externalId || internalId;
    (0,external_react_.useEffect)(() => {
        if (!animator) {
            return;
        }
        let currentBleep = null;
        const cancelSubscription = animator.node.subscribe(node => {
            const bleepName = transitionsRef.current[node.state];
            if (!continuous) {
                currentBleep === null || currentBleep === void 0 ? void 0 : currentBleep.stop(id);
            }
            const newBleep = bleeps[bleepName];
            if (newBleep) {
                currentBleep === null || currentBleep === void 0 ? void 0 : currentBleep.stop(id);
                currentBleep = newBleep;
                currentBleep.play(id);
            }
        });
        return () => {
            cancelSubscription();
            currentBleep === null || currentBleep === void 0 ? void 0 : currentBleep.stop(id);
        };
    }, [id, animator, bleeps]);
    return external_react_.createElement(external_react_.Fragment, null);
};


;// CONCATENATED MODULE: ../../packages/react-core/build/esm/BleepsOnAnimator/index.js


const BleepsOnAnimator_BleepsOnAnimator = memo(BleepsOnAnimator);



;// CONCATENATED MODULE: ../../packages/react-core/build/esm/index.js


;// CONCATENATED MODULE: ../../packages/react/build/esm/index.js












/***/ })

};
;