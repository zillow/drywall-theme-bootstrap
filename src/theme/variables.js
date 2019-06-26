import Color from 'color';

const rgba = (color, fade) => Color(color).fade(fade);

// Color system

export const white = '#fff';
export const gray100 = '#f8f9fa';
export const gray200 = '#e9ecef';
export const gray300 = '#dee2e6';
export const gray400 = '#ced4da';
export const gray500 = '#adb5bd';
export const gray600 = '#6c757d';
export const gray700 = '#495057';
export const gray800 = '#343a40';
export const gray900 = '#212529';
export const black = '#000';

export const blue = '#007bff';
export const indigo = '#6610f2';
export const purple = '#6f42c1';
export const pink = '#e83e8c';
export const red = '#dc3545';
export const orange = '#fd7e14';
export const yellow = '#ffc107';
export const green = '#28a745';
export const teal = '#20c997';
export const cyan = '#17a2b8';

export const primary = blue;
export const secondary = gray600;
export const success = green;
export const info = cyan;
export const warning = yellow;
export const danger = red;
export const light = gray100;
export const dark = gray800;

export const themeColor = {
    primary,
    secondary,
    success,
    info,
    warning,
    danger,
    light,
    dark,
};

// The yiq lightness value that determines when the lightness of color changes from
// "dark" to "light". Acceptable values are between 0 and 255.
export const yiqContrastedThreshold = 150;

// Customize the light and dark text colors for use in our YIQ color contrast function.
export const yiqTextDark = gray900;
export const yiqTextLight = white;

// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.

export const spacer = 1;
export const spacerUnits = 'rem';
export const spacers = {
    0: 0,
    1: spacer * 0.25,
    2: spacer * 0.5,
    3: spacer,
    4: spacer * 1.5,
    5: spacer * 3,
};

// $negative-spacers: negativify-map($spacers) !default; // TODO

// Body
//
// Settings for the `<body>` element.

export const bodyBg = white;
export const bodyColor = gray900;

// Links
//
// Style anchor elements.

export const linkColor = themeColor.primary;
export const linkDecoration = 'none';
export const linkHoverColor = Color(linkColor)
    .darken(0.15)
    .string();
export const linkHoverDecoration = 'underline';
// Darken percentage for links with `.text-*` class (e.g. `.text-success`)
export const emphasizedLinkHoverDarkenPercentage = '15%';

// Components
//
// Define common padding and border radius sizes and more.

export const lineHeightLg = 1.5;
export const lineHeightSm = 1.5;

export const borderWidth = '1px';
export const borderColor = gray300;

export const borderRadius = '.25rem';
export const borderRadiusLg = '.3rem';
export const borderRadiusSm = '.2rem';

export const roundedPill = '50rem';

export const boxShadowSm = `0 .125rem .25rem ${rgba(black, 0.075)}`;
export const boxShadow = `0 .5rem 1rem ${rgba(black, 0.15)}`;
export const boxShadowLg = `0 1rem 3rem ${rgba(black, 0.175)}`;

export const componentActiveColor = white;
export const componentActiveBg = themeColor.primary;

export const caretWidth = 0.3;
export const caretWidthUnits = 'em';
export const caretVerticalAlign = caretWidth * 0.85;
export const caretSpacing = caretWidth * 0.85;

export const transitionBase = 'all .2s ease-in-out';
export const transitionFade = 'opacity .15s linear';
export const transitionCollapse = 'height .35s ease';

// Typography
//
// Font, line-height, and color for body text, headings, and more.

// stylelint-disable value-keyword-case
export const fontFamilySansSerif =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
export const fontFamilyMonospace =
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
export const fontFamilyBase = fontFamilySansSerif;
// stylelint-enable value-keyword-case

// Assumes the browser default, typically `16px`
export const fontSizeBase = 1;
export const fontSizeUnits = 'rem';
export const fontSizeLg = `${fontSizeBase * 1.25}${fontSizeUnits}`;
export const fontSizeSm = `${fontSizeBase * 0.875}${fontSizeUnits}`;

export const fontWeightLighter = 'lighter';
export const fontWeightLight = 300;
export const fontWeightNormal = 400;
export const fontWeightBold = 700;
export const fontWeightBolder = 'bolder';

export const fontWeightBase = fontWeightNormal;
export const lineHeightBase = 1.5;

export const h1FontSize = `${fontSizeBase * 2.5}${fontSizeUnits}`;
export const h2FontSize = `${fontSizeBase * 2}${fontSizeUnits}`;
export const h3FontSize = `${fontSizeBase * 1.75}${fontSizeUnits}`;
export const h4FontSize = `${fontSizeBase * 1.5}${fontSizeUnits}`;
export const h5FontSize = `${fontSizeBase * 1.25}${fontSizeUnits}`;
export const h6FontSize = `${fontSizeBase}${fontSizeUnits}`;

