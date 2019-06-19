import React, {SyntheticEvent} from 'react';
import * as superagent from 'superagent';
import {ILoginFormState} from './ILoginFormState';

let initialState: ILoginFormState = {
    userName: '',
    password: '',
    serverURL: 'http://localhost:8000/users/authenticate'
    //serverURL: 'ec2-18-184-255-175.eu-central-1.compute.amazonaws.com:3000/users/authenticate',
};

class LoginForm extends React.Component<{}, ILoginFormState> {

    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    validateForm() {
        return this.state.userName.length > 0 && this.state.password.length > 0;
    }

    //SyntheticEvent nie wchodziło ze względu na target.id
    //React.FormEvent też niet
    handleChange = (event: any) => {
        if (event.target.id === 'userName') {
            this.setState({
                userName: event.target.value,
            })
        } else this.setState({
            password: event.target.value,
        });
    };

    handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('clicked!');
        this.validateUser();
    };

    validateUser = () => {
        superagent
            .post(this.state.serverURL)
            //.withCredentials()
            .send(`email=${this.state.userName}`)
            .send(`password=${this.state.password}`)
            .then(res => {
                console.log(res.body);
                localStorage.setItem('myJWT', res.body.data.token);
                console.log('my JWT: ', localStorage.getItem('myJWT'));
            })
            .catch(err => console.log(err));

    };

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>userName</label>
                    <input id="userName"
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

export default LoginForm;
