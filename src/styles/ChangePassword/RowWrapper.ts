import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 6px 0;
  height: 50px;
  
  @media(max-width: 500px){
    flex-direction: column;
    height: auto;
    padding-bottom: 15px;
  }
`;

export const SubmitButtonWrapper = styled(RowWrapper)`
  justify-content: flex-end;
  width: 500px;
  max-width: 80vw;
  
  @media(max-width: 500px){
    padding: 15px;
  }
`;