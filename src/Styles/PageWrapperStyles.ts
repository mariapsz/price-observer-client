import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PageContentWrapper = styled.div`
  flex: 1 1 100%;
  padding: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrivatePageContentWrapper = styled(PageContentWrapper)`
  align-items: flex-start;
`;

export const TopBarWrapper = styled.div`
  padding: 0 0 3px 0;
  border-bottom: 3px solid #FF8751;
`;

export const TopBar = styled.div`
  height: 55px;
  max-height: 75px;
  background: #2A615D;
  padding: 10px 60px 10px 60px;
  display: flex;
  align-items: center;  
  justify-content: space-between;
  
  @media(max-width: 780px){
    padding: 10px 30px 10px 30px;
  }
  
  @media(max-device-width: 430px){
    padding: 10px 10px; 
  }
`;

export const Title = styled.div`
 font-family: 'Russo One', sans-serif;
 color: white;
 font-size: 36px;
 
 @media(max-width: 780px){
  font-size: 30px;
 }
  
 @media(max-device-width: 400px){
  font-size: 20px;
 }
`;

export const UserPanel = styled.div`
  display: flex;
`;

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

