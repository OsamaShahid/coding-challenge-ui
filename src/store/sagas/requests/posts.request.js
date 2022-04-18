import axios from 'axios';
import { APP_CONSTANTS } from '../../../app.constants';

export function getPosts() {
    const url = `${APP_CONSTANTS.API.PROTOCOL}://${APP_CONSTANTS.API.HOST}${APP_CONSTANTS.API.PORT}/posts`;
    var config = {
        method: 'get',
        url,
    };

    return axios(config);
}

export function getPost(data) {
    const url = `${APP_CONSTANTS.API.PROTOCOL}://${APP_CONSTANTS.API.HOST}${APP_CONSTANTS.API.PORT}/posts/${data.id}`;
    var config = {
        method: 'get',
        url,
    };

    return axios(config);
}