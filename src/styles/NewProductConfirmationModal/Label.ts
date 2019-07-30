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
`;

export const PriceLabel = styled(Label)`
    font-weight: 700;
    font-size: 20px;
    flex-basis: 50%;
`;

export const NameLabel = styled(Label)`
    font-weight: 700;
    font-size: 18px;
    flex-basis: 100%;
    color: ${(props: StyledComponentsProps) => props.theme.newProductConfirmation.productNameLabelColor};
`;