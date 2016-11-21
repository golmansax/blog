import React from 'react';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='row align-center'>
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
            developer living in New York.  I like to write about minimalism,
            self-improvement.
          </p>
        </div>
      </div>
    </div>
  );
}
