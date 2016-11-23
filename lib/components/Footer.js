import React from 'react';

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
            Reach out via <a href='https://twitter.com/golmansax'>Twitter</a>{' '}
            or <a href='mailto:holman@golmansax.com'>email</a>.
            I read every message, I promise!
          </p>
        </div>
      </div>
      <div className='row align-center Footer-links-section'>
        <div className='large-8 columns'>
          <small>
            © {new Date().getFullYear()} Holman Gao
            {' '}| <a href='https://golmansax.com'>Portfolio</a>
            {' '}| <a href='https://golmansax.com/blog'>Blog</a>
            {' '}| <a href='https://github.com/golmansax'>Github</a>
            {' '}| <a href='https://twitter.com/golmansax'>Twitter</a>
          </small>
        </div>
      </div>
    </div>
  );
}
