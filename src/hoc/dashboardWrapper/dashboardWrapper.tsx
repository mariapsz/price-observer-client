import React from "react";
import {PageContentWrapper, PageWrapper, Title, TopBar, TopBarWrapper,} from './dashboardWrapperStyles';
import {deleteCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';

class DashboardWrapper extends React.Component<any, any> {

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
        return <PageWrapper>
            <TopBarWrapper>
                <TopBar>
                    <div>
                        <Title>ALERT CENOWY</Title>
                    </div>
                </TopBar>
                {/*<Bar style={{backgroundImage: 'url(' + require('../../SVG/bar.svg') + ')'}}/>*/}
                {/*    <Logo style={{backgroundImage: 'url(' + require('../../SVG/logo.svg') + ')'}}/>*/}
                {/*    <Bar style={{backgroundImage: 'url(' + require('../../SVG/bar.svg') + ')'}}/>*/}
            </TopBarWrapper>
            <PageContentWrapper>
                {this.props.children}
            </PageContentWrapper>
        </PageWrapper>
    }
}

export default DashboardWrapper;