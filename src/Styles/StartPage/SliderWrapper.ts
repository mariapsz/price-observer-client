import styled from 'styled-components';

export const SliderWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    border-top: 10px solid #dfdddb;
    border-bottom: 10px solid #dfdddb;
    background: #264240;
    max-width: 2000px;
    border-radius: 5px;
    width: -webkit-fill-available;
    
    @media (max-width: 500px){
       padding: 25px 0 25px 0;
       border-top: 6px solid #dfdddb;
       border-bottom: 6px solid #dfdddb;
    }
`;