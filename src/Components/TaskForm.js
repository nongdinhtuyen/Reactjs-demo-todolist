import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/index'

class TaskForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }

     UNSAFE_componentWillMount() {
        if (this.props.item) {
          this.setState({
            id: this.props.item.id,
            name: this.props.item.name,
            status: this.props.item.status,
        });
      }
    }
    

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.itemEditing){
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status,
            });
        }
        else this.onClear();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value
        this.setState({
            [name]: value
        })
    }
    showDisplayForm(){
        this.props.close();
    }

    onSave =(event) =>{
        event.preventDefault()
        this.props.onSaveTask(this.state)
        this.onCloseForm()
    }

    onClear = ()=>  {
        this.setState({
            name: '',
            status : true
        })
    }
    onCloseForm = () =>{
        this.props.onCloseForm();
    }
    

    render(){
        if(!this.props.isDisplayForm) return null;
        return(
            <div className="card">
                    <div className="card-header bg-warning text-white">
                        <h3 className="card-title mb-0">
                          { !this.state.id ? 'Thêm công việc' : 'Cập nhật công việc' }
                            <i className="far fa-times-circle float-right"
                            onClick={this.onCloseForm}></i>
                        </h3>
                    </div>
                    <div className="card-body">
                         <form onSubmit={this.onSave}>
                            <div className="form-group">
                            <label>Tên: </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                />
                            </div>
                        
                            <label>Trạng thái: </label>
                            <select
                                className="form-control"
                                name="status"
                                onSubmit={this.onSubmit}
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select><br/>
                            <div className="w-100">
                                <button type="submit" className="btn btn-primary w-50">
                                    <span>Lưu lại</span>
                                </button>
                                <button type="button"
                                    onClick={this.onClear}   
                                    className="btn btn-danger w-50">
                                    <span>Hủy Bỏ</span>
                                </button>
                            </div>
                        </form>
                 </div>
           </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task))
        },
        onCloseForm: () =>{
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);