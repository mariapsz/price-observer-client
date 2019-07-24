import styled from 'styled-components';
import {Input} from './Input';

export const URLInput = styled(Input)`
  max-width: 550px;
  height: 40px;
  
  @media (max-width: 580px){
    width: 350px;
    height: 40px;
  }
  
  @media (max-width: 400px){
    width: 80vw;
    height: 40px;
  }
`;