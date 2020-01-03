import React,{ Component } from 'react';
import Search from './Search'
import Sort from './Sort'
class Controll extends Component {

  constructor(props){
    super(props);
    this.onHandleAddTask=this.onHandleAddTask.bind(this)
  }

  onHandleAddTask(){
    this.props.onClickBtnAdd();
  }
  
  render(){
    const elmIsToogleForm=this.props.isToogleForm;
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

export default Controll;
