import React, { Component } from "react";

class ListOfUsers extends Component {
  render() {
    console.log( this.props.items);
    this.props.items = [];
    return (
      <div>

       {this.props.items.map((item,index) =>
       <li key={index}>
          {item.name} : {item.age}
       </li>

      )}
      </div>
    );
  }
}

export default ListOfUsers;


