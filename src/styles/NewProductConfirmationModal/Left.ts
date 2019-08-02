import styled from 'styled-components';

export const Left = styled.div`
    text-align: center;
    background: rgb(245,245,245);
    height: 450px;
    max-height: 55vh;
    object-fit: contain;
    width: 450px;
    
    @media(max-width: 450px) {
      max-height: 40vh;
    }  
    
    @media(max-width: 950px) {
      width: 340px;
      height: 340px;
    }   
`;