import styled from 'styled-components';

export const Frame = styled.div`
  border: 3px solid #f3f1f0;
  padding: 15px 30px 25px 30px;
  border-radius: 3px;
  margin: 10px 0;
  width: 80vw;
    
  @media(max-width: 600px) {
    width: 90vw;
    padding: 10px;
  }
    
  @media(min-width: 1200px) {
    max-width: 1400px;
  }  
`;

export const PostContainer = styled(Frame)`
    width: 95%;
    background: aliceblue;
    border-color: azure;
    font-family: 'Raleway', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #60807e;
`;