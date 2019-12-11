import React from "react";

function navbar(props) {
  return (
    <ul className="list">
      {props.item.map(el => (
        <li className="dropdown">
          {el.title}

         
           
            {!el.drop
              ? null
              :  <ul className="dropmenu">{el.drop.map(e =>(

               <li className="dropdown-content ">{e}</li>
               ))
               }</ul>
            }
        </li>
      ))}
    </ul>
  );
}

export default navbar;
