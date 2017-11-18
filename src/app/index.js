var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('./css/index.css');
import {Router, Route, browserHistory, Link} from 'react-router';

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

var App = createReactClass({
  render: function(){
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    );
  }
});

//Create Component
var TodoComponent = createReactClass({
  getInitialState: function(){
    return {
      todos: ['Eat','Sleep','Ride','Drive','Drift']
    }
  },
  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item,index){
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return (
      <div id="todo-list">
        <Link to={'/about'}>About</Link>
        <p>This is my first todo-list using react js</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  },

  //custom function
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val,index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }

});

//put the todo component into the HTML page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
