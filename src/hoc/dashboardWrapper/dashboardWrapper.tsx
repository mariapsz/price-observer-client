import React, {Component} from 'react';
import {checkCookie, deleteCookie, getCookie} from '../../utils/cookies';
import {Link, Redirect} from 'react-router-dom';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';

// @ts-ignore
//import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import './styles.css';
import {Icon, LinkIcon, LinkText, PageContentWrapper, SideBarWrapper} from './dashboardWrapperStyles';
const SideNav = require('@trendmicro/react-sidenav');
const NavItem = require('@trendmicro/react-sidenav').NavItem;
const NavIcon = require('@trendmicro/react-sidenav').NavIcon;
const NavText = require('@trendmicro/react-sidenav').NavText;
export default class DashboardWrapper extends Component {

    constructor(props: any){
        super(props);
        this.state = {
            selectedRef: null,
        };
        console.log('SideNav', SideNav, NavItem);
    }

    logoutUser = () => {
        deleteCookie(COOKIE_NAME_TOKEN);
        window.location.reload();
    };

    render() {
        let userName = getCookie(COOKIE_NAME_USER_NAME);
        return (
            <div>
                {!checkCookie(COOKIE_NAME_TOKEN) ? <Redirect to='/login'/>
                    :
                    <div>
                        <SideBarWrapper>
                            <React.Fragment>
                                <SideNav>
                                    <SideNav.Toggle>{userName}</SideNav.Toggle>
                                    <SideNav.Nav defaultSelected="home">
                                        <NavItem>
                                            <NavIcon>
                                                <LinkIcon to='/dashboard'>
                                                    <Icon className="fa fa-home"/>
                                                </LinkIcon>
                                            </NavIcon>
                                            <NavText>
                                                <LinkText to='/dashboard'>Home</LinkText>
                                            </NavText>
                                        </NavItem>
                                        <NavItem>
                                            <NavIcon>
                                                <LinkIcon to='/addItemURLPage'>
                                                    <div>&#10010;</div>
                                                </LinkIcon>
                                            </NavIcon>
                                            <NavText>
                                                <LinkText to='/addItemURLPage'>Add new item</LinkText>
                                            </NavText>
                                        </NavItem>
                                        <NavItem>
                                            <NavIcon>
                                                <LinkIcon to='/settings'>
                                                    <Icon className="fa fa-gear"/>
                                                </LinkIcon>
                                            </NavIcon>
                                            <NavText>
                                                <LinkText to='/settings'>Settings</LinkText>
                                            </NavText>
                                        </NavItem>
                                        <NavItem>
                                            <NavIcon>
                                                <Icon className="fa fa-power-off" onClick={this.logoutUser}/>
                                            </NavIcon>
                                            <NavText>
                                                <div onClick={this.logoutUser}>Logout</div>
                                            </NavText>
                                        </NavItem>
                                    </SideNav.Nav>
                                </SideNav>
                            </React.Fragment>
                        </SideBarWrapper>
                        <PageContentWrapper>
                            {this.props.children}
                        </PageContentWrapper>
                    </div>
                }
            </div>
        );
    }
};

