import styled from 'styled-components';

export const NewProductURLWrapper = styled.div`
  display: flex;
  padding-top: 20px;

  @media (max-width: 850px){
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
  }
`;