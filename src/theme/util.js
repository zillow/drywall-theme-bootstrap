import Color from 'color';
import { yiqTextDark, yiqTextLight, yiqContrastedThreshold } from './variables';

export const colorYiq = (color, dark = yiqTextDark, light = yiqTextLight) => {
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

export const rgba = (color, fade) =>
    Color(color)
        .fade(fade)
        .string();

export const mix = (color1, color2, fade) =>
    Color(color2)
        .mix(Color(color1), fade)
        .string();
