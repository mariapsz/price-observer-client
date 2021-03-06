import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 6px 0;
  height: 50px;
`;

export const EmailInfoWrapper = styled(RowWrapper)`
  height: auto;
`;

export const SubmitButtonWrapper = styled(RowWrapper)`
  height: auto;
  padding: 20px 0 10px 0;  
  width: 260px;
`;