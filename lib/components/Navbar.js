import React from 'react';
import { blogPath } from '../utils';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='row align-center'>
        <div className='medium-8 columns text-center'>
          <a href={blogPath('/')}>Holman Gao</a>
          <p>
            Topics I like to write about:
          </p>
        </div>
      </div>
    </div>
  );
}
