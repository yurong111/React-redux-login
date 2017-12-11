import {Base64} from 'js-base64';
import {post} from '../Api';

export function loginApi(params) {
    /*return axios({
        method: 'GET',
        url: DATAHOST+'/search',
        params,
    });*/

    return post({
        url: 'http://2811backend.fengchaoli.com/api/common/token/get',
        options: {headers: {}},
        success: (response)=>{
            console.log(response);
        },
        error: (error)=>{
            console.log(error);
        }
    })
}