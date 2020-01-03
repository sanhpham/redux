import React,{ Component } from 'react';


class Item extends Component {

  constructor(props){
    super(props)
    this.handleDelete=this.handleDelete.bind(this)
    this.handleEdit=this.handleEdit.bind(this)
  }
  handleDelete(id){

    this.props.onClickDelete(id)
  }
  handleEdit(item){
    this.props.handleEdit(item);

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

export default Item;