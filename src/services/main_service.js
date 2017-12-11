import {Base64} from 'js-base64';
import {post} from '../Api';

export function loginApi(params) {
    return post({
        url: 'http://2811backend.fengchaoli.com/api/common/token/get',
        options: {headers: {}},
    })
}