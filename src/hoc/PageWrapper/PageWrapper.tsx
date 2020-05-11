import React from "react";
import {Title,} from '../../styles/PageWrapper/Title';
import {Wrapper} from '../../styles/PageWrapper/Wrapper';
import {PageContentWrapper} from '../../styles/PageWrapper/PageContentWrapper';
import {TopBarWrapper} from '../../styles/PageWrapper/TopBarWrapper';
import {TopBar} from '../../styles/PageWrapper/TopBar';
import {PageWrapperProps} from './PageWrapperProps';
import {LinkToHome} from '../../styles/PageWrapper/LinkToHome';
import {usePromiseTracker} from 'react-promise-tracker';

const PageWrapper = (props: PageWrapperProps) => {
    const {promiseInProgress} = usePromiseTracker({area: 'pageWrapper'});
    return <Wrapper
        promiseInProgress={promiseInProgress}>
        <TopBarWrapper
            promiseInProgress={promiseInProgress}>
            <TopBar>
                <div>
                    <LinkToHome to='/'>
                        <Title>PROGRAMOWANIE W INTERNECIE</Title>
                    </LinkToHome>
                </div>
                <a href='/server.zip' download style={{
                    color: '#fff',
                    fontSize: '1.3rem',
                }}>
                    Backend: pobierz kod
                </a>
            </TopBar>
        </TopBarWrapper>
        <PageContentWrapper
            promiseInProgress={promiseInProgress}
            isStartPage={props.isStartPage}>
            {props.children}
        </PageContentWrapper>
    </Wrapper>
};

export default PageWrapper;