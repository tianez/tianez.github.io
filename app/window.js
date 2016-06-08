window.AppId = 'A6984077246442'
window.AppKey = '7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0'
window.AppUrl = 'https://d.apicloud.com/mcm/api/'

/**
 * action
 */
// import ConfigActions from './flux/ConfigActions'
window.ConfigActions = require('./flux/ConfigActions')

/**
 * store
 */
// import ConfigStore from './flux/ConfigStore'
window.ConfigStore = require('./flux/ConfigStore')

window.loadingHide = function() {
    setTimeout(function() {
        ConfigActions.update('loading', false)
    }, 600)
}

window.old = ''
window.hashchange = function() {
    let hash = location.hash.split("?")[0]
    if (old == '') {
        old = hash
    }
    if (old != hash) {
        old = hash
        return true
    } else {
        return false
    }
}

window._scroll = function() {
    let speed = arguments[0] ? arguments[0] : 1;
    let h = window.scrollY * speed
    let style = {
        style: {
            transform: 'translateY(-' + h + 'px)'
        }
    }
    return style
}

//获取url参数数组
window.get = function(url) {
    if (!url) {
        var url = window.document.location.href.toString();
    }
    var u = url.split("?");
    if (typeof(u[1]) == "string") {
        u = u[1].split("&");
        var get = {};
        for (var i in u) {
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
}

//2个对象合并
window.extend = function(o, n, override) {
    for (var p in n)
        if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override)) o[p] = n[p];
}
