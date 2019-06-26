/* eslint zillow/import/prefer-default-export: 0 */

import { css } from 'styled-components';

export const boxShadow = (...shadows) => ({ theme }) => {
    if (theme.bootstrap.enableShadows) {
        return css`
            box-shadow: ${shadows.join(',')};
        `;
    }
    return null;
};
