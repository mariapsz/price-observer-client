import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const TopBarWrapper = styled.div`
  padding: 0 0 3px 0;
  border-bottom: 3px solid #FF8751;
  pointer-events: ${(props: StyledComponentsProps) => props.promiseInProgress ? 'none' : 'initial'};
`;