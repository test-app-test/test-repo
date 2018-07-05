//import React, { Component } from "react";
import React from 'react'
import './Header.css';

const Header = (props) => {
  console.log(props.txt2);
  return (
    <div>
      <h1>{props.tittle}</h1>
      <header className="menu">
        <span className="menu_item">{props.txt1}</span>
        <span className="menu_item">{props.txt2}</span>
        <span className="menu_item">{props.txt3}</span>
       </header>
    </div>
  )
}
export default Header;
// import './Header.css';

// class Header extends Component {
//   render() {
//     return (
//       <header className="menu">
//        <span className="menu_item">menu</span>
//        <span className="menu_item">menu2</span>
//        <span className="menu_item">menu3</span>
//       </header>
//     );
//   }
// }

// export default Header;
