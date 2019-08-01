import {Theme} from './Theme';

const lightTheme: Theme = {
    button: {
        background: '#2d635f',
        backgroundOnHover: '#4ba29d',
        backgroundOnDisabled: '#70A19E',
        borderColor: 'rgb(24,99,93)',
        borderColorOnDisabled: '#60807e45',
        fontColor: 'white',
    },
    form: {
        labelFontColor: '#60807e',
        inputFontColor: '#697a79',
    },
    pageWrapper: {
        pageBackground: 'white',
        topBarBackground: '#2A615D',
    },
    productsList: {
        listHeaderBackground: '#F6FAFF',
        customCellBackground: 'rgba(216, 224, 234, 0.38)',
        headerCellBackground: '#39886f',
        headerCellBackgroundOnHover: '#51a78c',
        customFontColor: 'rgba(13, 29, 20, 0.69)',
        headerCellColor: '#fff',
        trashIconColor: 'rgb(255,190,158)',
    },
    sectionTitle: {
        fontColor: 'rgb(218, 113, 68)',
    },
    startPage: {
        buttonBorderColor: 'rgb(169, 142, 130)',
    },
    newProductConfirmation: {
        productNameLabelColor: '#c0663e',
        customLabelFontColor: '#71777a',
        productNameWrapperBackground: '#b0b5bd1f',
    }
};
export default lightTheme;