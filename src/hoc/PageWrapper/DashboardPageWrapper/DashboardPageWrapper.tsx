import React from "react";
import {Icon, SettingsIcon,} from '../../../styles/PageWrapper/Icon';
import {Wrapper} from '../../../styles/PageWrapper/Wrapper';
import {PrivatePageContentWrapper} from '../../../styles/PageWrapper/PageContentWrapper';
import {TopBarWrapper} from '../../../styles/PageWrapper/TopBarWrapper';
import {TopBar} from '../../../styles/PageWrapper/TopBar';
import {Title} from '../../../styles/PageWrapper/Title';
import {UserPanel} from '../../../styles/PageWrapper/UserPanel';
import {NickName} from '../../../styles/PageWrapper/NickName';
import {removeState} from '../../../utils/localStorage';
import {connect} from 'react-redux';
import jwt_decode from "jwt-decode";
import {UserDetails} from '../../../dataModels/UserDetails';


class DashboardPageWrapper extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            sidebarOpen: false,
        };
    }

    logoutUser = () => {
        removeState();
        window.location.reload();
    };

    getNickname = () => {
        return jwt_decode<UserDetails>(this.props.token).name;
    };

    render() {
        return <Wrapper>
            <TopBarWrapper>
                <TopBar>
                    <div>
                        <Title>ALERT CENOWY</Title>
                    </div>
                    <UserPanel>
                        <NickName>{this.getNickname()}</NickName>
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

const mapStateToProps = (store: any) => ({
    token: store.login.token,
});
export default connect(mapStateToProps)(DashboardPageWrapper);