import styled from 'styled-components';

export const NickName = styled.div`
  font-size: 20px;
  color: #fff;
  display: flex;
  font-family: 'Raleway',sans-serif;
  align-items: center;
  padding: 0 15px; 
  
  @media(max-width: 780px){
    padding: 0 10px; 
  }
  
  @media(max-device-width: 430px){
    font-size: 20px;
    padding: 0 5px; 
  }
`;