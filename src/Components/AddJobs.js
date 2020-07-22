import React, {Component} from 'react';

class AddJobs extends Component {

    showDisplayForm(){
        this.props.showDF();
    }
    
    render(){
        return(
            <div>
                <button type="button" className="btn btn-primary" onClick={()=> this.showDisplayForm()}>
                          <span className="fa fa-plus mr-5"></span>Thêm công việc
                </button> 
                
            </div>
        )
    }
}

export default AddJobs;