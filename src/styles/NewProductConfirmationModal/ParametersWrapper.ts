import styled from 'styled-components';

export const ParametersWrapper = styled.div`
  flex-basis: 100%;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 15px 0;
    
  @media(max-width: 950px) {
    height: 350px;
  }
`;