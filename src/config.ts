const BASIC_URL = 'http://ec2-52-58-118-196.eu-central-1.compute.amazonaws.com:8000';
//const BASIC_URL = 'http://localhost:8000';
const REGISTER_API_ENDPOINT = `${BASIC_URL}/user/register`;
const LOGIN_API_ENDPOINT = `${BASIC_URL}/user/authenticate`;
const CHANGE_PASSWORD_API_ENDPOINT = `${BASIC_URL}/user/change-password`;
const RESET_PASSWORD_API_ENDPOINT = `${BASIC_URL}/user/reset-password`;
const CHECK_PRODUCT_API_ENDPOINT = `${BASIC_URL}/url/parse-product`;
const ADD_PRODUCT_API_ENDPOINT = `${BASIC_URL}/products/add`;
const EDIT_PRODUCT_API_ENDPOINT = `${BASIC_URL}/products/edit`;
const REMOVE_PRODUCT_API_ENDPOINT = `${BASIC_URL}/products/remove`;
const GET_PRODUCTS_LIST_API_ENDPOINT = `${BASIC_URL}/products/all`;

export {
    REGISTER_API_ENDPOINT,
    LOGIN_API_ENDPOINT,
    CHECK_PRODUCT_API_ENDPOINT,
    ADD_PRODUCT_API_ENDPOINT,
    GET_PRODUCTS_LIST_API_ENDPOINT,
    CHANGE_PASSWORD_API_ENDPOINT,
    EDIT_PRODUCT_API_ENDPOINT,
    REMOVE_PRODUCT_API_ENDPOINT,
    RESET_PASSWORD_API_ENDPOINT
}

