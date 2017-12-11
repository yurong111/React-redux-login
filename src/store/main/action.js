import {
    loginApi,
} from '../../services/main_service';


export function loginAction(account, password) {
    return {
        type: 'LOGIN',
        payload: {
            promise: loginApi({account, password})
        },
    }
}