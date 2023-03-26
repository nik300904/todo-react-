import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from 'react-icons/ai';

class Task extends React.Component 
{
  task = this.props.task
  render()
  { 
    return (
        <div className='container task'>      
            <AiFillDelete className='icon'/>
            <AiFillEdit className='icon'/>
            <AiOutlineFileDone className='icon'/>   
            <h2>{this.task.title}</h2>
            <p>{this.task.description}</p>
        </div>
    )
  }
}

export default Task;