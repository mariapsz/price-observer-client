import React from "react";
import Sidebar from "react-sidebar";
import {Icon, LinkIcon, LinkText, NavIcon, SideBarWrapper, SideBarChildrenWrapper} from './dashboardWrapperStyles';
import {deleteCookie, getCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';

class DashboardWrapper extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    logoutUser = () => {
        deleteCookie(COOKIE_NAME_TOKEN);
        deleteCookie(COOKIE_NAME_USER_NAME);
        window.location.reload();
    };


    onSetSidebarOpen(open: any) {
        this.setState({sidebarOpen: open});
    }

    getSideBarChildren = (): JSX.Element => {
        let nickname = 'anna';//getCookie(COOKIE_NAME_USER_NAME);
        return <SideBarChildrenWrapper>
            <NavIcon onClick={() => this.onSetSidebarOpen(true)}>
                <Icon className="fa fa-bars"/>
            </NavIcon>
            <div>{nickname}</div>
            <NavIcon>
                <LinkIcon to='/dashboard'>
                    <Icon className="fa fa-home"/>
                </LinkIcon>
            </NavIcon>
            <NavIcon>
                <LinkIcon to='/addItemURLPage'>
                    <Icon>&#10010;</Icon>
                </LinkIcon>
            </NavIcon>
            <NavIcon>
                <LinkIcon to='/settings'>
                    <Icon className="fa fa-gear"/>
                </LinkIcon>
            </NavIcon>
            <NavIcon>
                <Icon className="fa fa-power-off" onClick={this.logoutUser}/>
            </NavIcon>
        </SideBarChildrenWrapper>
    };

    render() {
        return (<div>
                <SideBarWrapper>
                <Sidebar
                    sidebar={<b>Sidebar content</b>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{sidebar: {background: "white"}}}
                >
                    {this.getSideBarChildren()}
                </Sidebar>
                </SideBarWrapper>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default DashboardWrapper;