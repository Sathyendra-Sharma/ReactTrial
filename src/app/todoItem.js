var React = require('react');
var createReactClass = require('create-react-class');
require('./css/todoItem.css');

//create TodoItem component
var TodoItem = createReactClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handeDelete}> x </span>
        </div>
      </li>
    );
  },

  //custom functions
  handeDelete: function(){
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem;
