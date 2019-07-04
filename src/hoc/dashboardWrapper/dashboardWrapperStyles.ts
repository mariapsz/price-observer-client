import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SideBarWrapper = styled.div`
  width: 10%;
`;

export const SideBarChildrenWrapper = styled.div`
  width: 10%;
  height: 100vh;
  background-color: #1e7c74;
`;

export const PageContentWrapper = styled.div`
  float: right;
  width: 90%;
`;

export const LinkIcon = styled(Link)`
  text-decoration: none;
  //width: 100%;
  //height: 10vh;
`;

export const LinkText = styled(Link)`
  text-decoration: none;
`;

export const Icon = styled.i`
  //width: inherit;
  //height: 10vh; 
`;

export const NavIcon = styled.div`
  width: 100%;
  height: 10vh;
  display: inline-block;
  text-align: center;
`;
