import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const TrashIcon = styled.i`
    font-size: 25px;
    color: #b69a74;
    -webkit-transition: color 0.3s;
    -moz-transition:    color 0.3s;
    -ms-transition:     color 0.3s;
    -o-transition:      color 0.3s;
    transition:         color 0.3s;
   
    :hover {
      color: ${(props: StyledComponentsProps) => props.theme.productsList.trashIconColor};
      cursor: pointer;
    }
    
    @media(max-device-width: 430px){
     font-size: 20px;
    }
`;