import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const PageContentWrapper = styled.div`
  flex: 1 1 100%;
  padding: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBarWrapper = styled.div`
  padding: 0 0 3px 0;
  border-bottom: 3px solid #FF8751;
`;

export const TopBar = styled.div`
  height: 70px;
  max-height: 75px;
  background: #2A615D;
  padding: 10px 60px 10px 60px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
 font-family: 'Russo One', sans-serif;
 color: white;
 font-size: 36px;
`;
