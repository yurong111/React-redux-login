export default function createReducer (state = 0, action){

    switch (action.type) {
        case 'LOGIN_PENDING':
            return Object.assign({}, state, {
                LOGIN: null,
                loginResult: null
            })
            break;
        case 'LOGIN_SUCCESS':

            return Object.assign({}, state, {
                LOGIN: true,
                loginResult: action.payload.data
            })
            break;
        case 'LOGIN_ERROR':
            return Object.assign({}, state, {
                LOGIN: false,
                loginResult: action.payload.data
            })
            break;

        default:
            return Object.assign({}, state, {
                data: null,
            })
    }
}