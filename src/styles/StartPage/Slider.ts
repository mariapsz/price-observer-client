import styled from 'styled-components';
import {Carousel} from 'react-responsive-carousel';

export const Slider = styled(Carousel)`
  width: 70vw;
  max-width: 1500px;

  @media(max-width: 500px){
    width: 100%;
  }
`;