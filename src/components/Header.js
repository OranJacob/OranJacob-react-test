import React from "react";
import { Link,} from 'react-router-dom';

export const Header = () => {
    return (
        <div className="d-flex flex-column flex-lg-row align-items-center py-3">                 
        <h2 className="mb-4">Expense check</h2>
        <ul className="list-unstyled ml-4">
          <li className="float-left mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="float-left">
            <Link to="/watchList">Watch list</Link>
          </li>
        </ul>
        </div>
    )
}