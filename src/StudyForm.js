import React,{ Component } from 'react';


class StudyForm extends Component {

  constructor(props){
    super(props)
    this.state={
    	fullname:'',
    	course:'react',
    	sex:'nu',
    	sendMail:true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(this.state)

    event.preventDefault();
  }

  render(){

    return (
        <div className="container"> 
        <h1 className="text-center">Form StudyForm</h1> 
        <div className="row"> 
          <div className="col-xs-12 col-sm-12 col-md-4 well well-sm col-md-offset-4"> 
            <legend><a href="http://hocwebgiare.com/"><i className="glyphicon glyphicon-globe" /></a> Đăng ký thành viên!
            </legend> 
            <form onSubmit={this.handleSubmit} method="post" className="form"> 
                 <input name="fullname" value={this.state.fullname} onChange={this.handleChange} className="form-control"  placeholder="fullname" /> 
                 <label > KHÓA HỌC</label> 
              <div className="row"> 
                <div className="col-xs-4 col-md-4"> 
                <select value={this.state.course} onChange={this.handleChange} name="course" className="form-control">
	                <option value="React">React</option>
	                <option value="JSS">JSS</option>
	                <option value="MVC">MVC</option>
                 </select> 
                </div> 
                
              </div> <label className="radio-inline"> <input onChange={this.handleChange} checked={this.state.sex==='name'} name="sex" value="name"   type="radio" />   Nam 
              </label>
               <label className="radio-inline"> <input onChange={this.handleChange} checked={this.state.sex==='nu'} name="sex" value="nu"   type="radio" /> Nữ </label> 
              <br /> 
              <br /> 
              <div className="checkbox">
              	<label>
              		<input checked={this.state.sendMail} onChange={this.handleChange} name="sendMail" type="checkbox"/>send Mail
              	</label>
              </div>
              <button  className="btn btn-lg btn-primary btn-block" type="submit"> Đăng ký</button> 
            </form> 
          </div> 
        </div>
      </div>

      );
  }
  
  
}

export default StudyForm;