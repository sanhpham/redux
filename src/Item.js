import React,{ Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './actions/index'
class Item extends Component {

  constructor(props){
    super(props)
    this.handleDelete=this.handleDelete.bind(this)
    this.handleEdit=this.handleEdit.bind(this)
  }

  handleDelete(id){

    this.props.onDeleteItem(id)
  }
  handleEdit(item){
    this.props.onOpenForm();
    this.props.onEditItem(item)

  }

  render(){
    const {item}=this.props;
    const {index}=this.props;
    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td>{item.name}</td>
            {this.setElemLevel(item.level)}
            <td>
              <a  onClick={()=>this.handleEdit(item)}  className="btn btn-warning">Edit</a>
              <a  onClick={()=>this.handleDelete(item.id)} className="btn btn-danger">Delete</a>
            </td>
        </tr>

      );
  }
  setElemLevel(level){
      let elmLevel=<td className="badge badge-light">Small</td>;
      if(level===1){
        elmLevel=<td className="badge badge-success">Medium</td>;
      }else if(level===2){
        elmLevel=<td className="badge badge-danger">High</td>;
      }
      return elmLevel;
  }
  
}

const mapStateToProps = (state) =>{

   return {
        
   }
}

const mapDispatchToProps=(dispatch,props)=>{
    return {
      onDeleteItem:(id)=>{
        dispatch(actions.deleteItem(id))
      },
      onOpenForm:()=>{
        dispatch(actions.openForm())
      },
      onEditItem:(item)=>{
        dispatch(actions.editItem(item))
      }

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Item);