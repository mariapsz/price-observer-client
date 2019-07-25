import {User} from '../../dataModels/User';

export interface RegisterFormState {
    user: User,
    isSubmitDisabled: boolean,
    passwordRepeated: string,
    serverMessage: string,
}