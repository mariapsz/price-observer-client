import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SideBarWrapper = styled.div`
  width: 10%;
`;

export const PageContentWrapper = styled.div`
  float: right;
  width: 90%;
`;

export const LinkIcon = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
`;

export const LinkText = styled(Link)`
  text-decoration: none;
`;

export const Icon = styled.i`
  width: 100%;
  height: 100%;
`;
