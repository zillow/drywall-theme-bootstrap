/* eslint zillow/import/prefer-default-export: 0, no-param-reassign: 0 */

import { css } from 'styled-components';

export const borderRadius = (radius, fallbackBorderRadius = false) => ({ theme }) => {
    radius = radius || theme.bootstrap.variables.borderRadius;

    if (theme.bootstrap.enableRounded) {
        return css`
            border-radius: ${radius};
        `;
    }
    if (fallbackBorderRadius) {
        return css`
            border-radius: ${fallbackBorderRadius};
        `;
    }

    return null;
};
