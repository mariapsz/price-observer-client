import * as React from 'react';
import DashboardPageWrapper from '../../hoc/PageWrapper/DashboardPageWrapper/DashboardPageWrapper';
import {Frame} from '../../styles/SettingsPage/Frame';
import {SectionTitle} from '../../styles/SettingsPage/SectionTitle';
import {EmailInfoWrapper, RowWrapper} from '../../styles/SettingsPage/RowWrapper';
import {InfoLabel, Label} from '../../styles/SettingsPage/Label';
import {AppState} from '../../redux/store/storeDataModels/AppState';
import {connect} from 'react-redux';
import {UserDetails} from '../../dataModels/UserDetails';
import jwt_decode from "jwt-decode";
import ChangePassword from './ChangePassword/ChangePassword';
import {withTranslation} from "react-i18next";

export interface SettingsPageProps {
    store: AppState,
}

class SettingsPage extends React.Component<any> {

    getNickname = () => {
        return jwt_decode<UserDetails>(this.props.store.login.token!).name;
    };

    getEmail = () => {
        return jwt_decode<UserDetails>(this.props.store.login.token!).email;
    };

    render() {
        return <DashboardPageWrapper>
            <Frame>
                <SectionTitle>{this.props.t('profileSettings')}</SectionTitle>
                <RowWrapper>
                    <Label>
                        {this.props.t('username')}:
                    </Label>
                    <Label>
                        <strong>{this.getNickname()}</strong>
                    </Label>
                </RowWrapper>
                <RowWrapper>
                    <Label>
                        {this.props.t('email')}:
                    </Label>
                    <Label>
                        <strong>{this.getEmail()}</strong>
                    </Label>
                </RowWrapper>
                <ChangePassword/>
            </Frame>
        </DashboardPageWrapper>
    }
}

const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(withTranslation()(SettingsPage));