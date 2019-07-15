import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #60807e;
`;

export const FormWrapper = styled.div`
  border: 2px solid #b2c0bfa1;
  padding: 4px;
  width: 100%;
  border-radius: 3px;
`;

export const FormFrame = styled.div`
  border: 3px solid #f3f1f0;
  padding: 15px 30px 25px 30px;
  border-radius: 3px;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding: 6px 0 6px 0;
  height: 80px;
`;

export const Label = styled.label`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 45%;
  padding: 0 6px 0 6px;
  border: 1px rgba(37,132,126,0.46) solid;
  border-radius: 4px;
  color: #6c7c7b;
  
  :invalid {
    border: 1px rgba(220, 66, 77, 0.28) solid;
  }
`;

export const Button = styled.input`
  padding: 7px 16px;
  background: #70A19E;
  border: none;
  color: white;
  font-weight: 900;
  font-size: 17px;
  border: 2px solid #60807e45;
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
`;

export const SubmitButtonWrapper = styled(RowWrapper)`
  padding: 0;
  justify-content: flex-end;
  height: 70px;
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