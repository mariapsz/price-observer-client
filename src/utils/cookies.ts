export function setCookie(cname: string, cvalue: any, hours: number) {
    let d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000)); // (exdays * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export function getCookie(cname: string) {
    let name = cname + '=';
    let ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return '';
}

export function checkCookie(cname: string) {
    let user = getCookie(cname);
    if (user !== '') {
        return user;
    } else {
        return null;
    }
}

export function deleteCookie(cname: string) {
    let date = new Date();
    date.setTime(date.getTime() - (24 * 1000 * 60 * 60));
    let expires = "expires=" + date.toUTCString();
    window.document.cookie = cname + "=" + "; " + expires;
}
