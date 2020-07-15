import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm'
import Control from './Components/Control'
import Tasklist from './Components/Tasklist'
import AddJobs from './Components/AddJobs';
var randomstring = require('randomstring')

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
        tasks: [],
        isDisplayForm: false,
        taskEditing: null
      }
    }
    onSubmit = (data)=>{
      var {tasks} = this.state
      if(data.id === ''){
        var item = {
          id: randomstring.generate(),
          name: data.name,
          status: data.status
        }
        tasks.push(item)
      }else{
        tasks.forEach(item => {
          if(item.id === data.id){
            item.name = data.name
            item.status = data.status
          }
        });
    }
      this.setState = {
        tasks : tasks
      }
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    AddItem = (value)=>{
      this.setState({
        tasks: value
      });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }


    showDisplayForm = () =>{
      this.setState({
        isDisplayForm: (!this.state.isDisplayForm)
      })
    }

    
    componentDidMount(){
      if(localStorage && localStorage.getItem('tasks')){
        var meow = JSON.parse(localStorage.getItem('tasks'))
        this.setState({
          tasks: meow
        })
      }
    }
    onUpdateStatus = (id) =>{
      var {tasks} = this.state;
      var findId = tasks.find(task =>{
        return task.id === id
      })
      findId.status = !findId.status
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    onDelete = (id) =>{
      var {tasks} = this.state;
      var meow = tasks.filter(item => item.id !== id)
      this.setState({
        tasks: meow
      })
      localStorage.setItem('tasks', JSON.stringify(meow))
    }
    onUpdate = (id) =>{
      var {tasks} = this.state;
      var findId = tasks.find(task =>{
        return task.id === id
      })
      this.setState({
        taskEditing: findId
      })
      this.showDisplayForm()
    }
  
  render(){
    var { tasks, isDisplayForm, taskEditing } = this.state;
    var taskForm = isDisplayForm ? 
      <TaskForm 
            close={this.showDisplayForm}
            onSubmit={this.onSubmit}
            task={taskEditing}/> : '';
    return (
      <div className="container">
          <div className="text-center mt-3">
            <h1>Quản lý công việc</h1><hr/>
          </div>
          <div className="row">
              <div className={isDisplayForm ? "col-xs-4 col-lg-4 col-md-4 col-sm-4" : ''}>
                  {/*Task Form */}
                  {taskForm}
              </div>
              <div className={isDisplayForm ? "col-xs-8 col-md-8 col-lg-8 col-sm-8" : "col-xs-12 col-md-12 col-lg-12 col-sm-12"}>
                  {/* Add Job */}
                     <AddJobs AddItem={this.AddItem} showDF={this.showDisplayForm} />
                  {/*Search-Sort */}
                    <Control />
                  <div className="row mt-15">
                    {/* Task list */}
                    <Tasklist tasks={ tasks } onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete}
                              onUpdate={this.onUpdate}/>
                   </div>
              </div>
          </div>
     </div>
    );
  }
}

export default App;
