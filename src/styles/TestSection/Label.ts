import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  color: ${(props: StyledComponentsProps) => props.theme.form.labelFontColor};
  font-size: 13px;
`;

//TO DO => change name
export const LabelWithPadding = styled(Label)`
  padding-bottom: 10px;
`;

export const MainLabel = styled(Label)`
  font-size: 15px;
`;