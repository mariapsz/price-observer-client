import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SideBarWrapper = styled.div`
  width: 8vh;
  height: 100vh;
  background-color: #1e7c74;
`;

export const PageContentWrapper = styled.div`
  float: right;
  width: 90%;
`;

export const OpenNavBarIcon = styled.div`
  width: 100%;
  height: 10vh;
  display: inline-block;
  text-align: center;
`;

export const NavIcon = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
`;

export const LinkText = styled(Link)`
  text-decoration: none;
`;

export const Icon = styled.i`
  justify-self: center;
`;

export const PageWrapper = styled.div`
display: flex;
`;

