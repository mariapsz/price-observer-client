import { Container } from "inversify";
import {TYPES} from './types';

const myContainer = new Container();
let LOGIN_API_ENDPOINT;
if (process.env.CONNECTION_URL)
    LOGIN_API_ENDPOINT = 'http://localhost:8000/users/authenticate';
else LOGIN_API_ENDPOINT = 'cosTamInnego';

myContainer.bind<string>(TYPES.LOGIN_API_ENDPOINT).toConstantValue(LOGIN_API_ENDPOINT);

export { myContainer };