import React, {SyntheticEvent} from 'react';

type LoginState = {
    userName: string,
    password: string,
}

let initialState: LoginState = {
    userName: '',
    password: '',
};

class Login extends React.Component<{}, LoginState> {

    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    validateForm() {
        return this.state.userName.length > 0 && this.state.password.length > 0;
    }

    //SyntheticEvent nie echodziło ze względu na target.id
    handleChange = (event: any) => {
        if (event.target.id === 'userName') {
            this.setState({
                userName: event.target.value,
            })
        } else this.setState({
            password: event.target.value,
        });
        console.log(event);
    };

    handleSubmit = (event: any) => {
        event.preventDefault();
    };

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>userName</label>
                    <input id = "userName"
                        type="userName"
                        value={this.state.userName}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </div>
                <input
                    disabled={!this.validateForm()}
                    type="submit"
                />
            </form>
        </div>);
    }
}

export default Login;
