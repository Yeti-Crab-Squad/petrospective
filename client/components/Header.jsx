import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
  return (
    <div id='header-nav'>
      <nav>
        <ul>
          <li>
            <Link to='bucket-list'>Bucket List</Link>
          </li>
          <li>
            <Link to='feed'>Feed</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
