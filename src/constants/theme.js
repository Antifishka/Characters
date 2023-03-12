export const breakpoints = ['360', '1440'];

export const theme = {
    colors: {
        mainText: 'rgba(0, 0, 0, 0.87)',
        secondaryText: 'rgba(0, 0, 0, 0.6)',
        accent: '#09b294',
        placeholder: 'rgba(0, 0, 0, 0.5);',
        background: '#e2e5e8',
        white: '#fff',
        black: '#000',
    },
    fonts: {
        roboto: "'Roboto', sans-serif",
        karla: "'Karla', sans-serif",
    },
    fontSizes: {
        xs: '14px',
        s: '16px',
        m: '18px',
        l: '20px',
        xl: '32px',
        xxl: '48px',
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
    },
    sizes: {
        minWidth: '256px',
        formWidth: '400px',
        mediumWidth: '512px',
        maxWidth: '768px',
    },
    borders: {
        normal: '1px solid rgba(0, 0, 0, 0.5)',
    },
    radii: {
        none: '0',
        normal: '4px',
        filter: '8px',
        round: '50%',
    },
    shadow: '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
    transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    mq: {
        mobileOnly: `@media screen and (max-width: ${+breakpoints[1] - 0.02}px)`,
        desktop: `@media screen and (min-width: ${breakpoints[1]}px)`,
    },
};