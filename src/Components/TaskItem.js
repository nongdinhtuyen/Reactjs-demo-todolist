import React, { Component } from 'react';

class TaskItem extends Component {
    render(){
        var {abc, index} = this.props;
        return(
            <tr>
                    <td>{index +1}</td>
                    <td>{abc.name}</td>
                    <td className="text-center">
                        <span className={abc.status === true ? "badge badge-success" : "badge badge-secondary"}>
                                    {abc.status === true? "Kích Hoạt" : "Ẩn"}
                                </span>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">
                            <span className="fa fa-pencil mr-5"></span>Sửa
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger">
                            <span className="fa fa-trash mr-5"></span>Xóa
                        </button>
                    </td>
                </tr>
        )
    }
}

export default TaskItem