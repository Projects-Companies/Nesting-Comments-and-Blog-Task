import React from "react";
import List from "./Listcode";
import Data from "./BloglistApi";
import { Link } from "react-router-dom";

const Bloglist = () => {
  return (
    <div className="bloglist">
      {Data.map((data) => {
        return (
          <div key={data.id}>
            <List
              name={data.name}
              para={data.para}
              date={data.date}
              desc={data.desc}
            />
          </div>
        );
      })}

      <nav aria-label="...">
        <ul className="pagination">
          
          <li className="page-item active">
            <Link className="page-link" to="/">
              1
            </Link>
          </li>
          <li className="page-item" aria-current="page">
            <Link className="page-link" to="/bloglist-2">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/bloglist-3">
              Next
            </Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default Bloglist;
