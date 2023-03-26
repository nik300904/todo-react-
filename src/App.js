import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';
import Tasks from './compotents/Tasks';
import AddTask from './compotents/AddTask';

class App extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
      tasks: [
        {
          id: 1,
          title: 'Помыть посуду',
          description: 'Помыть посуду нужно до 21 00'
        },
        {
          id: 2,
          title: 'Сходить в магазин',
          description: 'Купить овощи, мясо и хлеб'
        }
      ]
    }
    this.addTask = this.addTask.bind(this)
  } 

  render()
  {
    return (
      <div className='container'>
        <Tasks tasks={this.state.tasks}/>
        <div>
          <AddTask taskAdd={this.addTask}/>
        </div>
      </div>
    )
  }

  addTask(task) 
  {
    const id = this.state.tasks.length + 1;
    this.setState({tasks: [...this.state.tasks, {id, ...task}]})
  }
}

export default App;
