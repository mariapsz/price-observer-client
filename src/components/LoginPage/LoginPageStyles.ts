import styled from 'styled-components';

export const LoginWrapper = styled.div`
  height: 40vh;
  width: 47vh;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`;

export const FormWrapper = styled.div`
  border: 2px solid #719593;
  width: 100%;
  max-width: 400px;
  max-height: 410px;
`;

export const FormFrame = styled.div`
  border: 3px solid #FFE3D7;
  margin: 2px;
  padding: 3vh 0 1vh 0;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 1vh 0 1vh 0;
  height: 10vh;
  max-height: 130px;
`;

export const Label = styled.label`
  width: 100%;
  height: 40%;
  max-width: 250px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 45%;
  max-width: 250px;
  padding: 0 6px 0 6px;
  border: 2px rgba(37,132,126,0.46) solid;
  :invalid {
    border: 2px rgba(220,66,77,0.6) solid;
  }
`;

export const Button = styled.input`
  height: 50%;
  width: 55%;
  background: #70A19E;
  border: none;
  color: white;
  font-weight: 900;
  font-size: large;
`;

export const SubmitButtonWrapper = styled(RowWrapper)`
  padding: 0 0 1vh 0;
`;

export const LinkWrapper = styled.div`
  padding: 2vh;
`;