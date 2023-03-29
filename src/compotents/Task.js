import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi'
import AddTask from './AddTask';

class Task extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
      activeForm: false,
      refresh: false
    }
  }

  task = this.props.task
  render()
  { 
    if (this.task.status)
    {
      return (
        <div className='container task'>
            <AiFillDelete onClick={() => this.props.taskDelete(this.task.id)} className='icon'/>
            <AiFillEdit onClick={() => this.setState({activeForm: !this.state.activeForm})} className='icon'/>
            <AiOutlineFileDone onClick={() => this.task.status = !this.task.status} className='icon'/>
            <BiRefresh onClick={() => this.setState({refresh: !this.state.refresh})} className='icon'/>  
            <h2 className='work done'>{this.task.title}</h2>
            <p className='work done'>{this.task.description}</p>
        </div>
      )
    }
    return (
        <div className="container task">      
            <AiFillDelete onClick={() => this.props.taskDelete(this.task.id)} className='icon'/>
            <AiFillEdit onClick={() => this.setState({activeForm: !this.state.activeForm})} className='icon'/>
            <AiOutlineFileDone onClick={() => this.task.status = !this.task.status} className='icon'/>
            <BiRefresh onClick={() => this.setState({refresh: !this.state.refresh})} className='icon'/>  
            <h2 className='work'>{this.task.title}</h2>
            <p className='work'>{this.task.description}</p>

            {this.state.activeForm && <AddTask task={this.task} taskAdd={this.props.taskEdit}/>}
        </div>
    )
    
  }
}


export default Task;