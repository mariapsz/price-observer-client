import styled from 'styled-components';
import {StyledComponentsProps} from './StyledComponentsProps';

export const SectionTitle = styled.div`
  font-weight: 800;
  font-size: 22px;
  color: ${(props: StyledComponentsProps) => props.theme.sectionTitleFontColor};
  font-family: 'Raleway', sans-serif;
  padding: 0 0 10px 0;
  
  @media(max-width: 600px) {
    padding: 0 0 10px 5px;
  }
  
  @media(max-width: 500px) {
    font-size: 17px;
  }
`;