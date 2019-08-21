import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const PasswordWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  width: 100%;
  height: 45%;
  padding: 0 6px 0 6px;
  border: ${(props: PasswordWrapperProps) => props.isPasswordCompleted ? '1px rgba(37,132,126,0.46) solid' : '1px rgba(220, 66, 77) solid'}; 
  border-radius: 4px;
  color: ${(props: StyledComponentsProps) => props.theme.form.inputFontColor};
    
  :focus-within  {
    border: ${(props: PasswordWrapperProps) => props.isPasswordCompleted ? ' 1px rgb(32,102,80) solid' : '1px rgba(215,65,79,0.62) solid'}; 
    outline: none;
    box-shadow:${(props: PasswordWrapperProps) => props.isPasswordCompleted ? '0px 0px 6px rgba(32,102,80)' : '0px 0px 6px rgba(215,65,79,0.62)'} ;
  }
`;

export interface PasswordWrapperProps extends StyledComponentsProps {
    isPasswordCompleted: boolean,
}