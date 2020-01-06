import React,{ Component } from 'react';
import Search from './Search'
import Sort from './Sort'

import { connect } from 'react-redux'

import * as actions from './actions/index'

class Controll extends Component {

  constructor(props){
    super(props);
    
  }

  onHandleAddTask = () =>{
      this.props.onToogleForm();
  }
  
  render(){
    const elmIsToogleForm=this.props.isDisplayForm;

    let {orderBy,orderDir}=this.props;
    let elmBtn=<button onClick={this.onHandleAddTask} type="button" className="btn btn-info btn-block">Add Task</button>;
    if(elmIsToogleForm === true){
      elmBtn=<button onClick={this.onHandleAddTask} type="button" className="btn btn-success btn-block">Close Task</button>;
    }
    
    return (

        <div className="row">
        <Search onClickSearch={this.props.onHandleSearchGo} />
        <Sort
        handleSort={this.props.handleSort}
        orderBy={orderBy}
        orderDir={orderDir}
         />
        }
        }
        <div className="col-sm-5">
          {elmBtn}
        </div>
      </div>
      );
  }
  
}

const mapStateToProps= state =>{
  return {
    isDisplayForm:state.isDisplayForm
  };
}
const mapDispatchToProps=(dispatch,props)=>{
  return {
    onToogleForm : () => {
      dispatch(actions.toggleForm());
    },
    
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Controll);
