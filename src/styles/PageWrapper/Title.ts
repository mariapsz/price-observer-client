import styled from 'styled-components';

export const Title = styled.div`
 font-family: 'Russo One', sans-serif;
 color: white;
 font-size: 36px; 
 
 :hover {
  cursor: pointer;
  font-size: 37px;
 }
 
 @media(max-width: 780px){
  font-size: 30px;
   
  :hover {
     cursor: pointer;
     font-size: 31px;
  }
 }
  
 @media(max-device-width: 400px){
  font-size: 20px;
  
  :hover {
      cursor: pointer;
      font-size: 21px;
  }
 }
`;