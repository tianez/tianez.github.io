'use strict'
import request from 'superagent'

var get = function (url, filter, cb) {
    if (window.navigator.onLine == true) {
        let now = Date.now()
        let key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now
        request
            .get(AppUrl + url)
            .set('X-APICloud-AppId', AppId)
            .set('X-APICloud-AppKey', key)
            .query({
                filter: JSON.stringify(filter)
            })
            .end(cb)
    } else {
        console.log('网络出现故障！')
    }

}

var post = function (url, info, cb) {
    console.log(window.navigator.onLine)
    if (window.navigator.onLine == true) {
        let now = Date.now()
        let key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now
        request
            .post(AppUrl + url)
            .set('X-APICloud-AppId', AppId)
            .set('X-APICloud-AppKey', key)
            .send(info)
            .end(cb)
    } else {
        console.log('网络出现故障！')
    }
}
var Apicloud = {
    get: get,
    post: post
}
module.exports = Apicloud