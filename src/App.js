// import React from "react";
// import "./App.css";
// import Blogview from "./Pages/Blogview";
// import Bloglist from "./Pages/Bloglist";
// import { Routes, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <div className="nav">
//         <nav>
//           <ul className="ul">
//             <li>
//               <Link to="/"><img src="https://picsum.photos/30/30" alt="logo unloaded" /></Link>
//             </li>
//             <li>
//               <Link to="/bloglist">BLOGLIST</Link>
//             </li>
//             <li>
//               <Link to="/blogview">BLOGVIEW</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <Routes>
//         <Route path="/" element={<Bloglist />} />
//         <Route path="/bloglist" element={<Bloglist />} />
//         <Route path="/blogview" element={<Blogview />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Comments from "./comments/Comments";

const App = () => {
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Comments
        currentUserId="1"
      />
    </div>
  );
};

export default App;

// commentsUrl="http://localhost:3004/comments"
