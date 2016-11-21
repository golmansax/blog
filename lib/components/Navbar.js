import React from 'react';
import { blogPath } from '../utils';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='row align-center'>
        <div className='medium-8 columns'>
          <a className='Navbar-link clearfix' href={blogPath('/')}>
            <span className='Navbar-icon float-left' />
            <span className='Navbar-text float-left'>Blog | Holman Gao</span>
          </a>
        </div>
      </div>
    </div>
  );
}
