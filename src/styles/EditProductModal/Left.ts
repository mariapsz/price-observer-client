import styled from 'styled-components';

export const Left = styled.div`
    text-align: center;
    background: rgb(245,245,245);
    width: 450px;
    height: 450px;
    max-height: 55vh;
    padding: 3px;
    
    @media(max-width: 450px) {
      max-height: 40vh;
    }  
    
    @media(max-width: 950px) {
      width: initial;
      height: 340px;
    }   
`;