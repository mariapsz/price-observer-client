import styled from 'styled-components';

export const SliderWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    border-top: 5px solid #dfdddb;
    border-bottom: 5px solid #dfdddb;
    background: #1d2928;
    max-width: 2000px;
    border-radius: 5px;
    width: -webkit-fill-available;
    
    @media (max-width: 500px){
       padding: 25px 0 25px 0;
       border-top: 3px solid #dfdddb;
       border-bottom: 3px solid #dfdddb;
    }
`;