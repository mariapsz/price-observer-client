import React from "react";
import {AppState} from "../../../redux/store/storeDataModels/AppState";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Label} from "../../../styles/DiscussionPanel/Label";
import {ToggleXSSProtectedWrapper} from "../../../styles/DiscussionPanel/ToggleXSSProtectedWrapper";
import {LabelWrapper} from "../../../styles/DiscussionPanel/LabelWrapper";
import {ToggleXSSProtectedState} from "./ToggleXSSProtectedState";
import {xssProtectedChanged} from "../../../redux/actions/xssProtectedActions";
import {ToggleXSSProtectedProps} from "./ToggleXSSProtectedProps";
import {XssProtectedChangedActionPayload} from "../../../redux/actions/xssProtectedChangedActionPayload";

const ToggleButton = require('react-toggle-button');


class ToggleXSSProtected extends React.Component<ToggleXSSProtectedProps, ToggleXSSProtectedState> {

    constructor(props: ToggleXSSProtectedProps) {
        super(props);
        this.state = {
            XSSProtected: this.props.store.xssProtected,
        };
    }

    render() {
        return <ToggleXSSProtectedWrapper>
            <LabelWrapper>
                <Label>XSS protected</Label>
            </LabelWrapper>
            <ToggleButton
                value={this.state.XSSProtected}
                onToggle={(value: boolean) => {
                    this.setState({
                        XSSProtected: !value,
                    }, () => this.props.handleXSSProtectedChanged({xssProtected: this.state.XSSProtected}));
                }}
                />
        </ToggleXSSProtectedWrapper>
    }
}

const mapStateToProps = (store: AppState) => ({store});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleXSSProtectedChanged: (payload: XssProtectedChangedActionPayload) => dispatch(xssProtectedChanged(payload)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleXSSProtected);