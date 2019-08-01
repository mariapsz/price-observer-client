import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Label = styled.label`
  display: flex;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  color: ${(props: StyledComponentsProps) => props.theme.newProductConfirmation.customLabelFontColor};
  font-size: 16px;
  flex-basis: 50%;
  justify-content: flex-start;
  
  @media(max-width: 950px) {
    font-size: 14px;
  }  
`;

export const PriceLabel = styled(Label)`
    font-weight: 700;
    font-size: 20px;
    flex-basis: 50%;
      
  @media(max-width: 950px) {
    font-size: 16px;
  }  
`;

export const NameLabel = styled(Label)`
    font-weight: 700;
    width: 400px;
    font-size: 18px;
    flex-basis: 100%;
    color: ${(props: StyledComponentsProps) => props.theme.newProductConfirmation.productNameLabelColor};

  @media(max-width: 400px) {
    width: initial;
  }  
`;

export const PropertyLabel = styled(Label)`
    font-weight: 700;
`;