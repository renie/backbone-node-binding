'use strict';

var View	= require('../View'),
	Users	= require('../../Collections/Users.js');

class ListUser extends View {
	constructor() {
		super();

		this.collection = new Users();
		this.collection.fetch().then(this.loadView.bind(this));
	}

	loadView() {
		console.log(this.collection.models)
	}
}

module.exports = ListUser;