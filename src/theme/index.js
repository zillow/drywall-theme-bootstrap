import { withNamespace } from 'drywall';
import * as variables from './variables';
import * as buttonMixins from './mixins/buttons';
import * as boxShadowMixins from './mixins/boxShadow';
import * as transitionMixins from './mixins/transition';
import * as gradientMixins from './mixins/gradients';
import * as borderRadiusMixins from './mixins/borderRadius';
import * as rfsMixins from './mixins/rfs';
import Button from './Button';

const bootstrap = {
    enableShadows: false,
    enableGradients: false,
    enableTransitions: true,
    enableRounded: true,
    variables,
    ...buttonMixins,
    ...borderRadiusMixins,
    ...boxShadowMixins,
    ...gradientMixins,
    ...transitionMixins,
    ...rfsMixins,
    Button,
};

export default withNamespace({ bootstrap }, 'bootstrap');
