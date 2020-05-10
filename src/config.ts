// const BASIC_URL = 'http://ec2-52-58-118-196.eu-central-1.compute.amazonaws.com:8000';
const BASIC_URL = 'https://price-observer-backend.herokuapp.com';
const REGISTER_API_ENDPOINT = `${BASIC_URL}/user/register`;
const LOGIN_API_ENDPOINT = `${BASIC_URL}/user/authenticate`;
const CHANGE_PASSWORD_API_ENDPOINT = `${BASIC_URL}/user/change-password`;
const RESET_PASSWORD_API_ENDPOINT = `${BASIC_URL}/user/reset-password`;

export {
    REGISTER_API_ENDPOINT,
    LOGIN_API_ENDPOINT,
    CHANGE_PASSWORD_API_ENDPOINT,
    RESET_PASSWORD_API_ENDPOINT,
}
