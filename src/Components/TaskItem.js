import React, { Component } from 'react';

class TaskItem extends Component {
    onUpdateStatus= () =>{
        this.props.onUpdateStatus(this.props.item.id)
        // console.log('123')
    }
    onDelete2 = () =>{
        this.props.onDelete1(this.props.item.id);
    }
    onUpdate = () =>{
        this.props.onUpdate(this.props.item.id); 
    }
    render(){
        var {item, index} = this.props;
        return(
            <tr>
                    <td>{index +1}</td>
                    <td>{item.name}</td>
                    <td className="text-center">
                        <span 
                            className={item.status === true ? "badge badge-success" : "badge badge-secondary"}
                            onClick={this.onUpdateStatus}>
                                    {item.status === true ? "Kích Hoạt" : "Ẩn"}
                                </span>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning"
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

export default TaskItem