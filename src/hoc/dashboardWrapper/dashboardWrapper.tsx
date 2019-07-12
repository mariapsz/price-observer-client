import React from "react";
import {Bar, Logo, PageContentWrapper, PageWrapper, TopBar,} from './dashboardWrapperStyles';
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
            <TopBar>
                <Logo style={{backgroundImage: 'url(' + require('../../SVG/logo.svg') + ')'}}/>
                <Bar style={{backgroundImage: 'url(' + require('../../SVG/bar.svg') + ')'}}/>
            </TopBar>
            <PageContentWrapper>
                {this.props.children}
            </PageContentWrapper>
        </PageWrapper>
    }
}

export default DashboardWrapper;