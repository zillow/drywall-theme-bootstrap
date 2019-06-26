import React from 'react';
import { ThemeProvider } from 'styled-components';
import Bootstrap from '../theme';

export default props => <ThemeProvider {...props} theme={Bootstrap} />;
