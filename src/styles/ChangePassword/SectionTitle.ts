import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const SectionTitle = styled.div`
  font-weight: 800;
  font-size: 18px;
  color: ${(props: StyledComponentsProps) => props.theme.sectionTitle.fontColor};
  font-family: 'Raleway', sans-serif;
  padding: 20px 0 10px 0;
    
  @media(max-width: 500px) {
    font-size: 15px;
  }
`;