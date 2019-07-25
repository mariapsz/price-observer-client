import * as React from 'react';
import UserAccountSettings from './SettingsUserAccount/SettingsUserAccount';
import DashboardPageWrapper from '../../hoc/PageWrapper/DashboardPageWrapper/DashboardPageWrapper';

export default class SettingsPage extends React.Component {

    render() {
        return <DashboardPageWrapper>
            <UserAccountSettings/>
        </DashboardPageWrapper>
    }
}

