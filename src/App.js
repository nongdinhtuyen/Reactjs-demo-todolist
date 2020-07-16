import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm'
import Control from './Components/Control'
import Tasklist from './Components/Tasklist'
import AddJobs from './Components/AddJobs';
var randomstring = require('randomstring')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: '',
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sort: {
        by: 'name',
        value: 1
      }
    }
  }
  onSubmit = (data) => {
    var { tasks } = this.state
    // console.log(typeof data.status)
    if (data.id === '') {
      var item = {
        id: randomstring.generate(),
        name: data.name,
        status: data.status
      }
      console.log(item)
      tasks.push(item)
    } else {
      tasks.forEach((item, index) => {
        if (item.id === data.id) {
          item.name = data.name
          item.status = (data.status === 'true' ? true : false)
        }
      });
    }
    this.setState({
      tasks: tasks,
      taskEditing: ''
    })
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }
  AddItem = (value) => {
    this.setState({
      tasks: value
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }


  showDisplayForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== '') {
      this.setState({
        // isDisplayForm: true,
        taskEditing: ''
      })
    }
    else {
      this.setState({
        isDisplayForm: (!this.state.isDisplayForm),
        taskEditing: ''
      })
    }
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
      taskEditing: ''
    })
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var meow = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: meow
      })
    }
  }
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var findId = tasks.find(task => {
      return task.id === id
    })
    findId.status = !findId.status
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  onDelete = (id) => {
    var { tasks } = this.state;
    var meow = tasks.filter(item => item.id !== id)
    this.setState({
      tasks: meow
    })
    localStorage.setItem('tasks', JSON.stringify(meow))
  }

  onUpdate = (id) => {
    var { tasks } = this.state;
    var findId = tasks.find(task => {
      return task.id === id
    })
    // console.log(findId)
    this.setState({
      taskEditing: findId
    })

    this.onShowForm()
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = +filterStatus
    this.setState({
      filter: {
        name: filterName,
        status: filterStatus
      }
    })
  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }
  onSort = (sort) => {
    this.setState({
      sort:{
        by: sort.by,
        value: sort.value
      }
    })
  }

  render() {
    var { tasks, isDisplayForm, taskEditing, filter, keyword, sort } = this.state;
    if (filter) {
      if (filter.name) {
        tasks = tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
        })
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task
        } else {
          return task.status === (filter.status === 1 ? true : false)
        }
      })
    }
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    }
    if(sort.by=== 'name'){
      tasks.sort((a,b)=>{
        if(a.name > b.name) return sort.value
        else if(a.name < b.name) return -sort.value
        else return 0
      })
    }else{
      tasks.sort((a,b)=>{
        if(a.status > b.status) {return -sort.value}
        else if(a.status < b.status) return sort.value
        else return 0
      })
    }

    var taskForm = isDisplayForm ?
      <TaskForm
        onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
        item={taskEditing} /> : '';
    return (
      <div className="container">
        <div className="text-center mt-3">
          <h1>Quản lý công việc</h1><hr />
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
            <Control onSearch={this.onSearch}
              onSort={this.onSort} />
            <div className="row mt-15">
              {/* Task list */}
              <Tasklist tasks={tasks}
                onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete}
                onUpdate={this.onUpdate}
                onFilter={this.onFilter} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
