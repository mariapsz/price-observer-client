export interface Theme {
    button: ButtonStyles,
    productsList: ProductsListStyles,
    form: FormStyles,
    pageWrapper: PageWrapperStyles,
    sectionTitle: SectionTitleStyles,
    startPage: StartPageStyles,
    newProductConfirmation: NewProductConfirmationDialogStyles,
}

interface ButtonStyles {
    background: string,
    backgroundOnHover: string,
    backgroundOnDisabled: string,
    fontColor: string,
    borderColor: string,
    borderColorOnDisabled: string,
}

interface ProductsListStyles {
    customCellBackground: string,
    headerCellBackground: string,
    headerCellBackgroundOnHover: string,
    customFontColor: string,
    headerCellColor: string,
    listHeaderBackground: string,
    trashIconColor: string,
}

interface FormStyles {
    labelFontColor: string,
    inputFontColor: string,
}

interface PageWrapperStyles {
    topBarBackground: string,
    pageBackground: string,
}

interface SectionTitleStyles {
    fontColor: string,
}

interface StartPageStyles {
    buttonBorderColor: string,
}

interface NewProductConfirmationDialogStyles {
    productNameLabelColor: string,
    productNameWrapperBackground: string,
    customLabelFontColor: string,

}