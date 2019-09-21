import ReactGA from 'react-ga';

export function initializeReactGA() {
    ReactGA.initialize('', {
        debug: true,
    });
}

export const GAEvent = (category: any, action: any, label: any) => {
    ReactGA.event({
        category,
        action,
        label
    });
};