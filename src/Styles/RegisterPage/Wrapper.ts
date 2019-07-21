import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 0 0 100px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #60807e;
  
  @media (max-height: 700px){
    padding: 0;
  }
`;