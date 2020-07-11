import React, {Component} from 'react';

var randomstring = require("randomstring");
class AddJobs extends Component {

    onGenerateData = ()=>{
        var tasks = [
            {
                id: randomstring.generate(),
                name: "Hoc lap trinh",
                status: true
            },
            {
                id: randomstring.generate(),
                name: "Choi game",
                status: false
            },
            {
                id: randomstring.generate(),
                name: "Solo Daxua",
                status: true
            }
        ]
        this.props.AddItem(tasks)
    }
    showDisplayForm(){
        this.props.showDF();
    }

    

    render(){
        return(
            <div>
                <button type="button" className="btn btn-primary" onClick={()=> this.showDisplayForm()}>
                          <span className="fa fa-plus mr-5"></span>Thêm công việc
                </button> 
                <button 
                    type="button" 
                    className="btn btn-danger ml-3"
                    onClick={this.onGenerateData}>
                    Generate Date
                </button> 
            </div>
        )
    }
}

export default AddJobs;