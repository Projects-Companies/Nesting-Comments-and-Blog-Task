import React from "react";
import {Listcode2} from "./Listcode";
import { Link } from "react-router-dom";
import Data2 from './BloglistApi2';

const Bloglist2 = () => {
  return (
    <div className="bloglist">
      {Data2.map((data) => {
        return (
          <div key={data.id}>
            <Listcode2
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
          
          <li className="page-item ">
            <Link className="page-link" to="/">
             Previous
            </Link>
          </li>
          <li className="page-item active" aria-current="page">
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

export default Bloglist2;
