import {User} from '../../dataModels/User';

export interface RegisterPageState {
    user: User,
    isSubmitDisabled: boolean,
    passwordRepeated: string,
    errorMessage: string,
    isPasswordVisible: boolean,
    isPasswordCompleted: boolean,
    isRepeatedPasswordVisible: boolean,
    isRepeatedPasswordCompleted: boolean,
}