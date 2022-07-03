import React from "react";
import "./App.css";
import Blogview from "./Pages/Blogview";
import Bloglist from "./Pages/Bloglist";
import Bloglist2 from "./Pages/Bloglist2";
import Bloglist3 from "./Pages/Bloglist3";
import { Routes, Route, Link } from "react-router-dom";
import Blogview2 from "./Pages/Blogview2";
import Blogview3 from "./Pages/Blogview3";
// import Comments from "./comments/Comments";

const App = () => {
  return (
    <div>
    
    
    <div className="navbars">
    <nav>
      <ul className="ul">
        <li>
          <Link to="/"><img src="https://picsum.photos/30/30" alt="logo unloaded" /></Link>
        </li>
        <li>
          <Link to="/bloglist">BLOGLIST</Link>
        </li>
        <li>
          <Link to="/blogview">BLOGVIEW</Link>
        </li>
      </ul>
    </nav>
  </div>

  <Routes>
    <Route path="/" element={<Bloglist />} />
    <Route path="/bloglist" element={<Bloglist />} />
    <Route path="/bloglist-2" element={<Bloglist2 />} />
    <Route path="/bloglist-3" element={<Bloglist3 />} />
    <Route path="/blogview" element={<Blogview />} />
    <Route path="/blogview-2" element={<Blogview2 />} />
    <Route path="/blogview-3" element={<Blogview3 />} />
  </Routes>
    </div>
  );
};

export default App;

// commentsUrl="http://localhost:3004/comments"
