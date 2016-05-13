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