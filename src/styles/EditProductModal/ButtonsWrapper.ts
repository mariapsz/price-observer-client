import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 350px;
  max-width: 90vw;
  justify-content: space-between;
  padding: 10px;
  align-self: flex-end;
  
  @media(max-width: 780px){
    align-self: center;
  }
`;