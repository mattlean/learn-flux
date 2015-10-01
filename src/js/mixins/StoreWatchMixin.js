var React = require('react');
var AppStore = require('../stores/AppStore.js');

var StoreWatchMixin = function(callback) {
	return {
		getInitialState: function() {
			return callback();
		},

		componentWillMount: function() {
			AppStore.addChangeListener(this._onChange);
		},

		componentWillUnmount: function() {
			AppStore.removeChangeListener(this._onChange);
		},

		_onChange: function() {
			this.setState(callback());
		}
	}
}

module.exports = StoreWatchMixin;