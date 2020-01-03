import React,{ Component } from 'react';

class Search extends Component {

  constructor(props){
    super(props);
    this.state={
      strSearch:' '
    };
    this.handleChange=this.handleChange.bind(this);
    this.handSearch=this.handSearch.bind(this);
    this.handClear=this.handClear.bind(this);
  }

  handSearch(){
    this.props.onClickSearch(this.state.strSearch);

  }
  handleChange(event){
    this.setState({
      strSearch:event.target.value
    })
  }
  handClear(){
    this.setState({strSearch:''})
    this.props.onClickSearch('');
  }

  render(){
    return (
        <div className="col-sm-3">
          <div className="input-group mb-3">
            <input value={this.state.strSearch} onChange={this.handleChange} type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"  />         
            <button onClick={this.handSearch} className="btn btn-outline-secondary" type="button">Go</button>
            <button onClick={this.handClear} className="btn btn-outline-success" type="button">Clear</button>
          </div>
        </div>
      
      );
  }
  
}

export default Search;
