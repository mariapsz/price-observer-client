import React from "react";
import Sidebar from "react-sidebar";
import {Icon, LinkIcon, LinkText} from './dashboardWrapperStyles';

class DashboardWrapper extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open: any) {
        this.setState({sidebarOpen: open});
    }

    render() {
        return (<div>
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{sidebar: {background: "white"}}}
            >
                <button onClick={() => this.onSetSidebarOpen(true)}>
                    Open sidebar
                </button>
                <div>
                    <div>
                        <div>
                            <LinkIcon to='/addItemURLPage'>
                                <div>&#10010;</div>
                            </LinkIcon>
                        </div>
                        <div>
                            <LinkText to='/login'>Add new item</LinkText>
                        </div>
                    </div>
                    <div>
                        <div>
                            <LinkIcon to='/register'>
                                <Icon className="fa fa-home"/>
                            </LinkIcon>
                        </div>
                        <div>
                            <LinkText to='/dashboard'>Home</LinkText>
                        </div>
                    </div>
                </div>
            </Sidebar>
                <div>{this.props.children}</div>
        </div>
        );
    }
}

export default DashboardWrapper;