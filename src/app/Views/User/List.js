'use strict';

var View = require('../View');

class ListUser extends View {
	constructor() {
		super();
		
		console.log(this.name);
	}
}

module.exports = ListUser;