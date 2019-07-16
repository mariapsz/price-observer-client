import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  padding: 0 0 100px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #60807e;
  
  @media (max-height: 700px){
    padding: 0;
  }
`;

export const FormWrapper = styled.div`
  border: 2px solid #b2c0bfa1;
  padding: 4px;
  width: 100%;
  border-radius: 3px;
  @media(max-width: 450px){
    border: none;
  }
`;

export const Frame = styled.div`
  border: 3px solid #f3f1f0;
  padding: 15px 30px 25px 30px;
  border-radius: 3px;
`;

export const InnerFrame = styled(Frame)`
  margin: 0;
`;

export const NewProductFormFrame = styled(Frame)`
  @media(max-width: 500px){
    padding: 10px;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding: 0 0 6px 0;
  height: 80px;
  width: 250px;
`;

export const Label = styled.label`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  color: #60807e;
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
  width: 450px;
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

export const SubmitButtonWrapper = styled(RowWrapper)`
  height: auto;
  padding: 20px 0 10px 0;
`;

export const LinkWrapper = styled.div`
  padding: 15px;
  font-family: 'Raleway', sans-serif;
`;

export const RegisterLink = styled(Link)`
  color: #FF8751;
`;

export const Message = styled.div`
  font-size: 13px;
  color: rgb(218, 113, 68);
`;

export const ResetPasswordLinkWrapper = styled.div`
  padding: 5px 0;
`;

export const MessageWrapper = styled.div`
  padding: 5px 0;
`;

export const ResetPasswordLink = styled(Link)`
  font-size: 13px;
  color: rgb(31,77,95);
`;

export const SectionTitle = styled.div`
  font-weight: 800;
  font-size: 22px;
  color: rgb(218, 113, 68);
  font-family: 'Raleway', sans-serif;
  padding: 0 0 10px 0;
`;

export const NewProductURLWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  @media (max-width: 850px){
    flex-direction: column;
    align-items: center;
  }
`;