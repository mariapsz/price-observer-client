import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 0 6px 0;
`;

export const EmailInfoWrapper = styled(RowWrapper)`
  height: auto;
`;

export const SubmitButtonWrapper = styled(RowWrapper)`
  justify-content: flex-end;
`;