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
          description: 'Помыть посуду нужно до 21 00',
          status: false
        },
        {
          id: 2,
          title: 'Сходить в магазин',
          description: 'Купить овощи, мясо и хлеб',
          status: false
        }
      ]
    }
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.editTask = this.editTask.bind(this)
  } 

  render()
  {
    return (
      <div className='container'>
        <Tasks onDone={this.doneTask} taskEdit={this.editTask} tasks={this.state.tasks} taskDelete={this.deleteTask}/>
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

  deleteTask(id)
  {
    this.setState({
      tasks: this.state.tasks.filter((el) => el.id !== id)
    })
  }

  editTask(task)
  {
    let allTasks = this.state.tasks;
    allTasks[task.id - 1] = task;
    this.setState({tasks: []}, () => {this.setState({tasks: [...allTasks]})})
    console.log(task)
  }
}

export default App;
