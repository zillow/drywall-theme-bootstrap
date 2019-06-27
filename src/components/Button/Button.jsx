import { Button as DrywallButton } from 'drywall';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * A drywall `<Button>` extended to include bootstrap prop types and defaults.
 */
const Button = styled(DrywallButton)``;

Button.propTypes = {
    appearance: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ]),
    buttonSize: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['default', 'outline']),
};

Button.defaultProps = {
    appearance: 'primary',
    buttonSize: 'md',
    variant: 'default',
};

/** @component */
export default Button;
