import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  max-width: 80vw;
  display: flex;
  justify-content: space-around;
  padding: 10px 0 10px 130px;
  
  @media(max-width: 450px) {
    padding: 10px;
  }
`;