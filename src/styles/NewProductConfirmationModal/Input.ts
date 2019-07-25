import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Input = styled.input`
  width: 50px;
  padding: 6px;
  border: 1px rgba(37,132,126,0.46) solid;
  border-radius: 4px;
  color: ${(props: StyledComponentsProps) => props.theme.form.inputFontColor};
    
  :invalid:focus  {
    border: 1px rgba(215,65,79,0.62) solid;
    outline: none;
  }
  
  :focus  {
    border: 1px rgb(32,102,80) solid;
    outline: none;
  }
    
  :invalid {
    border: 1px rgb(255,121,79) solid;
  }
`;