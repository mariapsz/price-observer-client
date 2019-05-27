var superagent = require('superagent');

class APIClient {

    serverURL: string;

    constructor(serverURL: string) {
        this.serverURL = serverURL;
    }

    loginAuthentication(userName: string, password: string): any {
        superagent.get(this.serverURL)
            .query({userName, password})
            .end((err: any, res: any) => {
                if (err)
                    return console.log(err);
                console.log(res.body.url);
            });
    }

    saveWebTokenInCoockies(webToken: any): boolean {
        return false;
    }

    signIn(userName: string, password: string): boolean {
        let response: any = this.loginAuthentication(userName, password);
        let webToken: any = '';
        return this.saveWebTokenInCoockies(webToken);
    }

}

export default APIClient;