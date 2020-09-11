import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {v4 as uuid} from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';
//My First project and also i setup github
class App extends Component {
  state ={
    items : [{id:1,title:'wake up'},{id:2,title:'Hello Baby'}],
    id : uuid(),
    item:''
  };

  render() {
    
    return(
      <div>
        <div className="container">
          <div className="row">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
