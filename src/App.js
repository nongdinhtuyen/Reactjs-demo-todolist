import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm'
import Control from './Components/Control'
import Tasklist from './Components/Tasklist'
import AddJobs from './Components/AddJobs';
import { connect } from 'react-redux'
import * as actions from './actions/index'

class App extends Component {


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

  render() {
    var { isDisplayForm } = this.props;
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
            <Control />
            <div className="row mt-15">
              {/* Task list */}
              <Tasklist
                // tasks={tasks}
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
