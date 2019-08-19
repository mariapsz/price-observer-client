import styled from 'styled-components';
import {DescriptionWrapper} from './DescriptionWrapper';

export const InputWrapper = styled(DescriptionWrapper)`
  flex-direction: row;
  height: auto;
  padding: 10px 0;  
  
  @media(max-width: 500px){
    flex-direction: column;
  }
`;