import { css } from 'styled-components';

const btnReset = css`
    &:not(:disabled) {
        cursor: pointer;
    }
`;

const btn = ({ theme }) => css`
    display: inline-block;
    font-family: ${theme.bootstrap.variables.btnFontFamily};
    font-weight: ${theme.bootstrap.variables.btnFontWeight};
    color: ${theme.bootstrap.variables.bodyColor};
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: ${theme.bootstrap.variables.btnBorderWidth} solid transparent;
    ${theme.bootstrap.buttonSize(
        theme.bootstrap.variables.btnPaddingY,
        theme.bootstrap.variables.btnPaddingX,
        theme.bootstrap.variables.btnFontSize,
        theme.bootstrap.variables.btnLineHeight,
        theme.bootstrap.variables.btnBorderRadius
    )};
    ${theme.bootstrap.transition(theme.bootstrap.variables.btnTransition)};

    &:hover {
        color: ${theme.bootstrap.variables.bodyColor};
        text-decoration: none;
    }

    &:focus,
    &.focus {
        outline: 0;
        box-shadow: ${theme.bootstrap.variables.btnFocusBoxShadow};
    }

    // Disabled comes first so active can properly restyle
    &.disabled,
    &:disabled {
        opacity: ${theme.bootstrap.variables.btnDisabledOpacity};
        ${theme.bootstrap.boxShadow('none')};
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).active {
        ${theme.bootstrap.boxShadow(theme.bootstrap.variables.btnActiveBoxShadow)};

        &:focus {
            ${theme.bootstrap.boxShadow(
                theme.bootstrap.variables.btnFocusBoxShadow,
                theme.bootstrap.variables.btnActiveBoxShadow
            )};
        }
    }
`;

const btnAppearance = ({ appearance = 'primary', theme }) => {
    const color = theme.bootstrap.variables.themeColor[appearance];
    if (color) {
        return css`
            ${theme.bootstrap.buttonVariant(color, color)};
        `;
    }
    return null;
};

const btnSize = ({ buttonSize, theme }) => {
    if (buttonSize === 'lg') {
        return theme.bootstrap.buttonSize(
            theme.bootstrap.variables.btnPaddingYLg,
            theme.bootstrap.variables.btnPaddingXLg,
            theme.bootstrap.variables.btnFontSizeLg,
            theme.bootstrap.variables.btnLineHeightLg,
            theme.bootstrap.variables.btnBorderRadiusLg
        );
    }
    if (buttonSize === 'sm') {
        return theme.bootstrap.buttonSize(
            theme.bootstrap.variables.btnPaddingYSm,
            theme.bootstrap.variables.btnPaddingXSm,
            theme.bootstrap.variables.btnFontSizeSm,
            theme.bootstrap.variables.btnLineHeightSm,
            theme.bootstrap.variables.btnBorderRadiusSm
        );
    }
    return null;
};

const btnBlock = ({ fluid }) => {
    if (fluid) {
        return css`
            display: block;
            width: 100%;
        `;
    }
    return null;
};

export default css`
    ${btnReset};
    ${btn};
    ${btnAppearance};
    ${btnSize};
    ${btnBlock};
`;
