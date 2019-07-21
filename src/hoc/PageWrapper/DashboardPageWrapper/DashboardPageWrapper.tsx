import React from "react";
import {Icon, SettingsIcon,} from '../../../Styles/PageWrapper/Icon';
import {deleteCookie, getCookie} from '../../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../config';
import {Wrapper} from '../../../Styles/PageWrapper/Wrapper';
import {PrivatePageContentWrapper} from '../../../Styles/PageWrapper/PageContentWrapper';
import {TopBarWrapper} from '../../../Styles/PageWrapper/TopBarWrapper';
import {TopBar} from '../../../Styles/PageWrapper/TopBar';
import {Title} from '../../../Styles/PageWrapper/Title';
import {UserPanel} from '../../../Styles/PageWrapper/UserPanel';
import {NickName} from '../../../Styles/PageWrapper/NickName';

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
            <PrivatePageContentWrapper>
                {this.props.children}
            </PrivatePageContentWrapper>
        </Wrapper>
    }
}

export default DashboardPageWrapper;