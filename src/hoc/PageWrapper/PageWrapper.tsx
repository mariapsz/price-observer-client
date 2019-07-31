import React from "react";
import {Title,} from '../../styles/PageWrapper/Title';
import {deleteCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';
import {Wrapper} from '../../styles/PageWrapper/Wrapper';
import {PageContentWrapper} from '../../styles/PageWrapper/PageContentWrapper';
import {TopBarWrapper} from '../../styles/PageWrapper/TopBarWrapper';
import {TopBar} from '../../styles/PageWrapper/TopBar';
import {PageWrapperProps} from './PageWrapperProps';
import {RedirectHome} from '../../styles/PageWrapper/TitleWrapper';
import {usePromiseTracker} from 'react-promise-tracker';

const PageWrapper = (props: PageWrapperProps) => {
    const {promiseInProgress} = usePromiseTracker({area: 'pageWrapper'});
    return <Wrapper
        promiseInProgress={promiseInProgress}>
        <TopBarWrapper>
            <TopBar>
                <div>
                    <RedirectHome to='/'>
                        <Title>ALERT CENOWY</Title>
                    </RedirectHome>
                </div>
            </TopBar>
        </TopBarWrapper>
        <PageContentWrapper isStartPage={props.isStartPage}>
            {props.children}
        </PageContentWrapper>
    </Wrapper>
};

export default PageWrapper;