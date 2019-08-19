import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Label = styled.label`
  width: 450px;
  max-width: 80vw;
  height: 40%;
  display: flex;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  color: ${(props: StyledComponentsProps) => props.theme.form.labelFontColor};
  font-size: 14px;
`;

export const EmailLabel = styled(Label)`
  flex-basis: 25%;
  width: auto;
  font-size: 15px;
    
  @media(max-width: 500px){
    align-self: flex-start;
    padding: 20px 0 10px 0;
  }
`;