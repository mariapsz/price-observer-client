import {AppState} from '../../../redux/store/storeDataModels/AppState';
import {connect} from 'react-redux';
import * as React from 'react';
import {Frame} from '../../../styles/TestSection/Frame';
import {Button} from '../../../styles/TestSection/Button';
import {Label, LabelWithPadding, MainLabel} from '../../../styles/TestSection/Label';
import {SectionTitle, SubSectionTitle} from '../../../styles/TestSection/SectionTitle';
import {TestSectionProps} from './TestSectionProps';
import {AddProductRequest} from '../../../dataModels/requests/AddProductRequest';
import {trackPromise} from 'react-promise-tracker';
import {addProductService} from '../../../services/productService';
import {ProductData} from '../../../dataModels/ProductData';
import {SubsectionWrapper} from '../../../styles/TestSection/SubsectionWrapper';
import {FirstRowWrapper, RowWrapper, SecondRowWrapper, TestButtonWrapper} from '../../../styles/TestSection/RowWrapper';
import {TestingOptionsWrapper} from '../../../styles/TestSection/TestingOptionsWrapper';

const TestSection = (props: TestSectionProps) => {

    const testPriceNotification = () => {
        const product: ProductData = {
            URL: "https://www.morele.net/ladowarka-varta-mini-charger-2x-aa-57646-847398/",
            category: "Ładowarki do akumulatorów (AA i AAA)",
            currentPrice: {count: 24.68, currency: "zł"},
            imgSrc: "https://images.morele.net/i1064/847398_0_i1064.jpeg",
            name: "Ładowarka Varta Mini charger 2x AA (57646)",
            productId: "847398",
            shopName: "morele",
            usersDetails: [{expectedPrice: {count: "1000000", currency: "zł"}}],
        };
        addProduct(product);
    };

    const testPriceUpdate = () => {
        const product: ProductData = {
            URL: "https://www.morele.net/smartband-xiaomi-mi-band-3-xmsh05hm-4142387/",
            category: "Smartbandy",
            currentPrice: {count: 1000000.00, currency: "zł"},
            imgSrc: "https://images.morele.net/i1064/4142387_10_i1064.jpg",
            name: "Smartband Xiaomi Mi Band 3 (XMSH05HM)",
            productId: "4142387",
            shopName: "morele",
            usersDetails: [{expectedPrice: {count: "1", currency: "zł"}}],
        };
        addProduct(product);
    };

    const addProduct = (product: ProductData) => {
        const request: AddProductRequest = {
            body: product,
            token: props.store.login.token!,
        };

        trackPromise(
            addProductService(request).then((response: any) => {
                    if (response.statusCode === 200) {
                        alert('Test rozpoczęty!');
                        props.handleProductsListChanges();
                        return;
                    }
                    if (response && response.body.message === 'USER_ALREADY_ASSIGNED_TO_PRODUCT') {
                        alert('Test już został rozpoczęty, prosimy czekać');
                        return;
                    }
                    alert('Wystąpił błąd, prosimy spróbować później');
                }
            ), 'pageWrapper');
    };

    return <Frame>
        <SectionTitle>TESTOWANIE SERWISU MONITORUJĄCEGO CENY</SectionTitle>
        <SubsectionWrapper>
            <MainLabel>
                Ze względu na trudność pokazania na prawdziwych danych działania części aplikacji odpowiedzialnej za
                aktualizację cen produktów i powiadomienia użytkownika (trzeba byłoby czekać na zmianę
                cen na morele.net), dodałam możliwość testowania tych funkcjonalności
                na częściowo sztucznych danych (produkt faktycznie istnieje i jest dostępny w sklepie internetowym,
                w zależności od testu zostaje zmieniona jego obecna lub oczekiwana cena).
            </MainLabel>
        </SubsectionWrapper>
        <TestingOptionsWrapper>
            <SubsectionWrapper>
                <SubSectionTitle>TESTUJ POWIADOMIENIE O CENIE PRODUKTU</SubSectionTitle>
                <FirstRowWrapper>
                    <Label>
                        Do serwera zostanie wysłane zapytanie o dodanie do listy Twoich produktów nowego produktu,
                        którego cena oczekiwana jest wyższa od ceny produktu w sklepie
                        (użytkownik nie jest w stanie z poziomu formularza dodać takiego produktu).
                    </Label>
                </FirstRowWrapper>
                <SecondRowWrapper>
                    <LabelWithPadding><strong>Działanie aplikacji: </strong></LabelWithPadding>
                    <Label>
                        Do listy Twoich produktów zostanie dodany nowy produkt.
                        Po około 10 minutach powinna przyjść wiadomość na użyty w aplikacji adres mailowy z
                        powiadomieniem
                        o obniżeniu ceny produktu do ceny mniejszej bądź równej cenie oczekiwanej.
                        Ponieważ produkt osiągnie cenę oczekiwaną, to zostanie usunięty z listy Twoich produktów.
                        Po otrzymaniu wiadomości e-mail należy odświeżyć tę stronę, żeby załadować aktualne dane.
                    </Label>
                </SecondRowWrapper>
                <TestButtonWrapper>
                    <Button
                        onClick={testPriceNotification}>
                        TESTUJ
                    </Button>
                </TestButtonWrapper>
            </SubsectionWrapper>
            <SubsectionWrapper>
                <SubSectionTitle>TESTUJ AKTUALIZACJĘ CENY PRODUKTU</SubSectionTitle>
                <FirstRowWrapper>
                    <Label>
                        Do serwera zostanie wysłane zapytanie o dodanie do listy Twoich produktów nowego produktu,
                        którego cena aktualna jest różna od faktycznej ceny produktu w sklepie
                        (jednocześnie cena oczekiwana jest większa od faktycznej ceny produktu).
                    </Label>
                </FirstRowWrapper>
                <SecondRowWrapper>
                    <LabelWithPadding><strong>Działanie aplikacji: </strong></LabelWithPadding>
                    <Label>
                        Do listy Twoich produktów zostanie dodany nowy produkt.
                        Po około 10 minutach po odświeżeniu strony, cena nowo dodanego produktu powinna się zmienić.
                    </Label>
                </SecondRowWrapper>
                <TestButtonWrapper>
                    <Button
                        onClick={testPriceUpdate}>
                        TESTUJ
                    </Button>
                </TestButtonWrapper>
            </SubsectionWrapper>
        </TestingOptionsWrapper>
    </Frame>
};

const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(TestSection);