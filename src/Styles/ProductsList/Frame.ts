import styled from 'styled-components';

export const Frame = styled.div`
  border: 3px solid #f3f1f0;
  padding: 15px 30px 25px 30px;
  border-radius: 3px;
  margin: 10px 0;
  
  @media(min-width: 1200px) {
    max-width: 80vw;
  }
  
  @media(max-width: 600px) {
    padding: 10px 5px 5px 5px;
  }
`;