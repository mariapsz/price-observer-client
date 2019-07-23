import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Label = styled.label`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  color: ${(props: StyledComponentsProps) => props.theme.form.labelFontColor};
  font-size: 13px;
`;