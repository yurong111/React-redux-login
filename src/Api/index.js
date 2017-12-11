import axios from 'axios';
import cookie from 'js-cookie';

function doSuccess(response) {
    cookie.set('x-token', response && response.headers && response.headers['x-auth-token'])
}

function getOptionsBeforeApi(options) {
    let token = cookie.get('x-token');
    if (token) {
        let opt = {headers: {'x-auth-token': token}};
        let headers = Object.assign({}, options.headers, opt.headers);
        options.headers = headers;
    }
    console.log('options', options);
    return options;
}

export function post(params) {
    let url = params.url;
    let data = params.data;
    let options = params.options;
    let success = params.success || function(){};
    let error = params.error || function(){};

    let _options = getOptionsBeforeApi(options);

    return axios.post(url, data, _options)
        .then((response)=> {
            doSuccess(response);
            return response;
        })
}