export const headingsMarginBottom = spacer / 2;
export const headingsFontFamily = null;
export const headingsFontStyle = null;
export const headingsFontWeight = 500;
export const headingsLineHeight = 1.2;
export const headingsColor = null;

export const display1Size = '6rem';
export const display2Size = '5.5rem';
export const display3Size = '4.5rem';
export const display4Size = '3.5rem';

export const display1Weight = 300;
export const display2Weight = 300;
export const display3Weight = 300;
export const display4Weight = 300;
export const displayLineHeight = headingsLineHeight;

export const leadFontSize = `${fontSizeBase * 1.25}${fontSizeUnits}`;
export const leadFontWeight = 300;

export const smallFontSize = '80%';

export const textMuted = gray600;

export const blockquoteSmallColor = gray600;
export const blockquoteSmallFontSize = smallFontSize;
export const blockquoteFontSize = `${fontSizeBase * 1.25}${fontSizeUnits}`;

export const hrColor = 'inherit';
export const hrHeight = borderWidth;
export const hrOpacity = 0.25;

export const markPadding = '.2em';

export const dtFontWeight = fontWeightBold;

export const kbdBoxShadow = `inset 0 .1rem 0 ${rgba(black, 0.25)}`;
export const nestedKbdFontWeight = fontWeightBold;

export const listInlinePadding = '.5rem';

export const markBg = '#fcf8e3';

export const hrMarginY = spacer;

// Buttons + Forms
//
// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.

export const inputBtnPaddingY = '.375rem';
export const inputBtnPaddingX = '.75rem';
export const inputBtnFontFamily = null;
export const inputBtnFontSize = `${fontSizeBase}${fontSizeUnits}`;
export const inputBtnLineHeight = lineHeightBase;

export const inputBtnFocusWidth = '.2rem';
export const inputBtnFocusColor = rgba(componentActiveBg, 0.25);
export const inputBtnFocusBoxShadow = `0 0 0 ${inputBtnFocusWidth} ${inputBtnFocusColor}`;

export const inputBtnPaddingYSm = '.25rem';
export const inputBtnPaddingXSm = '.5rem';
export const inputBtnFontSizeSm = fontSizeSm;
export const inputBtnLineHeightSm = lineHeightSm;

export const inputBtnPaddingYLg = '.5rem';
export const inputBtnPaddingXLg = '1rem';
export const inputBtnFontSizeLg = fontSizeLg;
export const inputBtnLineHeightLg = lineHeightLg;

export const inputBtnBorderWidth = borderWidth;

// Buttons
//
// For each of Bootstrap's buttons, define text, background, and border color.

export const btnPaddingY = inputBtnPaddingY;
export const btnPaddingX = inputBtnPaddingX;
export const btnFontFamily = inputBtnFontFamily;
export const btnFontSize = inputBtnFontSize;
export const btnLineHeight = inputBtnLineHeight;

export const btnPaddingYSm = inputBtnPaddingYSm;
export const btnPaddingXSm = inputBtnPaddingXSm;
export const btnFontSizeSm = inputBtnFontSizeSm;
export const btnLineHeightSm = inputBtnLineHeightSm;

export const btnPaddingYLg = inputBtnPaddingYLg;
export const btnPaddingXLg = inputBtnPaddingXLg;
export const btnFontSizeLg = inputBtnFontSizeLg;
export const btnLineHeightLg = inputBtnLineHeightLg;

export const btnBorderWidth = inputBtnBorderWidth;

export const btnFontWeight = fontWeightNormal;
export const btnBoxShadow = `inset 0 1px 0 ${rgba(white, 0.15)}, 0 1px 1px ${rgba(black, 0.075)}`;
export const btnFocusWidth = inputBtnFocusWidth;
export const btnFocusBoxShadow = inputBtnFocusBoxShadow;
export const btnDisabledOpacity = 0.65;
export const btnActiveBoxShadow = `inset 0 3px 5px ${rgba(black, 0.125)}`;

export const btnLinkColor = linkColor;
export const btnLinkHoverColor = linkHoverColor;
export const btnLinkDisabledColor = gray600;

export const btnBlockSpacingY = '.5rem';

// Allows for customizing button radius independently from global border radius
export const btnBorderRadius = borderRadius;
export const btnBorderRadiusLg = borderRadiusLg;
export const btnBorderRadiusSm = borderRadiusSm;

export const btnTransition =
    'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out';
