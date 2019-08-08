import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PageWrapper from '../../hoc/PageWrapper/PageWrapper';
import {SliderWrapper} from '../../styles/StartPage/SliderWrapper';
import {ButtonsWrapper} from '../../styles/StartPage/ButtonsWrapper';
import {Button} from '../../styles/StartPage/Button';
import {Slider} from '../../styles/StartPage/Slider';
import {Link} from 'react-router-dom';
import {Legend} from '../../styles/StartPage/Legend';

const slide1 = require('./SliderImages/slide1.png');
const slide2 = require('./SliderImages/slide2.png');
const slide3 = require('./SliderImages/slide3.png');
const slide4 = require('./SliderImages/slide4.png');
const slide5 = require('./SliderImages/slide5.png');

export default class StartPage extends React.Component {
    render() {
        return <PageWrapper isStartPage={true}>
            <SliderWrapper>
                <Slider
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                    interval={4400}
                    centerMode={false}
                >
                    <div>
                        <img src={slide1}/>
                        <Legend className="legend">
                            1. Wybierz interesujący Cię produkt na morele.net
                        </Legend>
                    </div>
                    <div>
                        <img src={slide2}/>
                        <Legend className="legend">
                            2. Skopiuj link do tego produktu...
                        </Legend>
                    </div>
                    <div>
                        <img src={slide3}/>
                        <Legend className="legend">
                            ...i wklej go do wyszukiwarki
                        </Legend>
                    </div>
                    <div>
                        <img src={slide4}/>
                        <Legend className="legend">
                            3. Określ cenę, przy której zdecydowałbyś się na kupno produktu
                        </Legend>
                    </div>
                    <div>
                        <img src={slide5}/>
                        <Legend className="legend">
                            4. Gdy produkt osiągnie oczewkiwaną cenę, my wyślemy maila z powiadomieniem
                        </Legend>
                    </div>
                </Slider>
            </SliderWrapper>
            <ButtonsWrapper>
                <Link to='login'>
                    <Button>
                        ZALOGUJ SIĘ
                    </Button>
                </Link>
                <Link to='rejestracja'>
                    <Button>
                        ZAREJESTRUJ SIĘ
                    </Button>
                </Link>
            </ButtonsWrapper>
        </PageWrapper>
    }
};