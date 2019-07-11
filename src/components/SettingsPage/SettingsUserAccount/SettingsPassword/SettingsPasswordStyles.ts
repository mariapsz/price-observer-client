import styled from 'styled-components';


export const FormRow = styled.div`
    display: grid; 
`;

export const RowLabel = styled.label`
  color: #9FAECD;
  padding: 2% 0 1% 0;
`;

export const Input = styled.input`
  border: none;
  width: 60%;
  color: #6F7F9E;
  border-bottom: 1px solid  #9FAECD;
   :focus {
   outline-width: 0;
   }
   :invalid {
   border-color: #E65A8A;
   }
`;

export const Form = styled.form`
  width: 100%;
`;

export const RowWrapper = styled.div`
  height: 80%;
  padding: 1% 0 0 0;
  display: inherit;
`;

export const FormWrapper = styled.div`
    height: 40vh;
    width: 80vh;
    padding: 1vh 0;
    display: flex;
`;

export const InputWrapper = styled.div`
    display: inline-flex;
`;

export const SubmitButton = styled.input`
    width: 20vh;
    height: 6vh;
    border-radius: 20%/50%;
    border: none;
    color: white;
    background-color: #00E1BB;
`;

export const ErrorMessage = styled.div`
    position: relative;
    background: #FCEBF1;    
    padding: 3%;
    font-size: 0.8rem;
    border-radius: 7%/70%;
    color: #E65A8A;
    
    :after, :before {
      right: 99%;
      border: solid transparent;
      content: "";
      position: absolute;
    }
    
    :before {
      border-right-color: #FCEBF1;
    }
    
    :after {
      border-right-color: #FCEBF1;
      border-width: 0.4rem;
      top: 32%;
    }
`;

export const ErrorMessageWrapper = styled.div`
    width: 40%;
    float: right;
    position: relative;
    right: -4%;
`;