import React from "react";
import {Icon, SettingsIcon,} from '../../../styles/PageWrapper/Icon';
import {deleteCookie, getCookie} from '../../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../config';
import {Wrapper} from '../../../styles/PageWrapper/Wrapper';
import {PrivatePageContentWrapper} from '../../../styles/PageWrapper/PageContentWrapper';
import {TopBarWrapper} from '../../../styles/PageWrapper/TopBarWrapper';
import {TopBar} from '../../../styles/PageWrapper/TopBar';
import {Title} from '../../../styles/PageWrapper/Title';
import {UserPanel} from '../../../styles/PageWrapper/UserPanel';
import {NickName} from '../../../styles/PageWrapper/NickName';

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