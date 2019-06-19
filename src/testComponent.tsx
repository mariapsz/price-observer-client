import React, {SyntheticEvent} from 'react';

interface ILoginState {
    userName: string,
    password: string,
    serverURL: string,
}

interface ITestProps {
    
}

let initialState: ILoginState = {
    userName: '',
    password: '',
    serverURL: 'http://localhost:8000/users/authenticate'
    //serverURL: 'ec2-18-184-255-175.eu-central-1.compute.amazonaws.com:3000/users/authenticate',
};

class testComponent extends React.Component<{}, ILoginState> {

    constructor(props: any) {
        super(props);
        this.state = initialState;
    }


    render() {
        return (<div>
            {localStorage.getItem('myJWT')}
        </div>);
    }
}

export default testComponent;
