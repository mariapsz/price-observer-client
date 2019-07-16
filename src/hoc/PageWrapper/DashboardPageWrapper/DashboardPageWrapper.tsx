import React from "react";
import {
    PageContentWrapper,
    Wrapper,
    Title,
    TopBar,
    TopBarWrapper,
    SettingsIcon, Icon, UserPanel, NickName,
} from '../../../Styles/PageWrapperStyles';
import {deleteCookie, getCookie} from '../../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../config';

class DashboardPageWrapper extends React.Component<any, any> {

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
        let userName = getCookie(COOKIE_NAME_USER_NAME);

        return <Wrapper>
            <TopBarWrapper>
                <TopBar>
                    <div>
                        <Title>ALERT CENOWY</Title>
                    </div>
                    <UserPanel>
                        <NickName>{userName}</NickName>
                        <SettingsIcon className="fa fa-cog fa-5x"/>
                        <Icon className="fa fa-power-off" onClick={this.logoutUser}/>
                    </UserPanel>
                </TopBar>
            </TopBarWrapper>
            <PageContentWrapper>
                {this.props.children}
            </PageContentWrapper>
        </Wrapper>
    }
}

export default DashboardPageWrapper;