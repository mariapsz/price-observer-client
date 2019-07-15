import {User} from '../../DataModels/User';

export interface RegisterFormState {
    user: User,
    isSubmitDisabled: boolean,
    passwordRepeated: string,
    serverMessage: string,
}