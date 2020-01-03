import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Label = styled.label`
  flex-basis: 200px;
  height: 40%;
  display: flex;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  color: ${(props: StyledComponentsProps) => props.theme.form.labelFontColor};
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
`;

export const InfoLabel = styled(Label)`
  font-size: 13px;
  flex-basis: 400px;
`;