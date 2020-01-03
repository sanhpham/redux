import React,{ Component } from 'react';
import Item from './Item'
class List extends Component {


  render(){
  	const items=this.props.items;
  	const elmItem=items.map((item,index)=>{
  		return(
  			<Item handleEdit={this.props.handleEdit}  onClickDelete={this.props.onClickDelete} key={index} item={item} index={index} />	
  		)
  	})
    return (
        <div className="row">
        <div className="col-12 mt-5">
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">List Task</h3>
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th scope="col" className="text-center" style={{width: '10%'}}>#</th>
                  <th scope="col" className="text-center" style={{width: '50%'}}>Task</th>
                  <th scope="col" className="text-center" style={{width: '20%'}}>Level</th>
                  <th scope="col" className="text-center" style={{width: '20%'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {elmItem}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
      );
  }
  
}

export default List;
