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
  font-size: 16px;
`;