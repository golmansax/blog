import React from 'react';
import { blogPath } from '../utils';

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="row">
        <div className="columns">
          <a href={blogPath('/')}>Holman Gao</a>
        </div>
      </div>
    </div>
  );
}
