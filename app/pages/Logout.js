'use strict';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		storedb('user').remove()
		window.location.href = '/#/'
	}
	render() {
		return (null)
	}
}
