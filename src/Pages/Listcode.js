import React from "react";
import {Link} from 'react-router-dom'

function Listcode(props) {
  return (
    <div>
      <div className="list-group">
        <Link 
          to="/blogview"
          className="list-group-item list-group-item-action  mb-4"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.name}</h5>
            <small>{props.date}</small>
          </div>
          <p className="mb-1">{props.para}</p>
          <p>{props.desc}</p>
        </Link>
      </div>
    </div>
  );
}

function Listcode2(props) {
  return (
    <div>
      <div className="list-group">
        <Link 
          to="/blogview-2"
          className="list-group-item list-group-item-action  mb-4"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.name}</h5>
            <small>{props.date}</small>
          </div>
          <p className="mb-1">{props.para}</p>
          <p>{props.desc}</p>
        </Link>
      </div>
    </div>
  );
}

function Listcode3(props) {
  return (
    <div>
      <div className="list-group">
        <Link 
          to="/blogview-3"
          className="list-group-item list-group-item-action  mb-4"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.name}</h5>
            <small>{props.date}</small>
          </div>
          <p className="mb-1">{props.para}</p>
          <p>{props.desc}</p>
        </Link>
      </div>
    </div>
  );
}

export default Listcode;
export  {Listcode2, Listcode3};
