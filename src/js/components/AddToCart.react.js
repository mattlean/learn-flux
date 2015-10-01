var React = require('react');
var AppActions = require('../actions/AppActions.js');

var AddToCart = React.createClass({
	handleClick: function() {
		AppActions.addItem(this.props.item)
	},

	render: function() {
		return <button onClick={this.handleClick}>Add To Cart</button>
	}
});

module.exports = AddToCart;
