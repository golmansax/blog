import React from 'react';
import { blogPath } from '../utils';

export default function Footer() {
  return (
    <div>
      <div className='row align-center Footer-section'>
        <div className='large-2 medium-4 hide-for-small-only columns'>
          <div className='Footer-portrait' />
        </div>
        <div className='large-6 medium-8 columns Footer-about-container'>
          <h4>About me</h4>
          <div className='Footer-portrait-container show-for-small-only'>
            <div className='Footer-portrait show-for-small-only' />
          </div>
          <p>
            Hi!  My name is Holman, I am an entrepreneur and freelance
            developer living in New York.
            Reach out via{' '}
            <a href='https://twitter.com/golmansax' target='_blank' rel='noopener noreferrer'>
              Twitter
            </a> or <a href='mailto:holman@golmansax.com'>email</a>.
            I read every message, I promise!
          </p>
        </div>
      </div>
      <div className='row align-center Footer-links-section'>
        <div className='large-8 columns'>
          <small>
            © {new Date().getFullYear()} Holman Gao
            {' '}| <a href='/'>Home</a>
            {' '}| <a href='/about-me'>About Me</a>
            {' '}| <a href='/portfolio'>Portfolio</a>
            {' '}| <a href={blogPath('/')}>Blog</a> |{' '}
            <a href='https://github.com/golmansax' target='_blank' rel='noopener noreferrer'>
              Github
            </a> |{' '}
            <a href='https://twitter.com/golmansax' target='_blank' rel='noopener noreferrer'>
              Twitter
            </a> |{' '}
            <a href='/contact'>Contact</a>
          </small>
        </div>
      </div>
    </div>
  );
}
