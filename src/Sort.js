import React,{ Component } from 'react';


class Sort extends Component {

  constructor(){
     super();

     this.state = {
           displayMenu: false,
         };

      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
      this.handleSort=this.handleSort.bind(this);

    };


  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  handleSort(orderBy,orderDir){
    
    this.props.handleSort(orderBy,orderDir)
  }
  render(){
    let {orderBy,orderDir}=this.props;

    let strSort=orderBy+'-'+orderDir;
    return (
        <div className="col-sm-4">
            <div  className="dropdown" style = {{background:"red",width:"200px"}} >
               <div className="button" onClick={this.showDropdownMenu}> SortBy </div>

                { this.state.displayMenu ? (
                <ul>
                   <li><a onClick={()=>this.handleSort('NAME','ACS')} className="active" role="button">Name ACS</a></li>
                   <li><a onClick={()=>this.handleSort('NAME','DESC')} role="button">NAME DES</a></li>
                   <li><a onClick={()=>this.handleSort('LEVEL','ACS')} role="button">LEVEL ACS</a></li>
                   <li><a  onClick={()=>this.handleSort('LEVEL','DESC')}role="button">LEVEL DES</a></li>
                   
                </ul>
              ):
              (
                null
              )
              }

            </div>
                <span className="label label-success">{strSort}</span>
        </div>

      );
  }
  
  
}

export default Sort;