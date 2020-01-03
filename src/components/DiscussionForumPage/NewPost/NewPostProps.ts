export interface NewPostProps {
    postAddedHandler: () => void,
    xssProtected: boolean,
    token: string,
    userName: string,
}