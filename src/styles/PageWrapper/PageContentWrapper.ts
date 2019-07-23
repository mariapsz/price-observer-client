import styled from 'styled-components';

interface PageContentWrapperProps {
    isStartPage?: boolean,
}

export const PageContentWrapper = styled.div`
  flex: 1 1 100%;
  padding: ${(props: PageContentWrapperProps) => props.isStartPage ? '4vh 0 2vh 0' : '2vh'};
  display: flex;
  flex-direction: ${(props: PageContentWrapperProps) => props.isStartPage ? 'column' : 'row'};
  justify-content: ${(props: PageContentWrapperProps) => props.isStartPage ? 'flex-start' : 'center'};
  align-items: center;
  
  @media(max-width: 500px){
      justify-content: ${(props: PageContentWrapperProps) => props.isStartPage ? 'space-between' : 'center'};
      padding: ${(props: PageContentWrapperProps) => props.isStartPage ? '8vh 0 15vh 0' : '2vh'};
  }`;

export const PrivatePageContentWrapper = styled(PageContentWrapper)`
  align-items: flex-start;
`;