import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Button = styled.button`
  padding: 10px 16px; 
  width: 200px;
  background: ${(props: StyledComponentsProps) => props.theme.button.background};
  border: 2px solid ${(props: StyledComponentsProps) => props.theme.startPage.buttonBorderColor};
  color: ${(props: StyledComponentsProps) => props.theme.button.fontColor};
  font-weight: 900;
  font-size: 17px;
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
  margin: 20px;
  
  :hover {
    background: ${(props: StyledComponentsProps) => props.theme.button.backgroundOnHover};
    cursor: pointer;
  }
  
  :disabled {
    background: ${(props: StyledComponentsProps) => props.theme.button.backgroundOnDisabled};
    border: 2px solid ${(props: StyledComponentsProps) => props.theme.button.borderColorOnDisabled};
  }   
`;