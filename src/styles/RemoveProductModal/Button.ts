import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Button = styled.button`
  width: 120px;
  padding: 2px 16px; 
  background: ${(props: StyledComponentsProps) => props.theme.button.background};
  border: 2px solid ${(props: StyledComponentsProps) => props.theme.button.borderColor};
  color: ${(props: StyledComponentsProps) => props.theme.button.fontColor};
  font-weight: 900;
  font-size: 11px;
  border-radius: 2px;
  
  :hover {
    background: ${(props: StyledComponentsProps) => props.theme.button.backgroundOnHover};
    cursor: pointer;
  }
  
  :disabled {
    background: ${(props: StyledComponentsProps) => props.theme.button.backgroundOnDisabled};
    border: 2px solid ${(props: StyledComponentsProps) => props.theme.button.borderColorOnDisabled};
  }    
    
  @media(max-width: 450px) {
    font-size: 10px;
  }
`;

export const SubmitButton = styled(Button)`
    background: #e85e56;
    border: 2px solid #b1453c;
    :hover {
      background: #e8877e;
    }
`;