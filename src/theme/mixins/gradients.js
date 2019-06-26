/* eslint zillow/import/prefer-default-export: 0 */

import { css } from 'styled-components';
import { mix } from '../util';

export const gradientBg = color => ({ theme }) => {
    if (theme.bootstrap.enableGradients) {
        const mixed = mix(theme.bootstrap.variables.bodyBg, color, 0.15);
        return css`
            background: ${color} linear-gradient(180deg, ${mixed}, ${color}) repeat-x;
        `;
    }
    return css`
        background: ${color};
    `;
};
