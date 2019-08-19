import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${ (props:StyledComponentsProps) => props.theme.pageWrapper.pageBackground};  
  cursor: ${(props: StyledComponentsProps) => props.promiseInProgress ? 'progress'  : 'initial'};  
`;