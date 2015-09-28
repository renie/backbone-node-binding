'use strict';

class User extends Backbone.Model {
	get urlRoot() {
		return '/users';
	}

	get idAttribute() {
		return '_id';
	}

	construct() {
	}
}

module.exports = User;

