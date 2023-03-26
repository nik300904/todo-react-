import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';

class AddTask extends React.Component 
{
  constructor (props)
  {
    super(props)
    this.state = {
      title: "",
      description: "",
    }
  }
  taskInfo = {}
  render()
  { 
    return (
        <form className='addTask' ref={(el) => this.form = el}>
            <label htmlFor='formTitle'>Заглавие</label>
            <input placeholder='Пойти в зал' id='formTitle' onChange={(e) => this.setState({ title: e.target.value })}/>
            <label htmlFor='formDescription'>Описание</label>
            <input placeholder='День ног' id='formDescription' onChange={(e) => this.setState({ description: e.target.value })}/>
            <button type='button' className='button' onClick={() => {
                this.form.reset();
                this.taskInfo = {
                  title: this.state.title,
                  description: this.state.description
                }
                if (this.props.task) {
                    this.taskInfo.id = this.props.task.id
                }
                this.props.taskAdd(this.taskInfo);
                console.log(this.taskInfo)
            }}
            >Добавить задачу</button>
        </form>
    )
  }
}

export default AddTask;