import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  flex-basis: 15%;
  align-items: center;
  justify-content: center;
  padding: 0 0 6px 0;
  width: 100%;
  height: auto;
`;

export const SubmitButtonWrapper = styled(RowWrapper)`
  padding: 20px 0 10px 0;  
  width: 260px;
`;

export const ProductNameRowWrapper = styled(RowWrapper)`
    flex-basis: 20%;
    justify-content: flex-start;
`;