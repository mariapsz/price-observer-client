import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const Title = styled.div`
  font-weight: 800;
  font-size: 18px;
  color: ${(props: StyledComponentsProps) => props.theme.sectionTitle.fontColor};
  font-family: 'Raleway', sans-serif;
  padding: 8px 0 10px 0;
  
  @media(max-width: 600px) {
    padding: 0 0 10px 5px;
  }
  
  @media(max-width: 500px) {
    font-size: 17px;
  }
`;