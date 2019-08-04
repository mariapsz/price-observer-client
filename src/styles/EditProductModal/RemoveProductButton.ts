import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const RemoveProductButton = styled.button`
  width: 100px;
  padding: 7px 16px; 
  background: #ff3a35;;
  border: 2px solid #b0423a;
  color: ${(props: StyledComponentsProps) => props.theme.button.fontColor};
  font-weight: 900;
  font-size: 12px;
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
  
  :hover {
    background: #d7746c;
    cursor: pointer;
  }
  
  :disabled {
    background: ${(props: StyledComponentsProps) => props.theme.button.backgroundOnDisabled};
    border: 2px solid ${(props: StyledComponentsProps) => props.theme.button.borderColorOnDisabled};
  }   
`;