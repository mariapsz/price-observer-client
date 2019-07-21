import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  
  @media(max-width: 500px){
    flex-direction: column;
  }
`;