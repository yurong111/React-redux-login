import axios from 'axios';
import cookie from 'js-cookie';

function saveToken(response) {
    if (response && response.headers && response.headers['x-auth-token']) {
        cookie.set('x-token', response.headers['x-auth-token'])
    }
    return response;
}

function getOptionsBeforeApi(options) {
    let token = cookie.get('x-token');
    if (token) {
        let opt = {headers: {'x-auth-token': token}};
        let headers = Object.assign({}, options.headers, opt.headers);
        options.headers = headers;
    }
    return options;
}

export function post(params) {
    let url = params.url;
    let data = params.data;
    let options = params.options;

    let _options = getOptionsBeforeApi(options);

    return axios.post(url, data, _options)
        .then(saveToken)
}

