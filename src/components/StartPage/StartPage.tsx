import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PageWrapper from '../../hoc/PageWrapper/PageWrapper';
import {SliderWrapper} from '../../styles/StartPage/SliderWrapper';
import {ButtonsWrapper} from '../../styles/StartPage/ButtonsWrapper';
import {Button} from '../../styles/StartPage/Button';
import {Slider} from '../../styles/StartPage/Slider';
import {Link, Redirect} from 'react-router-dom';
import {checkCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN} from '../../config';

const slide1 = require('./SliderImages/slide1.png');
const slide2 = require('./SliderImages/slide2.png');

export default class StartPage extends Component {
    render() {
        return <div>
                {checkCookie(COOKIE_NAME_TOKEN) ?  <Redirect to='/home'/>
                    :
                    <PageWrapper isStartPage={true}>
                        <SliderWrapper>
                            <Slider
                                showThumbs={false}
                                infiniteLoop
                                autoPlay
                                interval={3000}
                                centerMode={true}
                            >
                                <div>
                                    <img src={slide1}/>
                                </div>
                                <div>
                                    <img src={slide2}/>
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
                    </PageWrapper>}
            </div>
    }
};