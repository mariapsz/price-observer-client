import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const TopBar = styled.div`
  height: 55px;
  max-height: 75px;
 // background: #2A615D;
  background: ${(props: StyledComponentsProps) => props.theme.pageWrapper.topBarBackground};
  padding: 10px 60px 10px 60px;
  display: flex;
  align-items: center;  
  justify-content: space-between;
  
  @media(max-width: 780px){
    padding: 10px 30px 10px 30px;
  }
  
  @media(max-device-width: 500px){
    padding: 10px 10px; 
    height: 45px;
  }
`;