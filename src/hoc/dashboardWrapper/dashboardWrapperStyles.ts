import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const SideBarWrapper = styled.div`
  z-index: 2;
  flex: 0 1 7vh;
  height: 100vh;
  background-color: #1e7c74;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PageContentWrapper = styled.div`
  flex: 1 1 100%;
  padding: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideBarNavElement = styled(Link)`
  text-decoration: none;
  display: table-cell;
  text-align: center;
  :hover{
    background-color: #30cbc2;
  }
`;


export const TopBarWrapper = styled.div`
  padding: 0 0 5px 0;
  border-bottom: 3px solid #FF8751;
`;

export const TopBar = styled.div`
  height: 70px;
  max-height: 75px;
  background: #2A615D;
`;

export const Title = styled.div`
 font-family: 'Russo One', sans-serif;
 color: white;
`;
