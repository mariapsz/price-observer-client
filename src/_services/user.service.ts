import { authHeader } from '../_helpers';
const superagent = require('superagent');

const serverURL = 'http://localhost:8000/users/authenticate';

export const userService = {
    login,
    logout,
    getAll
};

function login(userName: string, password: string ): Promise<any> {

    return superagent.post(serverURL)
        .send({userName, password})
        .then((res: any) => {
            console.log(res.body, 'result');
            return res.body
        })
        .catch((err: any) => {
            return console.log('err: ', err);
        })
        // .end((err: any, res: any) => {
        //     if (err)
        //         return console.log(err);
        //     console.log('server result', res.body);
        //     // store user details and jwt token in local storage to keep user logged in between page refreshes
        //     localStorage.setItem('user', JSON.stringify(res.body));
        //     return res.body;
        // });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    //@ts-ignore
    return fetch(`${URL}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response: any) {
    //@ts-ignore
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
           // if (response.status === 401) {
           //     // auto logout if 401 response returned from api
           //     logout();
           //     //@ts-ignore
           //     location.reload();
           // }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log('some data:', data);
        return data;
    });
}