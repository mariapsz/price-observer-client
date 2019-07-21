import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Button = styled.input`
  padding: 7px 16px; 
  background: ${(props: StyledComponentsProps) => props.theme.button.background} ;
  border: 2px solid ${(props: StyledComponentsProps) => props.theme.button.borderColor};
  color: ${(props: StyledComponentsProps) => props.theme.button.fontColor};
  font-weight: 900;
  font-size: 17px;
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
  
  :hover {
    background: ${(props: StyledComponentsProps) => props.theme.button.backgroundOnHover};
    cursor: pointer;
  }
  
  :disabled {
    background: ${(props: StyledComponentsProps) => props.theme.button.backgroundOnDisabled};
    border: 2px solid ${(props: StyledComponentsProps) => props.theme.button.borderColorOnDisabled};
  }   
`;

export const FindProductButton = styled(Button)`
    height: 40px;
    margin-left: 30px;
    
    @media (max-width: 850px){
      margin: 20px;
      width: fit-content;
      align-self: flex-end;
    }
`;