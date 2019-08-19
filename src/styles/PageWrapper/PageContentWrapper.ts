import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

interface PageContentWrapperProps extends StyledComponentsProps{
    isStartPage?: boolean,
}

export const PageContentWrapper = styled.div`
  flex: 1 1 100%;
  padding: ${(props: PageContentWrapperProps) => props.isStartPage ? '5vh 0 2vh 0' : '2vh'};
  display: flex;
  flex-direction: ${(props: PageContentWrapperProps) => props.isStartPage ? 'column' : 'row'};
  justify-content: ${(props: PageContentWrapperProps) => props.isStartPage ? 'flex-start' : 'center'};
  align-items: center;
  pointer-events: ${(props: StyledComponentsProps) => props.promiseInProgress ? 'none' : 'initial'};
  opacity: ${(props: StyledComponentsProps) => props.promiseInProgress ? '0.6' : 'initial'};
  
  @media(max-width: 500px){
      justify-content: ${(props: PageContentWrapperProps) => props.isStartPage ? 'space-between' : 'center'};
      padding: ${(props: PageContentWrapperProps) => props.isStartPage ? '8vh 0 15vh 0' : '2vh'};
  }`;

export const PrivatePageContentWrapper = styled(PageContentWrapper)`
  align-items: flex-start;
`;