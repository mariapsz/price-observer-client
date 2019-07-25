import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 6px 0;
  height: 80px;
`;

export const SubmitButtonWrapper = styled(RowWrapper)`
  height: auto;
  padding: 20px 0 10px 0;  
  width: 260px;
`;