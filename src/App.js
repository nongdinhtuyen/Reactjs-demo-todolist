import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm'
import Control from './Components/Control'
import Tasklist from './Components/Tasklist'
import AddJobs from './Components/AddJobs';

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
        tasks: [],
        isDisplayForm: true
      }
    }
    AddItem = (value)=>{
      this.setState({
        tasks: value
      });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }
    UNSAFE_componentWillMount(){
      if(localStorage && localStorage.getItem('tasks')){
        var tasks = JSON.parse(localStorage.getItem('tasks'))
        this.setState({
          tasks: tasks
        })
      }
    }
    showDisplayForm = () =>{
      this.setState({
        isDisplayForm: (!this.state.isDisplayForm)
      })
    }

  
  render(){
    var { tasks, isDisplayForm } = this.state;
    var taskForm = isDisplayForm ? <TaskForm close={this.showDisplayForm}/> : '';
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
                     <AddJobs AddItem={this.AddItem} showDF={this.showDisplayForm}/>
                  {/*Search-Sort */}
                    <Control />
                  <div className="row mt-15">
                    {/* Task list */}
                    <Tasklist tasks={ tasks }/>
                   </div>
              </div>
          </div>
     </div>
    );
  }
}

export default App;
