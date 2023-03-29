import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from 'react-icons/ai';
import AddTask from './AddTask';

class Task extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
      activeForm: false
    }
  }

  task = this.props.task
  render()
  { 
    return (
        <div className='container task'>      
            <AiFillDelete onClick={() => this.props.taskDelete(this.task.id)} className='icon'/>
            <AiFillEdit onClick={() => this.setState({activeForm: !this.state.activeForm})} className='icon'/>
            <AiOutlineFileDone className='icon'/>   
            <h2>{this.task.title}</h2>
            <p>{this.task.description}</p>

            {this.state.activeForm && <AddTask task={this.task} taskAdd={this.props.taskEdit}/>}
        </div>
    )
  }
}

export default Task;