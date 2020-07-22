import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm'
import Control from './Components/Control'
import Tasklist from './Components/Tasklist'
import AddJobs from './Components/AddJobs';
import randomstring from 'randomstring'
import { connect } from 'react-redux'
import * as actions from './actions/index'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  AddItem = (value) => {
    this.setState({
      tasks: value
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }


  showDisplayForm = () => {
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm()
    }
    else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: true,
    });
  }


  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
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
      sort: {
        by: sort.by,
        value: sort.value
      }
    })
  }

  render() {
    var { taskEditing,
      filter,
      keyword, sort
    } = this.state;

    var { isDisplayForm } = this.props;
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
    //     })
    //   }
    //   tasks = tasks.filter((task) => {
    //     if (filter.status === -1) {
    //       return task
    //     } else {
    //       return task.status === (filter.status === 1 ? true : false)
    //     }
    //   })
    // }
    // if (keyword) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    //   })
    // }
    // if(sort.by=== 'name'){
    //   tasks.sort((a,b)=>{
    //     if(a.name > b.name) return sort.value
    //     else if(a.name < b.name) return -sort.value
    //     else return 0
    //   })
    // }else{
    //   tasks.sort((a,b)=>{
    //     if(a.status > b.status) {return -sort.value}
    //     else if(a.status < b.status) return sort.value
    //     else return 0
    //   })
    // }


    return (
      <div className="container">
        <div className="text-center mt-3">
          <h1>Quản lý công việc</h1><hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? "col-xs-4 col-lg-4 col-md-4 col-sm-4" : ''}>
            {/*Task Form */}
            <TaskForm />
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-md-8 col-lg-8 col-sm-8" : "col-xs-12 col-md-12 col-lg-12 col-sm-12"}>
            {/* Add Job */}
            <AddJobs showDF={this.showDisplayForm} />
            {/*Search-Sort */}
            <Control onSearch={this.onSearch}
              onSort={this.onSort} />
            <div className="row mt-15">
              {/* Task list */}
              <Tasklist
                // tasks={tasks}

                onDelete={this.onDelete}
                onFilter={this.onFilter} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task))
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
