import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Input = styled.input`
  width: 100%;
  height: 45%;
  padding: 0 6px 0 6px;
  border: 1px rgba(37,132,126,0.46) solid;
  border-radius: 4px;
  color: ${(props: StyledComponentsProps) => props.theme.form.inputFontColor};
    
  :invalid:focus  {
    border: 1px rgba(215,65,79,0.62) solid;
    outline: none;
    box-shadow: 0px 0px 6px rgba(215,65,79,0.62);
  }
  
  :focus  {
    border: 1px rgb(32,102,80) solid;
    outline: none;
    box-shadow: 0px 0px 6px rgba(32,102,80);
  }
    
  :invalid {
    border: 1px rgba(220, 66, 77) solid;
  }
`;