import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'


class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.item.id)
  }
  onDelete2 = () => {
    this.props.onDeleteTask(this.props.item.id);
  }
  onUpdate = () => {
    this.props.onOpenForm()
    this.props.onEditTask(this.props.item)
  }
  render() {
    var { item, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">
          <span
            className={item.status === true ? "badge badge-success" : "badge badge-secondary"}
            onClick={this.onUpdateStatus}>
            {item.status === true ? "Kích Hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button 
            type="button" 
            className="btn btn-warning"
            onClick={this.onUpdate}>
            <span className="fas fa-user-edit mr-5"></span>Sửa
                        </button>
                        &nbsp;
                        <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete2}>
            <span className="fa fa-trash mr-5"></span>Xóa
                        </button>
        </td>
      </tr>
    )
  }
}
const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatusTask(id));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id))
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);