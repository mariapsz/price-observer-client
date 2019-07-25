import React from "react";
import {Title,} from '../../styles/PageWrapper/Title';
import {deleteCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';
import {Wrapper} from '../../styles/PageWrapper/Wrapper';
import {PageContentWrapper} from '../../styles/PageWrapper/PageContentWrapper';
import {TopBarWrapper} from '../../styles/PageWrapper/TopBarWrapper';
import {TopBar} from '../../styles/PageWrapper/TopBar';
import {PageWrapperProps} from './PageWrapperProps';
import {Link} from 'react-router-dom';
import {RedirectHome} from '../../styles/PageWrapper/TitleWrapper';

export default class PageWrapper extends React.Component<PageWrapperProps, any> {

    constructor(props: PageWrapperProps) {
        super(props);
        this.state = {
            sidebarOpen: false,
        };
    }

    logoutUser = () => {
        deleteCookie(COOKIE_NAME_TOKEN);
        deleteCookie(COOKIE_NAME_USER_NAME);
        window.location.reload();
    };

    render() {
        return <Wrapper>
            <TopBarWrapper>
                <TopBar>
                    <div>
                        <RedirectHome to='/'>
                            <Title>ALERT CENOWY</Title>
                        </RedirectHome>
                    </div>
                </TopBar>
            </TopBarWrapper>
            <PageContentWrapper isStartPage={this.props.isStartPage}>
                {this.props.children}
            </PageContentWrapper>
        </Wrapper>
    }
}