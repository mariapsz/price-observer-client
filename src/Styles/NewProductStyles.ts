import styled from 'styled-components';
import * as asd from 'styled-components';

export const Frame = styled.div`
  border: 3px solid #f3f1f0;
  padding: 15px 30px 25px 30px;
  border-radius: 3px;
  @media(max-width: 600px){
    padding: 15px;
  }
`;

export const NewProductFormFrame = styled(Frame)`
  @media(max-width: 500px){
    padding: 10px;
  }
`;

export const Label = styled.label`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  color: #60807e;
  font-size: 13px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45%;
  padding: 0 6px 0 6px;
  border: 1px rgba(37,132,126,0.46) solid;
  border-radius: 4px;
  color: #6c7c7b;
  
  :invalid:focus  {
    border: 1px rgba(215,65,79,0.62) solid;
    outline: none;
  }
  
  :focus  {
    border: 1px rgb(32,102,80) solid;
    outline: none;
  }
    
  :invalid {
    border: 1px rgba(220, 66, 77, 0.28) solid;
  }
`;

export const URLInput = styled(Input)`
  width: 550px;
  height: 40px;
  
  @media (max-width: 580px){
    width: 350px;
    height: 40px;
  }
  
  @media (max-width: 400px){
    width: 80vw;
    height: 40px;
  }
`;

export const Button = styled.input`
  padding: 7px 16px; 
  background: #2d635f;
  border: 2px solid rgb(24,99,93);
  color: white;
  font-weight: 900;
  font-size: 17px;
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
  
  :hover {
    background: #4ba29d;
    cursor: pointer;
  }
  
  :disabled {
    background: #70A19E;
    border: 2px solid #60807e45;
  }   
`;

export const FindProductButton = styled(Button)`
    height: 40px;
    margin-left: 30px;
    
    @media (max-width: 850px){
      margin: 20px;
      width: fit-content;
      align-self: flex-end;
    }
`;

export const NewProductURLWrapper = styled.div`
  display: flex;
  padding-top: 20px;

  @media (max-width: 850px){
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
  }
`;