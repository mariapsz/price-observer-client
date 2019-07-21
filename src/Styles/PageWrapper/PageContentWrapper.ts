import styled from 'styled-components';

export const PageContentWrapper = styled.div`
  flex: 1 1 100%;
  padding: 2vh;
  display: flex;
  flex-direction: ${(props: PageContentWrapperProps) => props.isStartPage ? 'column' : 'row'};
  justify-content: ${(props: PageContentWrapperProps) => props.isStartPage ? 'flex-start' : 'center'};
  align-items: center;
`;

interface PageContentWrapperProps {
    isStartPage?: boolean,
}

export const PrivatePageContentWrapper = styled(PageContentWrapper)`
  align-items: flex-start;
`;