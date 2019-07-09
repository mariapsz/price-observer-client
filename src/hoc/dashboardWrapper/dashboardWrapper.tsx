import React from "react";
import Sidebar from "react-sidebar";
import {
    Icon,
    SideBarNavElement,
    SideBarWrapper,
    PageContentWrapper, PageWrapper, SideBarElement, SideBarContentWrapper
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

    onSetSidebarOpen = (open?: boolean) => {
        if (open === undefined){
            this.setState({sidebarOpen: !this.state.sidebarOpen});
        console.log('alo');
        }
        else
            this.setState({sidebarOpen: open});
    };

    logoutUser = () => {
        deleteCookie(COOKIE_NAME_TOKEN);
        deleteCookie(COOKIE_NAME_USER_NAME);
        window.location.reload();
    };

    getSideBarContent = () => (
        <SideBarContentWrapper onMouseLeave={() => this.onSetSidebarOpen(false)}>
            abcdefghijklmnoprstuwxyzzzzzahananaaK
        </SideBarContentWrapper>
    );

    render() {
        return <Sidebar
            sidebar={this.getSideBarContent()}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{
                sidebar: {background: 'red'},
            }}
        >
            <PageWrapper>
                <SideBarWrapper onMouseEnter={() => this.onSetSidebarOpen(true)}>
                    <SideBarElement onClick={() => this.onSetSidebarOpen()}>
                        <Icon className="fa fa-bars"/>
                    </SideBarElement>
                    <div>nickname</div>
                    <SideBarNavElement to='/login'>
                        <Icon className="fa fa-home"/>
                    </SideBarNavElement>
                    <SideBarNavElement to='/addItemURLPage'>
                        <Icon>&#10010;</Icon>
                    </SideBarNavElement>
                    <SideBarNavElement to='/settings'>
                        <Icon className="fa fa-gear"/>
                    </SideBarNavElement>
                    <SideBarElement>
                        <Icon className="fa fa-power-off" onClick={this.logoutUser}/>
                    </SideBarElement>
                </SideBarWrapper>
                <PageContentWrapper>
                    {this.props.children}
                </PageContentWrapper>
            </PageWrapper>
        </Sidebar>

    }
}

export default DashboardWrapper;