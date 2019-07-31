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
import {usePromiseTracker} from 'react-promise-tracker';
import {DashboardPageWrapperProps} from './DashboardPageWrapperProps';
import {AppState} from '../../../redux/store/storeDataModels/AppState';


const DashboardPageWrapper = (props: DashboardPageWrapperProps) => {

    const logoutUser = () => {
        removeState();
        window.location.reload();
    };

    const getNickname = () => {
        return jwt_decode<UserDetails>(props.token!).name;
    };

    const {promiseInProgress} = usePromiseTracker({area: 'pageWrapper'});

    return <Wrapper
        promiseInProgress={promiseInProgress}>
        <TopBarWrapper>
            <TopBar>
                <div>
                    <Title>ALERT CENOWY</Title>
                </div>
                <UserPanel>
                    <NickName>{getNickname()}</NickName>
                    <SettingsIcon className="fa fa-cog fa-5x"/>
                    <Icon className="fa fa-power-off" onClick={logoutUser}/>
                </UserPanel>
            </TopBar>
        </TopBarWrapper>
        <PrivatePageContentWrapper>
            {props.children}
        </PrivatePageContentWrapper>
    </Wrapper>
};

const mapStateToProps = (store: AppState) => ({
    token: store.login.token,
});
export default connect(mapStateToProps)(DashboardPageWrapper);