import React, { Component } from 'react'


class TaskForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }
    componentDidMount(){
        if(this.props.task){
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status,
            });
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     // if (this.props.taskEditing !== null) {
    //     this.setState((prevState, nextProps) => ({
    //         id: nextProps.task.id,
    //         name: nextProps.task.name,
    //         status: nextProps.task.status
    //     }))
    //     console.log(this.state);
    //     // }
    // }
    
    

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
    onSubmit1 =(event) =>{
        // event.preventDefault()
        this.props.onSubmit(this.state)
    }
    abc = ()=>  {
        this.setState({
            name: '',
            status : true
        })
    }

    

    render(){
        var { id } = this.state
        return(
            <div className="card">
                    <div className="card-header bg-warning text-white">
                        <h3 className="card-title mb-0">
                          {id !== '' ? 'Cập nhật công việc' : 'Thêm công việc' }
                            <i className="far fa-times-circle float-right"
                            onClick={()=> this.showDisplayForm()}></i>
                        </h3>
                    </div>
                    <div className="card-body">
                    <form onSubmit={this.onSubmit1}>
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
                                    onClick={this.abc}   
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

export default TaskForm;