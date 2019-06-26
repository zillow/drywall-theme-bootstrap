/* eslint no-param-reassign: 0 */

import Color from 'color';
import { css } from 'styled-components';
import { colorYiq, rgba, mix } from '../util';

const focusBoxShadow = (background, border, boxShadow) => ({ theme }) => {
    if (theme.bootstrap.enableShadows) {
        return css`
            box-shadow: ${boxShadow},
                0 0 0 ${theme.bootstrap.variables.btnFocusWidth}
                    ${rgba(mix(colorYiq(background), border, 0.15), 0.5)};
        `;
    }
    return css`
        box-shadow: 0 0 0 ${theme.bootstrap.variables.btnFocusWidth}
            ${rgba(mix(colorYiq(background), border, 0.15), 0.5)};
    `;
};

export const buttonVariant = (
    background,
    border,
    hoverBackground,
    hoverBorder,
    activeBackground,
    activeBorder
) => {
    hoverBackground =
        hoverBackground ||
        Color(background)
            .darken(0.075)
            .string();
    hoverBorder =
        hoverBorder ||
        Color(border)
            .darken(0.1)
            .string();
    activeBackground =
        activeBackground ||
        Color(background)
            .darken(0.1)
            .string();
    activeBorder =
        activeBorder ||
        Color(border)
            .darken(0.125)
            .string();

    return ({ theme }) => css`
        color: ${colorYiq(background)};
        ${theme.bootstrap.gradientBg(background)};
        border-color: ${border};
        ${theme.bootstrap.boxShadow(theme.bootstrap.variables.btnBoxShadow)};

        &:hover {
            color: ${colorYiq(hoverBackground)};
            ${theme.bootstrap.gradientBg(hoverBackground)};
            border-color: ${hoverBorder};
        }

        &:focus,
        &.focus {
            color: ${colorYiq(hoverBackground)};
            ${theme.bootstrap.gradientBg(hoverBackground)};
            border-color: ${hoverBorder};
            ${focusBoxShadow(background, border, theme.bootstrap.variables.btnBoxShadow)};
        }

        // Disabled comes first so active can properly restyle
        &.disabled,
        &:disabled {
            color: ${colorYiq(background)};
            background-color: ${background};
            border-color: ${border};
            // Remove CSS gradients if they're enabled
            ${theme.bootstrap.enableGradients ? 'background-image: none' : ''};
        }

        &:not(:disabled):not(.disabled):active,
        &:not(:disabled):not(.disabled).active,
        .show > &.dropdown-toggle {
            color: ${colorYiq(activeBackground)};
            background-color: ${activeBackground};
            // Remove the gradient for the pressed/active state
            ${theme.bootstrap.enableGradients ? 'background-image: none' : ''};
            border-color: ${activeBorder};

            &:focus {
                ${focusBoxShadow(background, border, theme.bootstrap.variables.btnActiveBoxShadow)};
            }
        }
    `;
};

const outlineFocusBoxShadow = color => ({ theme }) => {
    if (theme.bootstrap.enableShadows && theme.bootstrap.variables.btnActiveBoxShadow) {
        return css`
            box-shadow: ${theme.bootstrap.variables.btnActiveBoxShadow},
                0 0 0 ${theme.bootstrap.variables.btnFocusWidth} ${rgba(color, 0.5)};
        `;
    }
    return css`
        box-shadow: 0 0 0 ${theme.bootstrap.variables.btnFocusWidth} ${rgba(color, 0.5)};
    `;
};

export const buttonOutlineVariant = (color, colorHover, activeBackground, activeBorder) => {
    colorHover = colorHover || colorYiq(color);
    activeBackground = activeBackground || color;
    activeBorder = activeBorder || color;

    return ({ theme }) => css`
        color: ${color};
        border-color: ${color};

        &:hover {
            color: ${colorHover};
            background-color: ${activeBackground};
            border-color: ${activeBorder};
        }

        &:focus,
        &.focus {
            box-shadow: 0 0 0 ${theme.bootstrap.variables.btnFocusWidth} ${rgba(color, 0.5)};
        }

        &.disabled,
        &:disabled {
            color: ${color};
            background-color: transparent;
        }

        &:not(:disabled):not(.disabled):active,
        &:not(:disabled):not(.disabled).active,
        .show > &.dropdown-toggle {
            color: ${colorYiq(activeBackground)};
            background-color: ${activeBackground};
            border-color: ${activeBorder};

            &:focus {
                // Avoid using mixin so we can pass custom focus shadow properly
                ${outlineFocusBoxShadow(color)};
            }
        }
    `;
};

export const buttonSize = (paddingY, paddingX, fontSize, lineHeight, borderRadius) => ({
    theme,
}) => css`
    padding: ${paddingY} ${paddingX};
    ${theme.bootstrap.fontSize(fontSize)};
    line-height: ${lineHeight};
    // Manually declare to provide an override to the browser default
    ${theme.bootstrap.borderRadius(borderRadius, 0)};
`;
