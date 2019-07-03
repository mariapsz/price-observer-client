import {connect} from 'react-redux';
import * as React from 'react';
import SettingsPassword from '../SettingsPassword/SettingsPassword';

class SettingsUserAccount extends React.Component {

    render() {
        return <div>
            <SettingsPassword/>
        </div>
    }
}


const mapStateToProps = (store) => ({
    store
});

export default connect(mapStateToProps)(
    SettingsUserAccount
);
