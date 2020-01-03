import React, { Component } from 'react';

class Form extends Component {

  constructor(props){
    super(props);
    this.state={
      task_id:'',
      task_name:'',
      task_level:0,
    }

    

    this.onCloseForm=this.onCloseForm.bind(this)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  onCloseForm(){
    this.props.handleClose();
  }

  componentWillMount(){
    let item=this.props.itemSelected;
    if(item !== null){
      this.setState({
        task_id:item.id,
        task_name:item.name,
        task_level:item.level
      })
    }
  }
  componentWillReceiveProps(nextProps){
    let item=nextProps.itemSelected;
    if(nextProps !== null){
      this.setState({
        task_id:item.id,
        task_name:item.name,
        task_level:item.level
      })
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    let item={
      task_id:this.state.task_id,
      task_name:this.state.task_name,
      task_level:this.state.task_level,
    };

    this.props.handleSubmit(item);
    event.preventDefault();
  }


  render(){
    return (
      <div className="row">
        <div className="col-6 offset-6 pull-right">
          <form onSubmit={this.handleSubmit} method="POST" className="form-inline">
            <div className="form-group">
              <div className="sr-only" htmlFor="task_name">Label</div>
              <input name="task_name" value={this.state.task_name} onChange={this.handleChange} type="text" className="form-control" placeholder="Task Name" />
            </div>
            <div className="form-group">
              <div className="sr-only">Label</div>
              <select value={this.state.task_level} name="task_level" onChange={this.handleChange} className="form-control">
                <option value={0}>Small</option>
                <option value={1}>Medium</option>
                <option value={2}>High</option>
              </select>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
            <button onClick={this.onCloseForm} className="btn btn-danger" type="button">Cancel</button>
          </form>
        </div>
      </div>
      );
  }
  
  
}

export default Form;
