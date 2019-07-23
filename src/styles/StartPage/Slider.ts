import styled from 'styled-components';
import {Carousel} from 'react-responsive-carousel';

export const Slider = styled(Carousel)`
  width: 80vw;

  @media(max-width: 500px){
    width: 100%;
  }
`;