const path = require('path');
const { createStyleguideConfig } = require('create-react-styleguide');

module.exports = createStyleguideConfig({
    sections: [{
        name: 'Releases ↗',
        href: 'https://github.com/zillow/drywall-theme-bootstrap/blob/master/CHANGELOG.md',
        external: true
    }, {
        name: 'Introduction',
        content: 'README.md'
    }],
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguidist/ThemeWrapper'),
    },
    getComponentPathLine: componentPath => {
        const name = path.basename(componentPath, '.jsx');

        let module = 'drywall-theme-bootstrap';
        if (componentPath.indexOf('node_modules/drywall') === 0) {
            module = 'drywall';
        }

        return `import { ${name} } from '${module}';`;
    },
}, {
    styleguides: [
        'drywall'
    ],
});
