import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Label = styled.label`
  flex-basis: 200px;
  height: 40%;
  display: flex;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  color: ${(props: StyledComponentsProps) => props.theme.form.labelFontColor};
  font-size: 16px;
  font-weight: 600;
  
  @media(max-width: 500px){
    font-size: 15px;
    flex-basis: 40px;
    align-self: flex-start;
  }
`;