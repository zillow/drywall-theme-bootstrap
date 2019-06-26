/* eslint zillow/import/prefer-default-export: 0 */

import { css } from 'styled-components';
import Color from 'color';

export const gradientBg = color => ({ theme }) => {
    if (theme.bootstrap.enableGradients) {
        const mixed = Color(theme.bootstrap.variables.bodyBg)
            .mix(Color(color), 0.15)
            .string();
        return css`
            background: ${color} linear-gradient(180deg, ${mixed}, ${color}) repeat-x;
        `;
    }
    return css`
        background: ${color};
    `;
};
