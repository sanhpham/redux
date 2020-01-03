import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Controll from './Controll';

import Form from './Form';

import List from './List'
import items from './Task'
import {filter,includes,orderBy as functionOrderBy,remove,reject} from 'lodash'

const uuidv4 = require('uuid/v4');
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items:items,
      isToogleForm:false,
      strSearch:'',
      orderBy:'NAME',
      orderDir:'ACS',
      itemSelected:null

    };
    this.onHandleToogle=this.onHandleToogle.bind(this)
    this.closeToogleForm=this.closeToogleForm.bind(this)
    this.handleSearch=this.handleSearch.bind(this)
    this.handleSort=this.handleSort.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleEdit=this.handleEdit.bind(this)
  }

  componentWillMount(){
    
    let items=JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      items:items,
    })
  }

  onHandleToogle(){
    this.setState({
      itemSelected:null,
      isToogleForm: !this.state.isToogleForm

    })
  }
  closeToogleForm(){
    this.setState({
      isToogleForm: false
    })
  }
  handleSearch(value){
    this.setState({
      strSearch:value
    })
  }
  handleSort(orderBy,orderDir){
    this.setState({
      orderBy:orderBy,
      orderDir:orderDir,
    })
  }

  handleDelete(id){
    let items=this.state.items;
    remove(items,(item)=>{
      return item.id===id;
    })
    this.setState({
      items:items,
    })
    localStorage.setItem('tasks',JSON.stringify(items));
  }
  handleSubmit(item){

    let {items}=this.state;

    let id=null;

    if(item.task_id !==''){
      console.log("edit")

      items=reject(items,{id:item.task_id});
      id=item.task_id;

    }else{
      id:uuidv4();
    }
    items.push({
        id:id,
        name:item.task_name,
        level:+item.task_level,
    })
    
    this.setState({
      items:items,
      isToogleForm:false,
    })

    localStorage.setItem('tasks',JSON.stringify(items));
  }

  handleEdit(item){

    this.setState({
      itemSelected:item,

      isToogleForm:true,
    })

  }
  render(){


    //[...] when update itemOriginal this.state.items not change ES6
    let itemOriginal=(this.state.items !== null) ? [...this.state.items]:[];
    let items=[];
    let isToogleForm=this.state.isToogleForm;
    let elmForm=null;

    let {orderBy,orderDir,itemSelected}=this.state

    if(isToogleForm){
      elmForm=<Form itemSelected={itemSelected} handleSubmit={this.handleSubmit} handleClose={this.closeToogleForm} / >
    }
    //search
    const search=this.state.strSearch;

    items=filter(itemOriginal,(item)=>{
      return includes(item.name.toLowerCase(),search.toLowerCase());
    })
    //SORT
    items=functionOrderBy(items,[orderBy.toLowerCase()],[orderDir.toLowerCase()]);
 



    //if(search.length>0){
    //  itemOriginal.forEach((item)=>{
   //     if(item.name.toLowerCase().indexOf(search)!==-1){
     //     items.push(item);
     //   }
//})
   // }else{
//items=itemOriginal;
    //}

    return (
      <div className="container">
        <div className="row">

          <Controll 
          orderBy={orderBy}
          orderDir={orderDir}
          handleSort={this.handleSort}
          onHandleSearchGo={this.handleSearch}
          onClickBtnAdd={this.onHandleToogle} 
          isToogleForm={isToogleForm}
          />

          {elmForm}

          <List handleEdit={this.handleEdit} onClickDelete={this.handleDelete} items={items} />
        </div>
      </div>
      );
  }
  
}

export default App;