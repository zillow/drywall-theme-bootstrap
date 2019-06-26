/* eslint zillow/import/prefer-default-export: 0 */

import { css } from 'styled-components';

export const transition = t => ({ theme }) => {
    if (theme.bootstrap.enableTransitions) {
        return css`
            transition: ${t || theme.bootstrap.variables.transitionBase};
        `;
    }
    return null;
};
