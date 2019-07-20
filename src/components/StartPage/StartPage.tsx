import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import PageWrapper from '../../hoc/PageWrapper/PageWrapper';
import {SliderWrapper} from './StartPageStyles';

const slide1 = require('./SliderImages/slide1.png');
const slide2 = require('./SliderImages/slide2.png');
export default class StartPage extends Component {
    render() {
        return (
            <PageWrapper>
                <SliderWrapper>
                    <Carousel
                        showThumbs={false}
                        infiniteLoop
                        autoPlay
                        interval={3000}
                        width='80vw'
                    >
                        <div>
                            <img src={slide1}/>
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src={slide2}/>
                            <p className="legend">Legend 2</p>
                        </div>
                    </Carousel>
                </SliderWrapper>
            </PageWrapper>
        );
    }
};