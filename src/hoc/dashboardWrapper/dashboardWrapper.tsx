import React from "react";
import Sidebar from "react-sidebar";
import {
    Icon,
    NavIcon,
    SideBarWrapper,
    OpenNavBarIcon,
    PageContentWrapper, PageWrapper
} from './dashboardWrapperStyles';
import {deleteCookie, getCookie} from '../../utils/cookies';
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


    onSetSidebarOpen = (open: boolean) => {
        console.log('asd');
        this.setState({sidebarOpen: open});
    };

    getSideBar = (): JSX.Element => {
        let nickname = getCookie(COOKIE_NAME_USER_NAME);
        return <SideBarWrapper>
            <OpenNavBarIcon onClick={() => this.onSetSidebarOpen(true)}>
                <Icon className="fa fa-bars"/>
            </OpenNavBarIcon>
            <div>{nickname}</div>
                <NavIcon to='/dashboard'>
                    <Icon className="fa fa-home"/>
                </NavIcon>
                <NavIcon to='/addItemURLPage'>
                    <Icon>&#10010;</Icon>
                </NavIcon>
                <NavIcon to='/settings'>
                    <Icon className="fa fa-gear"/>
                </NavIcon>
            <OpenNavBarIcon>
                <Icon className="fa fa-power-off" onClick={this.logoutUser}/>
            </OpenNavBarIcon>
        </SideBarWrapper>
    };

    render() {
        return (<PageWrapper>
                {this.getSideBar()}
                <PageContentWrapper>
                    {this.props.children}
                </PageContentWrapper>
            </PageWrapper>
        );
    }
}

export default DashboardWrapper;