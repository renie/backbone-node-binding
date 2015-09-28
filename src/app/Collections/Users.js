'use strict';

var User = require('../Models/User');

class Users extends Backbone.Collection {

	get url() {
		return '/users';
	}

	get model() {
		return User;
	}

	construct() {
		this.url	= '/users';
		this.model	= User;
	}
}

module.exports = Users;