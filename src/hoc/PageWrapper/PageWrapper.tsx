import React from "react";
import {PageContentWrapper, Wrapper, Title, TopBar, TopBarWrapper,} from '../../Styles/PageWrapperStyles';
import {deleteCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';

export default class PageWrapper extends React.Component<any, any> {

    constructor(props: any) {
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
                        <Title>ALERT CENOWY</Title>
                    </div>
                </TopBar>
            </TopBarWrapper>
            <PageContentWrapper>
                {this.props.children}
            </PageContentWrapper>
        </Wrapper>
    }
}