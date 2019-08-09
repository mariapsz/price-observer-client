import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
`;

export const FirstRowWrapper = styled(RowWrapper)`
  height: 25%;
`;

export const SecondRowWrapper = styled(RowWrapper)`
  height: 50%;
`;

export const TestButtonWrapper = styled(RowWrapper)`
  align-items: flex-start;
  padding-left: 10px;
`;