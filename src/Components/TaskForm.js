import React, { Component } from 'react'


class TaskForm extends Component{
    showDisplayForm(){
        this.props.close();
    }
    render(){
        return(
            <div className="card">
                    <div className="card-header bg-warning text-white">
                        <h3 className="card-title mb-0">
                          Thêm công việc
                            <i class="far fa-times-circle float-right"
                            onClick={()=> this.showDisplayForm()}></i>
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                          <label>Tên: </label>
                          <input 
                              type="text"
                              className="form-control"
                              name="name"
                            />
                        </div>
                        <label>Trạng thái: </label>
                          <select
                            className="form-control"
                            name="status"
                          >
                              <option value={true}>Kích Hoạt</option>
                              <option value={false}>Ẩn</option>
                          </select><br/>
                          <div className="w-100">
                              <button type="submit" className="btn btn-primary w-50">
                                  <span className="fa fa-plus">Lưu lại</span>
                              </button>
                              <button type="submit" className="btn btn-danger w-50">
                                  <span className="fa fa-close">Hủy Bỏ</span>
                              </button>
                          </div>
                        </div>
                    </div>
        )
    }
}

export default TaskForm;