import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';
import Task from './Task';

class Tasks extends React.Component 
{
  render()
  { 
    if (this.props.tasks.length > 0) {
        return (
            <div>
                {this.props.tasks.map((el) => <Task taskEdit={this.props.taskEdit} taskDelete={this.props.taskDelete} key={el.id} task={el}/>)}
            </div>
        ) 
    } else {
        return (
            <div className='container task'>
                <p className='task-title'>На данный момент задач нет</p>
            </div>
        )
    }
  }
}

export default Tasks;