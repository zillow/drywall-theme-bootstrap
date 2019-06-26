/* eslint no-param-reassign: 0 */

import Color from 'color';
import { css } from 'styled-components';
import { yiqTextDark, yiqTextLight, yiqContrastedThreshold } from '../variables';

const colorYiq = (color, dark = yiqTextDark, light = yiqTextLight) => {
    const c = Color(color);
    const r = c.red();
    const g = c.green();
    const b = c.blue();

    const yiq = (r * 299 + g * 587 + b * 114) / 1000;

    if (yiq >= yiqContrastedThreshold) {
        return dark;
    }
    return light;
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
            // Avoid using mixin so we can pass custom focus shadow properly
            //@if $enable-shadows {
            //    box-shadow: $btn-box-shadow,
            //        0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), 0.5);
            //} @else {
            //    box-shadow: 0
            //        0
            //        0
            //        $btn-focus-width
            //        rgba(mix(color-yiq($background), $border, 15%), 0.5);
            //}
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
                // Avoid using mixin so we can pass custom focus shadow properly
                //@if $enable-shadows and $btn-active-box-shadow != none {
                //    box-shadow: $btn-active-box-shadow,
                //        0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), 0.5);
                //} @else {
                //    box-shadow: 0
                //        0
                //        0
                //        $btn-focus-width
                //        rgba(mix(color-yiq($background), $border, 15%), 0.5);
                //}
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
