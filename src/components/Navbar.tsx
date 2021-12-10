import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/todos-context-api">Context Api</Link>
      <Link to="/todos-page">React Query</Link>
    </div>
  );
};

export default React.memo(NavBar);
