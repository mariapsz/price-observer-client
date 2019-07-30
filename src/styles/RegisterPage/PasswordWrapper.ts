import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const PasswordWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  width: 100%;
  height: 45%;
  padding: 0 6px 0 6px;
  border: ${(props: PasswordWrapperProps) => props.isPasswordCompleted ? '1px rgba(37,132,126,0.46) solid' : '1px rgba(220, 66, 77, 0.28) solid'}; 
  border-radius: 4px;
  color: ${(props: StyledComponentsProps) => props.theme.form.inputFontColor};
    
  :focus-within  {
    border: ${(props: PasswordWrapperProps) => props.isPasswordCompleted ? ' 1px rgb(32,102,80) solid' : '1px rgba(215,65,79,0.62) solid'}; 
    outline: none;
  }
`;

export interface PasswordWrapperProps extends StyledComponentsProps {
    isPasswordCompleted: boolean,
}