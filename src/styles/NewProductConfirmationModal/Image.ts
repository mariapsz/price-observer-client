import styled from 'styled-components';

export const Image = styled.img`
    height: 450px;
    object-fit: contain;
    width: 450px;
    background: rgb(245, 245, 245);
    vertical-align: middle;
    
    @media(max-width: 450px) {
      width: 340px;
      height: 340px;
    }  
`;