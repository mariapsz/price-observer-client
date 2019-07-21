import styled from 'styled-components';

export const Icon = styled.i`
    font-size: 25px;
    color: #fff;
    -webkit-transition: color 0.3s;
    -moz-transition:    color 0.3s;
    -ms-transition:     color 0.3s;
    -o-transition:      color 0.3s;
    transition:         color 0.3s;
    padding: 0 15px;    
   
    :hover {
      color: rgb(255,190,158);
    }
    
    @media(max-width: 780px){
      padding: 0 10px; 
    }
    
    @media(max-device-width: 430px){
     font-size: 20px;
    }
`;
export const SettingsIcon = styled(Icon)`    
    :hover {
      -webkit-animation: fa-spin 8s infinite linear;
      animation: fa-spin 8s infinite linear;
    }
    
    @media(max-width: 780px){
      padding: 0 5px; 
    }
`;