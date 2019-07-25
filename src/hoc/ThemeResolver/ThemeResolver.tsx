import {ThemeProvider} from 'styled-components';
import * as React from 'react';
import lightTheme from '../../styles/Theme/lightTheme';
import darkTheme from '../../styles/Theme/darkTheme';

export const ThemeResolver = (props: {children: React.ReactChild}) => {
    const themeType = 'light';
    // @ts-ignore
    const theme = themeType === 'light' ? lightTheme : darkTheme;
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
